let a = prompt('first num');
let b = prompt('second num');
let result;
let n = 0;
if (a > b) {
    n = a
} else {
    n = b
}
for (let i = 2; i <= n; i++) {
    while (a % i == 0 && b % i == 0) {
        a = a / i
        b = b / i
    }
    result = `${a} / ${b}`

console.log(result)