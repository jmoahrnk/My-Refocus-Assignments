const Employee = require("./employee")

class Tester extends Employee{
    constructor(name, salary){
        super(name, salary);
    }
    job_task_1(){
        console.log(`I check if a code passes.`);
    }
    job_task_2(){
        console.log(`I check if a code is rejected and needs revision.`);
    }

}
let sam = new Tester('Sam', 2200);
sam.introduction();
sam.employeeSalary();
sam.job_task_1();
sam.job_task_2();
sam.employment();