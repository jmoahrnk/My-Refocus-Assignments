const Employee = require("./employee")

class TeamLead extends Employee{
    constructor(name, salary){
        super(name, salary);
    }
    job_task(){
        console.log(`I give instuctions to other employees.`);
    }
}

let misha = new TeamLead('Misha', 2300);
misha.introduction();
misha.employeeSalary();
misha.job_task();
misha.employment();