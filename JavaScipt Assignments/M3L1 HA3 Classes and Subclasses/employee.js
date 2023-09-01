class Employee{
    companyName = "MHA";
    name;
    salary;

    constructor(name, salary){
        this.name = name;
        this.salary = salary;
    }
    introduction(){
        console.log(`Hi, my name is ${this.name}.`);
    }
    employeeSalary(){
        console.log(`${this.name}'s salary is $${this.salary}.`);
    }
    employment(){
        console.log(`I work at ${this.companyName}.`);
    }
}

module.exports = Employee; 