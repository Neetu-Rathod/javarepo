function Reverse() {
    var n = 12345;
    var rem = 0;
    var reverse = 0;
    while (n != 0) {
        rem = Math.floor(n % 10);
        reverse = reverse * 10 + rem;
        n = Math.floor(n / 10);
    }
    console.log(reverse);
}
Reverse();
