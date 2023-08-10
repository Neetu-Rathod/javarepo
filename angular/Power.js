function pow(n, p) {
    var i;
    var m = 1;
    for (i = 1; i <= p; i++) {
        m = m * n;
    }
    return m;
}
function Power() {
    var n;
    n = pow(5, 2);
    console.log(n);
}
Power();
