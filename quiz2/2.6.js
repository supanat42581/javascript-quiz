let result="";
for (let i = 1; i <= 100; i++) {
    for (let j = 2; j <= 100; j++) {
        if (i%j==0 &&j==i) {
            result+= -j+' ';
        }else if (i%j==0 && j!==i || i==1){
            result+= i+' ';
            break;
    }
    }
}console.log(result)