function hfc (target){

    let result;
    let count =0;
    
    let i = target[target.length-1];
        for(let j = 0;j<target.length;j++){
            if(i % target[j] == 0){
                count++;
                result = i;
            }
        }  
        return result;
}
console.log(lcm([24,48,96]));

