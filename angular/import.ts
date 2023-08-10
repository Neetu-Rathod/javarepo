import { product } from "./export";
interface Aayurveda extends product {
    proId: number;
    proName: string;
    proColor: string;

    display(): any;
}

 class Brand implements Aayurveda {
    // display() {
    //     throw new Error("Method not implemented.");
    // }
    proId: number;
    proName: string;
    proColor: string;
    proPrice:number;

    display1() {
        return (`proId ${this.proId},proName ${this.proName},proColor ${this.proColor}`);
    }
    display2() {
        return (`proPrice ${this.proPrice}`);
        
    }
}
let ob =new Brand();
ob.proId=101;
ob.proName= "Cream";
ob.proColor="white";
ob.proPrice=200;
console.log(ob.display1());
console.log(ob.display2());
