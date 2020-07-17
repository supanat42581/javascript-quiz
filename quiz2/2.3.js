let n =prompt('Input Number') 
let result=[];

for (let i = 0; i <= n**2; i++) {
    for (let j = 2; j <= n**2; j++) {
        if (i%j==0 &&j==i && result.length<n) {
            result.push(j);
        }else if (i%j==0 && j!==i) {
            break;
    }
    }
}console.log(result)