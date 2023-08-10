function Pollingdrom() {
    var n = 153;
    var rem;
    var sum = 0;
    var temp = n;
    while (n != 0) {
        rem = Math.floor(n % 10);
        sum = sum * 10 + rem;
        n = Math.floor(n / 10);
    }
    if (sum == temp)
        console.log("palindrome number");
    else
        console.log("not palindrome");
    return 0;
}
Pollingdrom();
