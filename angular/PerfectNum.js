function PerfectNum() {
    var n = 6;
    var i;
    var sum = 0;
    for (i = 1; i <= n / 2; i++) {
        if (n % i == 0) {
            sum = sum + i;
        }
    }
    if (n == sum) {
        console.log("Perfect Number", n);
    }
    else {
        console.log("Not Perfect Number", n);
    }
}
PerfectNum();
