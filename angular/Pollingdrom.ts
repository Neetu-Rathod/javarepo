function Pollingdrom()
{   
    let n:number=153;
    let rem;
    let sum:number=0;
    let temp=n;   
    while(n!=0)
    {
      rem = Math.floor(n%10);
      sum = sum*10+rem;
      n=Math.floor(n/10);
    }    
     if(sum==temp)  
    console.log("palindrome number");    
    else    
    console.log("not palindrome");   
    return 0;  
    
}
Pollingdrom();