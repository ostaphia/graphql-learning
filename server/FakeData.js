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
        ],
        
        
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
const MovieList = [
{
id: 1,
name: "My Neighbor Totoro",
yearOfPublication: 1988,
isInTheatres: true,
},
{
id: 2,
name: "Kikis Delivery Service",
yearOfPublication: 1989,
isInTheatres: true,
},
{
id: 3,
name: "Howls Moving Castle",
yearOfPublication: 1988,
isInTheatres: false,
},
{
id: 4,
name: "Ponyo",
yearOfPublication: 2008,
isInTheatres: true,
},
{
id: 5,
name: "Spirited Away",
yearOfPublication: 2001,
isInTheatres: false,
},
];



module.exports = {UserList, MovieList};
