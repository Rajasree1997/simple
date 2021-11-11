const print_personDetails=(person)=>
{
    const{name,age}=person;
    console.log(name);
    console.log(age);
}
const person={
    name: "raeez",
    age:23,
    bestfriend:{
        name:"deepu",
        age:14},

    sayHello:()=>{
        console.log("hello");
    }
}
person.job="software engineer";
const {bestfriend,name,age,sayHello,job}=person
sayHello();
print_personDetails(person)
console.log(job);

print_personDetails(bestfriend)
