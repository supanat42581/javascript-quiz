let firstnum = prompt('enter a number')
let maxxy = +firstnum;
let minnum = +firstnum;
while (true) {
    let minnum1 = prompt('enter a number')
    if (minnum1 == "stop" ) {
        break;
    }
    else if (+minnum1< +minnum) {
        
        minnum = minnum1
    }
    else if (+minnum1 > +maxxy) {

        maxxy = minnum1
    }
}
console.log(minnum-maxxy)
