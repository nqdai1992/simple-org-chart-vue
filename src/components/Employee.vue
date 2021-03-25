<template>
  <div ref="container" class="employee">
    <b-card ref="parent" class="employee__card">
      <b-card-text>
        <strong>Name:</strong> <span>{{ name }}</span>
        <br />
        <strong>Position:</strong> <span>{{ position }}</span>
        <br />
        <strong>Phone:</strong> <span>{{ phone }}</span>
        <br />
        <strong>Email:</strong> <span>{{ email }}</span>
        <br />
        <b-button class="employee__button-expand" v-if="children && children.length > 0" @click="toogle" variant="primary" size="sm">{{
          expand ? "-" : "+"
        }}</b-button>
      </b-card-text>
    </b-card>
    <div
      class="employee__children"
      v-if="children && children.length > 0 && expand"
    >
      <Employee
        @toogle-expand="handleExpand"
        ref="child"
        v-for="(employee, index) in children"
        :key="index"
        :name="employee.name"
        :position="employee.position"
        :phone="employee.phone"
        :email="employee.email"
        :children="employee.children"
      />
    </div>
  </div>
</template>

<script>
import { SVG } from "@svgdotjs/svg.js";

export default {
  name: "Employee",
  props: {
    name: String,
    position: String,
    phone: String,
    email: String,
    children: Array,
  },
  data: () => ({
    svg: null,
    expand: false,
  }),
  mounted() {
    this.svg = SVG()
      .addTo(this.$refs.container)
      .css("position", "absolute")
      .css("z-index", "-1")
      .css("top", "0")
      .css("left", "0")
      .size("100%", "100%");

    // this.svg.clear()
  },
  methods: {
    toogle() {
      this.expand = !this.expand;
      this.$nextTick(() => {
        this.$emit("toogle-expand");
        if (this.expand) {
          this.drawConnectLine();
        } else {
          this.svg.clear();
        }
      });
    },
    handleExpand() {
      this.svg.clear();
      this.$nextTick(() => {
        this.drawConnectLine();
      });
    },
    drawConnectLine() {
      if (this.children) {
        const [startX, startY] = [
          this.$refs.parent.offsetLeft +
            this.$refs.parent.getBoundingClientRect().width / 2,
          this.$refs.parent.offsetTop +
            this.$refs.parent.getBoundingClientRect().height,
        ];
        this.children.forEach((element, index) => {
          const child = this.$refs.child[index].$el;
          const [endX, endY] = [
            child.offsetLeft + child.getBoundingClientRect().width / 2,
            child.offsetTop,
          ];
          this.svg
            .polyline([
              [startX, startY],
              [startX, (startY + endY) / 2],
              [endX, (startY + endY) / 2],
              [endX, endY],
            ])
            .fill("none")
            .stroke({
              width: 3,
              color: "#fff",
              linecap: "round",
              linejoin: "round",
            })
            .animate()
            .stroke({ color: "#f06" });
        });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.employee {
  position: relative;
  svg {
    position: absolute;
    top: 0;
    left: 0;
  }
}
.employee__card {
  text-align: left;
  width: 300px;
  margin: 0 auto;
  position: relative;
  .employee__button-expand {
    position: absolute;
    left: 50%;
    bottom: 0;
    transform: translate(-50%, 50%);
    padding: 0;
    width: 24px;
    height: 24px;
    border-radius: 50%;
  }
}
.employee__children {
  display: flex;
  justify-content: center;
  margin-top: 40px;
  .employee {
    margin-right: 40px;
    &:last-child {
      margin-right: 0;
    }
  }
}
</style>
