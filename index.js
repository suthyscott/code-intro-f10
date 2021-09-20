const readline = require('readline')
const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  })


const name = "Scott"

let age = 23

const isCool = true

let car = null

let height


let x = 4

let y = 10

let z = 7 + 8

let sum = x + y 

let str = 'This is a string '

let strTwo = "This is a second string let banana = yellow"

let strThree = `This is my name: ${name}, and this is my age: ${age}`

let strings = str + strTwo + strThree

reader.question("Do you like pumpkin pie?", function(answer) {
    if(answer === 'yes'){
        console.log('You are a good person')
    } else {
        console.log("You're living a sad life")
    }
  });