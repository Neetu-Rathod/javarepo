// class Car {   
//    Color:string     
//    constructor(color:string) {   
//       this.Color = color  
//    }   
// }   
// class Audi extends Car {   
//     Price: number  
//     constructor(color: string, price: number) {  
//         super(color);  
//         this.Price = price;  
//     }  
//     display():void {  
//         console.log("Color of Audi car: " + this.Color);  
//         console.log("Price of Audi car: " + this.Price);  
//     }  
// }  
// let obj = new Audi(" Black", 5600000 );  
// obj.display();  
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
// Single level inheritance
//  class Shape {   
//    Area:number   
//    constructor(area:number) {   
//       this.Area = area  
//    }   
// }   
// class Circle extends Shape {   
//    display():void {   
//       console.log("Area of the circle: "+this.Area)   
//    }   
// }  
// var obj = new Circle(320);   
// obj.display()  
// multilevel inheritance
// class Animal {   
//     eat1():void {   
//         console.log("Eating  1")   
//      }   
// }   
// class Dog extends Animal {   
//    eat2():void {   
//       console.log("Eating  2")   
//    }   
// }  
// class BabyDog extends Dog{   
//     eat3():void {   
//         console.log("Eating 3")   
//      }  
// }  
// let obj = new BabyDog();   
// obj.eat1();  
// obj.eat2();  
// obj.eat3() 
//Hierarchical Inheritance
// class Pet{
//    name:string; 
//    constructor(name:string) {   
//        this.name = name;  
//   }   
// }
// class Dog extends Pet{
//    display():void{
//        console.log("name of my dog is : " + this.name);
//    }
// }
// class Fish extends Pet{
//    display():void{
//        console.log("name of my fish is : " + this.name);
//    }
// }
// var obj = new Dog("Kitty");
// obj.display();
// var obj = new Fish("GoldFish");
// obj.display();
//multiple inheritance
// class Ani {
//    species: string;
//    constructor(species: string) {
//        this.species = species
//    }
// }
// class Pet {
//    name: string;
//    constructor(name: string) {
//        this.name = name
//    }
// }
// interface Emp extends Pet, Ani{
//    emCode: string;
//    display (){
//       console.log()
//    }
// }
// let ob: Emp = new Emp;
// ob.sayImAnEngineer();
// pecies: 'human',
//    name: 'Joe',
//    emCode: '123;
//Hybrid
var dadaji = /** @class */ (function () {
    function dadaji() {
        this.dname = "Ram";
    }
    return dadaji;
}());
var Baby = /** @class */ (function (_super) {
    __extends(Baby, _super);
    function Baby() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.dname = "Ram";
        _this.pname = "Ragav";
        _this.sname = "Love";
        _this.bname = "Kush";
        return _this;
    }
    Baby.prototype.display = function () {
        console.log("name  ".concat(this.dname, ",pname ").concat(this.pname, ",sname ").concat(this.sname, ", bname ").concat(this.bname));
    };
    return Baby;
}(dadaji));
var ob = new Baby();
ob.display();
//overriding
// class Vehicle {
//    info(): void {
//       console.log("The object is the vehicle.");
//    }
// }
// class car extends Vehicle {
//    name: string = "car";
//    color: string = "Black";
//    size: number = 6;
//    info(): void {
//       console.log("The object is a " + this.name);
//       console.log("The color of the car is " + this.color);
//    }
//    get_size(): void {
//       console.log("The length of the car in the feet is " + this.size);
//    }
// }
// let v= new car();
// v.info();
// v.get_size();
// 2 Example ==>
// class sum {
//    operation(a: number, b: number): number {
//       return a + b;
//    }
// }
// class multiply extends sum {
//  
//    operation(a: number, b: number): number {
//       return a * b;
//    }
// }
// let multi = new multiply();
// let result = multi.operation(10, 20);
// console.log(
//   "Result = " + result
// );
//overloding
//      class Apple  
// {  
//     public foo(s: string): number;  
//     public foo(n: number): string;  
//     public foo(arg: any): any   
//     {  
//         if (typeof(arg) === 'number')  
//             return arg.toString();  
//         if (typeof(arg) === 'string')  
//             return arg.length;  
//     }  
// }  
// let obj = new Apple();  
// console.log("Result: " +obj.foo(101));  
// console.log("Length of String: " +obj.foo("JavaTpoint"));  
//Encapsulation
// class Car
// {
//     name:string="Farari";
//     Price:number=4556000;
// }
// class Seat extends Car{
//    color:string="Red";
// }
// let c:Car= new Car();
// let s:Seat= new Seat();
// console.log(s.name); 
//Abstract
//    abstract class Pson {
//       abstract name: string;
//       display(): void{
//           console.log(this.name);
//       }
//   }
//   class Employee extends Pson { 
//       name: string;
//       empCode: number;
//       constructor(name: string, code: number) { 
//           super();
//           this.empCode = code;
//           this.name = name;
//       }
//   }
//   let emp: Pson = new Employee("James", 100);
//   emp.display(); 
// abstract class sample 
// {
//    prob1: string;
//    constructor(prob1: string) 
//    {
//       this.prob1 = prob1;
//    }
//    abstract demo(): void;
//    save(): void {
//       console.log(" Executed.");
//    }
// }
// class test extends sample {
//    prob2: number;
//    constructor(prob1: string, prob2: number) {
//       super(prob1);
//       this.prob2 = prob2;
//    }
//    demo(): void {
//       console.log("The value prob 3 is " + this.prob2);
//    }
// }
// let obj = new test("T", 1000);
// obj.demo();
// obj.save();
