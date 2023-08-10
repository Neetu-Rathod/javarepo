"use strict";
// function Assignment()
// {
//     var s:string="Hello World";
//     console.log(s);
// }
// Assignment();
//=======================================
// data Type
//=======================================        
// function Assignment() {
//     var Pname: string = "Neetu";
//     var age: number = 23;
//     var gender: string = "female";
//     var isDevloper: boolean = true;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Student = void 0;
//     console.log(Pname,age,gender,isDevloper);
// }
// Assignment();
//===========================================================
//  Variables
// function Demo(){
//      let a:number=10;
//      let b:string="Dollop";
//      console.log(a,b);
//      }
//      Demo();
//====================================================
//   var in TypeScript
//======================================================
// var petName:string ="dog";
// function setPetName()
// {
//     var petName:string="cat";
//      console.log("Inside function::"+petName);
// }
// setPetName();
// console.log("outside function::"+petName);
// var index = 1;
// for(var index=1;index<5;index++)
// {
//     console.log("Inside for loop"+index);
// }
// console.log("outside for loop"+index);
//=================================================
//      let in TypeScript
// function display()
// {
//     let msg:string="Welcom to Indore...";
// {
//     let msg:string="Welcom to ViajyNagar...";
//     console.log("Inside Block    " +msg);
// }
//      console.log("outside Block     "+msg);
// }
// display();
// let i=0;
// for(let i=0;i<5;i++)
// {
//     console.log("Inside loop ::  "+i);
// }
//      console.log("outside loop ::  "+i);
//====================================================
//  Array
// function eat()
//{
//     let fruits:string[];
//     fruits=['mango','orange','banana','papaya'];
//     console.log(fruits);
// let animals:Array<string>;
// animals=['Tiger','Loin','Elephent'];
// console.log(animals);
// let genericArray:Array<string|number|boolean>;
// genericArray=['BMI',10,true,"Hello"];
// console.log(genericArray);
// let generi:Array<string|number|boolean>;
// generi=['BMI',10,true,"Hello"];
// // console.log(generi);
// console.log(generi[2]);
//  }
// eat();
//===============================================
//     Loop
//  function loop1(){
//  for(let i=1;i<=10;i++)
//  {
//     for(let j=1;j<=5;j++)
//     {
//         if(j==3)
//         {
//             break;
//         }
//         console.log("j value: "+j);
//     }
//     console.log("i value :"+i);
//  }
//  }
//  loop1();
// function loop1(){
//      for(let i=1;i<=10;i++)
//      {
//        if(i==5)
//        {
//         continue;
//        }
//         console.log("i value :"+i);
//      }
//      }
//      loop1();
//=====================================================
//Functions
//Named Functions ==> the function which contains the name is called Name functuons.
//  function Welcome(){
//           console.log(" welcome to angular");
//  }
//  Welcome();
//     function add(x:number,y:number):number
//     {
//         console.log(" welcome to angular");
//         return x+y;
//     }
//    let result =add(4,7);
//    console.log(result);
//-----------------------------------------------------------
// Anonymous
//  function doWork (x:number,y:number):number{
//     let result:number =x+y;
//     return result;
//  }
//  let result= doWork(10,20);
//  console.log(result);
// let result= function (x:number,y:number):number{
//     return x+y;
//  }
// let va= result(2,5);
//  console.log(va);
//==============================================
// Function Parameters
//   function fullName(fname:string,iname:string):string // return k lia function ase bnta h.
//   {
//     return fname + iname;
//   }
//  // fullName("dollo");//CE: Expected 2 agrs,but got1
//   let v =fullName("dollop",",infotech");//right
//  // fullName("dollop","name","njdjs");//CE Expected 2 but got 3.
//  console.log(v);
// function fullName(fname:string,iname:string)
// {
//   let p =fname + iname;
// console.log(p);
// }
// // fullName("dollo");//CE: Expected 2 agrs,but got1
// fullName("dollop",",infotech");//right
// // fullName("dollop","name","njdjs");//CE Expected 2 but got 3.
//======================================================
// Optional Parameters
//Type Script has an optional peerameter functionlity.the perameter shoult be 
// at the end ,will be represented with ? symbol.
// function greet(msg:string,name?:string):any{
//     return msg +''+name;
// }
// let ob=greet("hello",'hi');
// console.log(ob);
//----------------------------------------------------------------
//Default Parameters
// function greet(name:string,msg:string):any{
//     return name + msg;
// }
//  console.log(greet("Nitu"));
// console.log(greet("Nitu",'ddsad'));
//---------------------------------------------------------
//   Rest Parameters
//  A rest parameter must be of an array type,we can specify "....."(ellipses)
//  function greet(name:string,...id:number[]):any
//  {
//     return name +id;
//  }
// //  console.log(greet("hello",323432));
// //console.log(greet("hello"));
// console.log(greet("hello",323432,545,5446));
//===========================================================
//Arrow Function
// fat arrow function are use for anonymous function,the function with expression
// Anonymous function are called as lambda function. using the (=>).
// let sum=(x:number,y:number):number =>
// {
//     return x+y;
// }
// console.log(sum(4,5));
//---------------------------------------
// Arrow Function without Parameter
// let P=()=>{console.log("Welcome")};
// P();
//===========================================
//  Function Overloading
// we cat write multiple functions with same name and different parameter type.
// Note => no. of parameter should be same.
//  function add(a:string,b:string):string;
//  function add(a:number,b:number):number;
//  function add(a:any,b:any):any
//  {
//     return a+b;
//  }
//  console.log(add("fgdg","33"));
//  console.log(add(3,4));
// class A
// {
//      public push(s:string):number;
//      public push(s:number):string;
//      public push(arg:any):any
//     {
//         if(typeof(arg)==='number')
//         return arg.toString();
//         if(typeof(arg)==="string")
//         return arg.length;
//      }
// }
// let ob = new A();
// console.log("result:" +ob.push(33) );
// console.log("result:" +ob.push("4") );
//=====================================================================
//     OOP's in TypeScript
// class Students
// {
//     studentName:string;
//     studentRank:number;
//     studentMarks:number;
//     getStudentGrade():string
//     {
//        if(this.studentMarks>=75){
//         return "A+";
//     }
//     else if(this.studentMarks>=65 && this.studentMarks>60)
//     {
//         return "B";
//     }
//     else
//     {
//        return "C";
//     }
//    }
// }
// let  s1 = new Students();
// s1.studentName="Nitu";
// s1.studentRank=100;
// s1.studentMarks=79;
// console.log(s1.studentName);
// console.log(s1.studentRank);
// console.log(s1.studentMarks);
// console.log(s1.getStudentGrade());
// let  s2 = new Students();
// s2.studentName="Pooja";
// s2.studentRank=70;
// s2.studentMarks=64;
// console.log(s2.studentName);
// console.log(s2.studentRank);
// console.log(s2.studentMarks);
// console.log(s2.getStudentGrade());
// let  s3 = new Students();
// s3.studentName="Rani";
// s3.studentRank=50;
// s3.studentMarks=57;
// console.log(s3.studentName);
// console.log(s3.studentRank);
// console.log(s3.studentMarks);
// console.log(s3.getStudentGrade());
//--------------------------------------------------------
//   Constructor => cionstructor overloding not suppurt in typescript.
//   class Student{
//        studentName:string;
//        studentId:number;
//        constructor(studentName:string,studnetId:number){
//         this.studentId=studnetId;
//         this.studentName=studentName;
//        }
//   }
//   let S = new Student("nitu",101);
//   console.log(S);
// class Student{
//     studentName:string;
//     studentId:number;
//     constructor(studentName:string="nitu",studnetId:number=10){
//      this.studentId=studnetId;
//      this.studentName=studentName;
//     }
// }
// let S = new Student();
// console.log(S.studentId);
// console.log(S.studentName);
//--------------------------------------------------------------
// inheritance=> the process of extending the property from one class to another calss is class is called as inheritance.
//    To extend the properties from one class to another class we will use 'extends' Keyword. 
// class Person
// {
//     name:string;
//     constructor(name:string)
//     {
//         this.name= name;
//     }
// }
// class Employee extends Person
// {
//     empName:string;
//     constructor(empName:string,name:string)
//     {
//     super(name);
//     this.empName=empName;
//     }
// }
// let p = new Person("john",102);
// console.log(p.name,p.empId);
//-------------------------------------------------------------
//  Abstract class => The class which contains both concrete and abstract methos is called as abstract class.
// abstract class Person {
//     name : string;
//       constructor(name :string)
//       {
//         this.name= name;
//       }
//       display():void{
//         console.log(this.name);
//       }
//       abstract find(string):Person
// }
// class Employee extends Person{
//     empCode:number;
//     constructor(name :string,code:number)
//     {
//         super(name);
//         this.empCode=code;
//     }
//     find(name:string): Person {
//         return new Employee (name,1);
//     }
// }
// let emp:Person = new Employee("steve",10);
// emp.display();
// let emp2:Person= emp.find('jame');
// emp2.display();
//------------------------------------------------------------
//   Access Modifires=> Access modifires specifiy weather the members of the class can be accessible.
// these access modifife are used for security in oop.
//Type => public ,private and protected.
// -->public member if the class  are accessible anywhere in the program in the program. in the same class and alse outside 
//    the class alse we can ccess.
// --> private member are accessible only with in the same class.if yoy try to access them outside the class   it will throw 
//     compile time error.
//--> protected members are acceseible with in the same class and also in corresponding child classes.
// class Student{
//     public studentId:number=101;
//     private studentName:string="Dollop";
//     protected marks:number=80;
//     public display1():void{
//         console.log("-----------Strudent Details:Parent-------------");
//         console.log(this.studentId);
//         console.log(this.studentName);
//         console.log(this.marks);
//     }
// }
// class EngStudent extends Student{
//     public display2(): void {
//          console.log("-----------Strudent Details:Child-------------");
//         console.log(this.studentId);
//        // console.log(this.studentName);// not access
//         console.log(this.marks);
//     }
// }
// class Test{
//     sampleMethod(){
//         let s1= new Student();
//          s1.display1();
//         let s2= new EngStudent();
//          s2.display2();
//          console.log("------ sampleMthod--------------");
//          console.log(s1.studentId);
//          //console.log(s1.studentName); // not access
//          //console.log(s1.marks);// not access
//     } 
// }
// var t:Test = new Test();
// t. sampleMethod();
//--------------------------------------------------------
// Interface =>
// interface Student{
//     fname:string;
//     iname:string;
//      getFullName():string;
// }
// class Studentimp implements Student{
//     fname:string;
//     iname:string;
//      getFullName():string{
//         return this.fname+ "   " +this.iname;
//      }
// }
// var s:Student = new Studentimp();
// s.fname="Dollop";
// s.iname="Nitya";
// console.log(s.getFullName());
//-=------------------------------------------------------
//Enumeration ==> An enum is a special "class" that represents a group
//                 of constants (unchangeable variables).
//   Enums come in two flavors string and numeric. Lets start with numeric.
//  TypeScript Enums
// 1. Numeric Enums
// 2. String Enums
// 3. Heterogeneous Enums
//--> Enumeration is a collection of constans,Enumeration act as datatype.
// enum CourseNames{
//     java,DotNet,Testing
// }
// class Student{
//     name :string;
//     age:number;
//     course:CourseNames;
// }
// var s:Student= new Student();
// s.name="Dollop";
// s.age=32;
// s.course=CourseNames.java;
// console.log(s.name);
// console.log(s.age);
// console.log(CourseNames[s.course]);
//=================================================================
//  Type Script Modiles
// -> In Large applications it is recommended to write each class in seperate file
// -> To access the class of one file in another file we will use Modules concept in TypeScript
// -> Module is a file (ts file) which can export one or more classes (or interfaces or enums) to other files. The other files 
//    can import classes (or interfaces or enums) that are exported by the specific file.
// -> To export class we will use 'export' keyword in source file
// -> To import class we will use 'import' keyword in destination file
// -> To import from current folder we will use './'
// -> To import from sub folder in current folder, we will use ./subfolder 
// -> To import from parent we will use '../'
var Student = /** @class */ (function () {
    function Student(id, name) {
        this.studentId = id;
        this.studentName = name;
    }
    return Student;
}());
exports.Student = Student;
