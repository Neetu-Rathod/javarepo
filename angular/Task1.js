// interface Employee{
//     empId:number;
//     emSlary:number;
//     display():void;
// }
// interface Address extends Employee
// {
//     city:string;
//     display():void;
// }
// class Baby implements Address
// {
//     empId: number;
//     emSlary: number;
//     city: string;
//     display1(): any 
//     {
//         return (`EmployeeId ${this.empId},Employee Salary ${this.emSlary}`);
//     }
//     display():any 
//     {
//        return (`employeeCity ${this.city}`);
//     }
// }
// let s= new Baby();
// s.empId=1;
// s.emSlary=2000;
// s.city="Bhopal";
// console.log(s.display());
// console.log(s.display());
//Polymorphism
// class Bike{
//     Disply (): void
//     {
//         console.log("running Bike");
//     }
// }
// class Scoty extends  Bike{
//     Disply(): void 
//     {
//         console.log("running scoty");      
//     }
// }
// let  ob  = new Scoty();
// ob.Disply();
var A = /** @class */ (function () {
    function A(variable) {
        this._variable = variable;
    }
    Object.defineProperty(A.prototype, "variable", {
        get: function () {
            return this._variable;
        },
        set: function (value) {
            if (value === '')
                throw new Error("Variable cannot be an empty string");
            this._variable = value;
        },
        enumerable: false,
        configurable: true
    });
    return A;
}());
var object = new A('string');
//setting the variable
object.variable = 'different string';
//getting the variable
console.log(object.variable);
