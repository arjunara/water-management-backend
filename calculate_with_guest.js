let tankerBill = 0;
const findTotalBillAndWaterQuantity = (guestCount, initialBill)=>{
    let excessWQ = guestCount * 10 * 30
    const totalWaterQuantity = excessWQ + initialBill.waterQuantity

    if (excessWQ > 0 && excessWQ <= 500){
        tankerBill += excessWQ * 2
    }
    else if (excessWQ > 500 && excessWQ <= 1500){
        tankerBill += (500 * 2) + (excessWQ - 500) * 3
    }
    else if (excessWQ > 1500 && excessWQ <= 3000){
        tankerBill += (500 * 2) + (1000 * 3) + (excessWQ - 1500) * 5
    }else if (excessWQ > 3000){
        tankerBill += (500 * 2) + (1000 * 3 ) + (1500 * 5 ) + (excessWQ - 3000) * 8
    }

    const totalWaterBill = tankerBill + initialBill.totalBillWithoutGuest
    
    return totalWaterQuantity.toString() + " " + totalWaterBill.toString()
}

module.exports = findTotalBillAndWaterQuantity