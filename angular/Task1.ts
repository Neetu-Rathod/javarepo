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


class A {
    private _variable: string;
  
    constructor(variable:string){
      this._variable = variable;
    }
  
    get variable(): string {
      return this._variable;
    }
  
    set variable(value: string) {
      if(value === '') throw new Error("Variable cannot be an empty string");
      this._variable = value;
    }
  }
  
  const object = new A('string')
  
  //setting the variable
  object.variable = 'different string'
  
  //getting the variable
  console.log(object.variable)

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


// class A {
//   private _variable: string;

//   constructor(variable:string){
//     this._variable = variable;
//   }

//   get variable(): string {
//     return this._variable;
//   }

//   set variable(value: string) {
//     if(value === '') throw new Error("Variable cannot be an empty string");
//     this._variable = value;
//   }
// }

// const object = new A('string')


// object.variable = 'different string'


// console.log(object.variable)

class Animal {
  species: string;
  constructor(species: string) {
      this.species = species
  }
}
class Person {
  name: string;
  constructor(name: string) {
      this.name = name
  }
}
interface Employee extends Person, Animal {
  employeeCode: string;
}
let employee: Employee = {
  species: 'human',
  name: 'Joe',
  employeeCode: '123'
}
