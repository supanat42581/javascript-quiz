
function gcd(target){
    
    let number;
    let count = target.length;
    let resultArr = [];
    let minNum = target[0];
    
    
    for(let i=1;i<=minNum;i++) {
        for(let j = 0;j<target.length;j++){
            if(target[j] % i == 0){
                count--;
                number = i;
            }
        }
        if(count){
            count = target.length;
        }resultArr = number;
        
    }
    return resultArr;
}
console.log(gcd([6,8,16]));
