class Employee{
    empId:number=101;
    empName:string="Neetu Rathod";
    empSalary:number=1000;
    Display():void{
        console.log(`Employee Id ${this.empId},Employee Name ${this.empName},Employe Salary ${this.empSalary}`);
    }
    
}
let emp:Employee = new Employee();
emp.Display();