const express = require('express')
const fs = require('fs')
const readline = require("readline")

const billWithoutGuest = require("./calculate_without_guest")
const billWithGuest = require("./calculate_with_guest")

const app = express()

const inputFile = readline.createInterface({
  input: fs.createReadStream('input.txt'),
});

let noOfGuest = 0;
let initialBillAndWaterQuantity = 0;

inputFile.on('line', (eachLine)=> {
  if (eachLine.includes("ALLOT_WATER")){
    const lineArr1 = eachLine.split(" ")
    const appartmentType = parseInt(lineArr1[1])
    const ratio = lineArr1[2]

    initialBillAndWaterQuantity = billWithoutGuest(appartmentType, ratio)
    // console.log(bill)
  }
  else if (eachLine.includes("ADD_GUESTS")){
    const lineArr2 = eachLine.split(" ")
    noOfGuest += parseInt(lineArr2[1])
  }else{
    const totalWaterAndBill = billWithGuest(noOfGuest, initialBillAndWaterQuantity)
    console.log(totalWaterAndBill)
  }
})

app.listen(3000, ()=> {
    console.log("server is running...http://localhost:3000")
})
