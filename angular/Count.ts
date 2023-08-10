function cont(n:number)
{
  let c:number=0;
  let i:number;
  for(i=1;i<=n;i++)
  { 
    n=Math.floor(n/10);
    c++;
  }
  return c;
}

function Count()
{
    let n:number=45;
    n=cont(n);
    console.log(n)
}
Count();