interface Employee{
    empId:number;
    emSlary:number;

    display():void;
}
interface Address extends Employee
{
    city:string;

    display():void;
}
class Sturdent implements Address
{
    empId: number;
    emSlary: number;
    city: string;
    display(): void 
    {
        return (`EmployeeId ${this.empId},Employee Salary ${this.emSlary}`);
    }
    display():void 
    {
       return (`employeeCity ${this.city}`;)
    }
}
let s= new Sturdent();
s.empId=1;
s.emSlary=2000;
s.city="Bhopal";

console.log(s.display());
console.log(s.display());
