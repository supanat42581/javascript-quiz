let target = 130120;
let digits = target.toString().split('');
let sum =0
for (let i=0; i<=digits.length; i++){
    sum +=Number(digits[i])
}
console.log(sum);