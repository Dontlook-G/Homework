const user = {
    name: "Raul",
    age: 21,
    isStudent: true,
    sayHello(name) {
        console.log(`Hello ${name}`)
    }
}
user.sayHello("илья")


const users = [
    {
    name: "Anna",
    age: 24,
    isAdmin: true
    },
    {
    name: "Dima",
    age: 54,
    isAdmin: false
    },
    {
    name: "Ilya",
    age: 36,
    isAdmin: true
    },
    {
    name: "Nikita",
    age: 18,
    isAdmin: true
    },
    {
    name: "Dasha",
    age: 45,
    isAdmin: false
    },
    {
    name: "Sasha",
    age: 24,
    isAdmin: true
    }
]

let admins = null

for(let i = 0; i < users.length; i++) {
    if (users[i].isAdmin === false){
        admins++
    }
}
console.log(admins)