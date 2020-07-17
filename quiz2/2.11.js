noSort= ()=> {
  let arr = []
  let text = ""
  let i = 1
  let lenAr = []
  let ss = []
  while (true) {
      let ar = prompt("Enter Number : ")
      if (ar == "true") {
          lenAr = arr.length
          while (i < lenAr) {
              let j = 0
              while (j < lenAr - i) {
                  if (arr[j] > arr[j + 1]) {
                      let ar1 = arr[j + 1]
                      arr[j + 1] = arr[j]
                      arr[j] = ar1
                  }
                  j++
              }
              i++
          }
          break
      }
      else if (ar == "false") {
          lenAr = arr.length
          while (i < lenAr) {
              let j = 0
              while (j < lenAr - i) {
                  if (arr[j] < arr[j + 1]) {
                      let ar1 = arr[j + 1]
                      arr[j + 1] = arr[j]
                      arr[j] = ar1
                  }
                  j++
              }
              i++
          }
          break
      }
      arr.push(ar)
  }
  return arr
}
noSort()