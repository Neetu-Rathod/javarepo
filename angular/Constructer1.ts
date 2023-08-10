class Category
{
    id:number;
    name:string;
    constructor(id:number,name:string)
    {
        this.id=id;
        this.name=name;
    }
}
class Product
{
    productId:number;
    productName:string;
    productPrice:number;
    productStock?:boolean;
    category?:Category;

    constructor(productId:number,productName:string,productPrice:number,productStock?:boolean,category?:Category)
    {
        this.productId=productId;
        this.productName =productName;
        this.productPrice=productPrice;
        this.productStock=productStock;
        this.category=category;

    }

    Display():void{
        console.log(`id ${this.category?.id},name ${this.category?.name}`);
        console.log(`id ${this.productId},name ${this.productName},productprice ${this.productPrice},Stock ${this.productStock},cat ${this.category}`);
    }
}

let cat:Category=new Category(101,"neetu");
let pro:Product=new Product(102,"neetu",500,true,cat);
pro.Display();
