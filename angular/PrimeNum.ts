function PrimeNum()
{
    let n:number=4;
    let flag:number=0;
    let i:number;
    for(i=2;i<=n/2;i++)
    {
      if(n%i==0)
      {
        flag=1;
            console.log("Not Prime number", n)
            break;
      }      
    }
    if(flag==0)
    {
        console.log("Prime Number", n)
    }
    
}
PrimeNum();