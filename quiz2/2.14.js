function factorial() {
    let total = 0
    let text = 0
    let sum = 1
    let num = prompt("Enter Number : ")
    for (let i = 2; i <= num; i++) {
        sum *= i
    }
    sum = sum.toString()
    text = sum.split("")
    console.log(text)
    for (let j = 0; j < text.length; j++) {
        total += Number(text[j])
    }
    return total
}
console.log(factorial())