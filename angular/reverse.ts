function Reverse()
{
    let n:number=12345;
    let rem:number=0;
    let reverse: number=0;
    while(n!=0)
    {
        rem=Math.floor(n%10);
        reverse = reverse*10+rem;
        n=Math.floor(n/10);
    }
    console.log(reverse)
}
 Reverse();