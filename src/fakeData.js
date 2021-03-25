export default function fetch () {
    return [{
        name: 'Alisha Hall',
        position: 'Head of department',
        phone: '(405) 372-9756',
        email: 'ahall@gmail.com',
        children: [
            {
                name: 'Milena Hunter',
                position: 'Attending physician',
                phone: '(124) 622-1256',
                email: 'mhunter@gmail.com',
                children: [
                    {
                        name: 'Milena Hunter',
                        position: 'Attending physician',
                        phone: '(124) 622-1256',
                        email: 'mhunter@gmail.com',
                    },
                    {
                        name: 'Maximus Dixon',
                        position: 'Medical director',
                        phone: '(264) 684-4373',
                        email: 'mdixon@gmail.com',
                    }    
                ]
            },
            {
                name: 'Maximus Dixon',
                position: 'Medical director',
                phone: '(264) 684-4373',
                email: 'mdixon@gmail.com',
            }    
        ]
    }]
}