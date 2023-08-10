// function Dummy(a:string)
// {
//     return a;
// }
// let result = Dummy("hello");
// console.warn(result)
 
      // interface
    //   let data:number=5;
    //   data=20;
    //   const val:number=10;
    //   val=5;

    // Object type

    //   type objType={name:string,age:number}
    // const person:objType={
    //     name:"neetu",
    //     age:23,
    // }
    // const car = {
    //     type: "Toyota",
    //   };
      
    //   car.type = "Ford"; // no error
      
    //   car.type = 2; // Error: Type 'number' is not assignable to type 'string'.
      
    //   console.log(car);

    // console.log(person.name,person.age);

    // const user:objType={
    //     name:"nitu",
    //     age:23,
    // }

    // console.log(user.name,user.age);

       //Array
       //string type dikhane k lia 
    //    let arr:string[]=["PHP","JS","NODE","TS"];
           // number 
     //  let arr:number[]=[4,5,7,56,9];
        


    //      kisi bhi type ki value k lia 
    //  let random:any[]=["abc",123,true];

    //  let arr:string[]=["php","ts","js"];
    //   console.log(arr);

        // Tuple
//    let role:[string,string,number,number,boolean?]=['admin','manager',1,3];     
//    role.push(true);
//    role[1]="20";


     //enum type

//    enum Role{
//     Admin,manager,read_only_user
//    } 
//    console.log(Role)

    //Any
    // let data = ""

   //union

   //let data : number |string= 12;

//    function  comb(a:number,b:number)
//    {
//     return a+b;
//    }
//    console.log(comb(20,3));

// function  comb(a:number|string,b:number|string)
//    {
//     if(typeof a==='number' && typeof b=== 'number')
//     {
//         return a+b;
//     }
//     else
//     {
//             return a.toString()+b.toString();
//     }
//    }
//    console.log(comb("hello",3));
