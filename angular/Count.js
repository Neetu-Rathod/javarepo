function cont(n) {
    var c = 0;
    var i;
    for (i = 1; i <= n; i++) {
        n = Math.floor(n / 10);
        c++;
    }
    return c;
}
function Count() {
    var n = 45;
    n = cont(n);
    console.log(n);
}
Count();
