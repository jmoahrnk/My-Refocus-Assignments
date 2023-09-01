const Employee = require("./employee")

class Marketer extends Employee{
    constructor(name, salary){
        super(name, salary);
    }
    job_task_1(){
        console.log(`I create promotions for my company.`);
    }
    job_task_2(){
        console.log(`I show products to potential customers.`);
    }
}

let duke = new Marketer ('Duke', 2400);
duke.introduction();
duke.employeeSalary();
duke.job_task_1();
duke.job_task_2();
duke.employment();