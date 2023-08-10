function PrimeNum() {
    var n = 4;
    var flag = 0;
    var i;
    for (i = 2; i <= n / 2; i++) {
        if (n % i == 0) {
            flag = 1;
            console.log("Not Prime number", n);
            break;
        }
    }
    if (flag == 0) {
        console.log("Prime Number", n);
    }
}
PrimeNum();
