 const UserList = [
    {
        id: 1,
        name: "Ryan",
        username: "Ryanisnamemy",
        age: 25,
        nationality: "CHILE"
    },
    {
        id: 2,
        name: "Karen",
        username: "Ostaphia",
        age: 22,
        nationality: "BRAZIL",
        friends: [
        {
            id: 3,
            name: "Jordan",
            username: "Soysprite",
            age: 23,
            nationality: "CANADA"
        },
        {
            id: 4,
            name: "Walker",
            username: "Cisler",
            age: 25,
            nationality: "INDIA"
        },
        ]
    },
    {
        id: 3,
        name: "Jordan",
        username: "Soysprite",
        age: 23,
        nationality: "CANADA"
    },
    {
        id: 4,
        name: "Walker",
        username: "Cisler",
        age: 25,
        nationality: "INDIA",
        friends: [
            {
            id: 2,
            name: "Karen",
            username: "Ostaphia",
            age: 22,
            nationality: "BRAZIL",
            }
        ]
    },
    {
        id: 5,
        name: "Florida",
        username: "Imsmoller",
        age: 30,
        nationality: "CHINA"
    },
];



module.exports = {UserList};