// class Emp{
//     empId:number=101;
//     empName:string="Neetu Rathod";
//     empSalary:number=1000;
//     Display():void{
//         console.log(`Employee Id ${this.empId},Employee Name ${this.empName},Employe Salary ${this.empSalary}`);
//     }
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// }
// let emp:Emp= new Emp();
// emp.Display();
// class Employeee
// {
//     empId:number;
//     empName:string;
//     empSalary:number;
//     constructor(empId:number,empName:string,empSalary:number)
//     {
//        this.empId=empId;
//        this.empName=empName;
//        this.empSalary=empSalary;
//     }
//     Display():void
//     {
//         console.log(`Employee : emoployee id ${this.empId} employee name ${this.empName} employee ${this.empSalary}`);
//     }
// }
// class Trainer extends Employeee
// {
//     trainerSpeciality:string;
//      constructor(trainerSpeciality:string,emp:Employeee)
//      {
//          super(emp.empId,emp.empName,emp.empSalary);
//          this.trainerSpeciality=trainerSpeciality;
//      }
//      Display(): void {
//          console.log(`Trainer : employee id ${this.empId},employee name ${this.empName},employee Slaary ${this.empSalary}, trainerSpeciality ${this.trainerSpeciality}`);
//      }
// }
// let em:Employeee=new Employeee(101,"Nitu",1000);
// em.Display();
// let ob:Employeee = new Employeee(102,"Ankit",23000);
// ob. Display();
// let tre:Trainer = new Trainer("Android Devloper",em);
// tre.Display();
// let tre1:Trainer= new Trainer("Android Devloper",ob);
// tre1.Display();
var Emp = /** @class */ (function () {
    function Emp(id, name, Salary) {
        this.eId = id;
        this.eName = name;
        this.basicSalary = Salary;
    }
    return Emp;
}());
var Trainer = /** @class */ (function (_super) {
    __extends(Trainer, _super);
    function Trainer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Trainer.prototype.callSalary = function (hrs) {
        var totalSalary = this.basicSalary + (hrs * 2000);
        console.log(totalSalary);
    };
    Trainer.prototype.Greet = function () {
        return "WelCome" + this.eName;
    };
    return Trainer;
}(Emp));
var trainer = new Trainer(101, "Nitu", 120000);
console.log(trainer.Greet());
trainer.callSalary(4);
