const corporationRate = 1 
const borewellRate = 1.5


const initialBillAndWaterQuantity = (appartmentType, ratio)=> {
    let corporationRatio = parseInt(ratio[0])
    let boreWellRatio = parseInt(ratio[2])
    let waterQuantity = 0;

    if (appartmentType == 2){
        waterQuantity = 3 * 10 * 30
    }else{
        waterQuantity = 5 * 10 * 30
    }
    const corporationWaterQuatity = (waterQuantity * corporationRatio) / (corporationRatio + boreWellRatio)
    const corporationWaterBill = corporationWaterQuatity * corporationRate
    const borewellWaterQuantity = (waterQuantity * boreWellRatio) / (corporationRatio + boreWellRatio)
    const borewellWaterBill = borewellWaterQuantity * borewellRate
    const totalBillWithoutGuest = corporationWaterBill + borewellWaterBill
    return {totalBillWithoutGuest, waterQuantity}
}

module.exports = initialBillAndWaterQuantity