// class Emp{
//     empId:number=101;
//     empName:string="Neetu Rathod";
//     empSalary:number=1000;
//     Display():void{
//         console.log(`Employee Id ${this.empId},Employee Name ${this.empName},Employe Salary ${this.empSalary}`);
//     }
    
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





 abstract class Emp{
        eId:number;
        eName:string;
       protected basicSalary:number;

       constructor(id:number ,name:string,Salary:number)
           {
              this.eId=id;
              this.eName=name;
              this.basicSalary=Salary;
           }
           abstract callSalary(hrs:number);
           abstract Greet(name:number):string;  
    }

    class Trainer extends Emp
    {
            callSalary(hrs: number)
            {
              var totalSalary = this.basicSalary+(hrs*2000);
               console.log(totalSalary);
            }
        Greet():string
        {
            return "WelCome"+this.eName;
        }
    }

    let trainer:Trainer = new Trainer(101,"Nitu",120000);
    console.log(trainer.Greet());
    trainer.callSalary(4);