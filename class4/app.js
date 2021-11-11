let employee_number=1;
const print_personDetails=(person)=>
{
    console.log("employee",employee_number+"");
    const{name,age,qualification}=person;
    console.log("name:",name);
    console.log("age:",age+"");
    console.log("qualification:",qualification);
    employee_number++
}
const employees={
    name: "Raeez",
    age:23,
    qualification:"b.tech",
    collegue1:{
        name:"Rajasree",
        age:24,
        qualification:"MCA"
    },
    collegue2:{
        name:"Geethu",
        age:23,
        qualification:"b.tech"
    },
    collegue3:{
        name:"Faslu",
        age:25,
        qualification:"b.tech"
    },
}

const {name,age,qualification,collegue1,collegue2,collegue3}=employees
console.log("employees are");
print_personDetails(employees)

print_personDetails(collegue1)
print_personDetails(collegue2)

print_personDetails(collegue3)