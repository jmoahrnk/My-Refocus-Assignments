const Employee = require("./employee")

class HumanResources extends Employee{
    constructor(name, salary){
        super(name, salary);
    }
    job_task(){
        console.log(`I hire new employees for the company.`);
    }
}

let nadia = new HumanResources('Nadia', 1700);
nadia.introduction();
nadia.employeeSalary();
nadia.job_task();
nadia.employment();