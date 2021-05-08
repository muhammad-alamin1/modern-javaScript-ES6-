const person = { name: 'Jack william', age: 17, job: 'facebook', gfName: 'Ema Watson', phone: '01713735347', friends: ['Muhmmad', 'Imran', 'Umor'] };

const { gfName, phone, name } = person;

console.log(gfName, phone, name);


const friends =  ['Muhmmad', 'Imran', 'Umor','Alamin','Sobuj'];
const [first,second, ...restFriends] = friends;
console.log(restFriends);


const complexObject = { 
    name:'Muhmmad',
    info:{
        address:'Kola bagan',
        leader:'Tiger'
    },
    country:'Bangladesh'

}

const {leader} = complexObject.info;
console.log(leader);