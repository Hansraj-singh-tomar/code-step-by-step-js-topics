// types of employee


// These are the products
class FullTime {
    salary = 10000;
}
class PartTime {
    salary = 5000;
}
class Contractor {
    salary = 7000;
}
class Freelancer {
    salary = 3000;
}


// Factory/Creator
class EmployeeFactory {
    emp = null;
    createEmployee(type) {  // Machine
        switch (type) {
            case 'fulltime' : 
            this.emp = new FullTime();
            console.log(this.emp);  // FullTime {salary: 10000}
            break;
            case 'parttime' : 
            this.emp = new PartTime();
            break;
            case 'contractor' : 
            this.emp = new Contractor();
            break;
            case 'freelancer' : 
            this.emp = new Freelancer();
            break;
            default : break;
        }
        this.emp.type = type;
        return this.emp;
    }
}


// client 
const employeeFactory = new EmployeeFactory();
console.log(employeeFactory); // EmployeeFactory {emp: null}

const fullTimeEmp = employeeFactory.createEmployee('fulltime');
console.log(fullTimeEmp);  // FullTime {salary: 10000, type: 'fulltime'}

const partTimeEmp = employeeFactory.createEmployee('parttime');
console.log(partTimeEmp);  // PartTime {salary: 5000, type: 'parttime'}

const contractor = employeeFactory.createEmployee('contractor');
console.log(contractor);  // Contractor{salary: 7000, type: 'contractor'}

const freelancer = employeeFactory.createEmployee('freelancer');
console.log(freelancer);  // Freelancer{salary: 3000, type: 'freelancer'}
