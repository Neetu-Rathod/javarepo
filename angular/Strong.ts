function fectorial(n)
{ let i:number;
    let fact:number=1;
    
    for(i=1;i<=n;i++)
    {
        fact = fact*i;
    }
    return fact;
}


function Strong()
{ 
    let n: number=28;
    let rem: number;
    let sum: number =0;
    let t:number=n;
    
    while(n!=0)
    {
        rem = Math.floor(n%10);
    
        sum = fectorial(rem)+sum;
    
        n = Math.floor(n/10);
    } 
    if(t==sum)
    {
        console.log("Strong Number" )
    }
    else{
        console.log("not Strong Number" )
    }

}
Strong();
