let n =prompt('Input Number') 
let result=[];

for (var i = 0; i < n; i++) {
    for (var j = 2; j < n; j++) {
        if (i%j==0 &&j==i) {
            result.push(j);
        }else if (i%j==0 && j!==i) {
            break;
    }
    }
}console.log(result)