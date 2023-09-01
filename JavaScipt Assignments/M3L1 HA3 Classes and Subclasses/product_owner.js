const Employee = require("./employee")

class ProductOwner extends Employee{
    projects=[];

    constructor(name, salary){
        super(name, salary);
    }
    job_task(){
        console.log(`I create new projects`);
    }
    create_project(projectName, projectGoal){
        this.projects.push({project_name: projectName, project_goal: projectGoal})
    }
}

let naskov = new ProductOwner('Naskov' , 3000);
naskov.introduction();
naskov.employeeSalary();
naskov.job_task();
naskov.employment();

naskov.create_project('New Advertisement',
'Add an advertisement for a new product on the company website.');
console.log(`${naskov.projects[0].project_name}: ${naskov.projects[0].project_goal}`);