const readLineToArray = require("./readLineToArray")
const mustbejson = require("./mustbejson")
const fs = require('fs')

if (!process.argv[2] && !process.argv[3]) {
  console.log("error", "two argument required")
  process.exit()
}

let filename1 = process.argv[2]
mustbejson(filename1)
let filename2 = process.argv[3]
mustbejson(filename2)
let filename3 = process.argv[4]

console.log("file 1 : ", filename1)
console.log("file 2 : ", filename2)

// let array1 = readLineToArray(filename1)
// let array2 = readLineToArray(filename2)


readLineToArray(filename1).then(array1 => {
  readLineToArray(filename2).then(array2 => {
    let array3 = []

    array1.forEach(function(value) {
      let token = 1
      array2.forEach(function(value2) {
        if (value._id.$oid === value2._id.$oid) {
          token = 2
        }
      })
      if (token == 1) {
        array3.push(value)
      }
    })

    let wstream = fs.createWriteStream(filename3)

    array3.forEach(function(value) {
      wstream.write(JSON.stringify(value) + "\n")
    })
    wstream.end()


    console.log('length of ', filename1, ' ', array1.length)
    console.log('length of ', filename2, ' ', array2.length)
    console.log('length of ', filename3, ' ', array3.length)

    console.log('finished')
  })
})
