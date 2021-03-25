<template>
  <div id="app">
    <Employee 
      v-for="(employee, index) in employees" 
      :key="index" 
      :name="employee.name"
      :position="employee.position"
      :phone="employee.phone"
      :email="employee.email"
      :children="employee.children"
    />
  </div>
</template>

<script>
import Employee from "./components/Employee";
import fetchData from './fakeData'

export default {
  name: "App",
  components: {
    Employee
  },
  data () {
    return {
      employees: []
    }
  },
  mounted () {
    this.employees = fetchData()
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  display: flex;
  justify-content: center;
}
</style>
