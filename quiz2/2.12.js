let result=[];
for(i=3; i<=1000; i++){
    if(i%3==0 || i%5==0){
        result.push(Number(i))
    }   
}
console.log(result)
let sum = result.reduce((item, nextitem) => item + nextitem)
console.log(sum)

