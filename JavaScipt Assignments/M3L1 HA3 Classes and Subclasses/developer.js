const Employee = require("./employee")

class Developer extends Employee{
    constructor(name, salary, specialty){
        super(name, salary);
        this.specialty=specialty;
    }
    specialization(){
        console.log(`I am a developer specializing in ${(this.specialty).toLowerCase()}.`);
    }
}

let izuku = new Developer('Izuku', 2000, 'Front-end Development');
izuku.introduction();
izuku.employeeSalary();
izuku.specialization();
izuku.employment();