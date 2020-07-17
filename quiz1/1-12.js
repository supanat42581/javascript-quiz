let firstnum = prompt('enter a number')
let maxXy = +firstnum;
let minnum = +firstnum;
while (true) {
    let minnum1 = prompt('enter a number')
    if (minnum1 == "stop" ) {
        break;
    }
    else if (+minnum1< +minnum) {
        
        minnum = minnum1
    }
    else if (+minnum1 > +maxXy) {

        maxXy = minnum1
    }
}
console.log(minnum, maXxy)
