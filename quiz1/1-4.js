let n = prompt('Enter num')
let x = 0;
let y = 1;
let newy;
for (let i = 2; i < n; i++) {
    newy = x + y
    x = y
    y = newy
}
console.log(y)