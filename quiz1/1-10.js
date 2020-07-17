let firstnum = prompt('enter a number')
while(true){
    let minnum = prompt('enter a number')
    if(minnum=="stop"|| firstnum == "stop"){
        break;
    }
    else if(firstnum > minnum){
        firstnum = minnum} 
}
console.log(firstnum)