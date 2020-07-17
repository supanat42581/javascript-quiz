let count = 0
let average = 0
while (true) {
    let newNum = prompt('enter a number')
    if (Number(newNum)) {
        average += Number(newNum)
        count++
    }
    else if (newNum == "stop") {
        console.log(average / count)
        break;
    }
}