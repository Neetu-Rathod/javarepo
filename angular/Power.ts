function pow(n:number,p:number)
{
    let i:number;
    let m:number=1;
    for(i=1;i<=p;i++)
    {
        m=m*n;
    }
    return m;

}

function Power()
{
    let n:number;
    
    n= pow(5,2);
    console.log(n)
}
Power();