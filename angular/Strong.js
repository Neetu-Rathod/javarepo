function fectorial(n) {
    var i;
    var fact = 1;
    for (i = 1; i <= n; i++) {
        fact = fact * i;
    }
    return fact;
}
function Strong() {
    var n = 28;
    var rem;
    var sum = 0;
    var t = n;
    while (n != 0) {
        rem = Math.floor(n % 10);
        sum = fectorial(rem) + sum;
        n = Math.floor(n / 10);
    }
    if (t == sum) {
        console.log("Strong Number");
    }
    else {
        console.log("not Strong Number");
    }
}
Strong();
