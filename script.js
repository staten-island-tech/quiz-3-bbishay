const bills = [140, 45, 270];


function calculateTip(bill){
    if (bill < 50){
        return .2*bill; 
    } 
    else if(50 <= bill && bill <= 200){
        return .15*bill;
    } 
    else if(bill > 200){
        return .1*bill;
    }    
}

function calculateBill(bill, tip){
    return bill + tip;
}

function filterHundred(finalBill){
    return finalBill > 100;
}


const tips = [calculateTip(bills[0]), calculateTip(bills[1]), calculateTip(bills[2])];
const billsTipped = [calculateBill(bills[0], tips[0]), calculateBill(bills[1], tips[1]), calculateBill(bills[2], tips[2])]
const copy = billsTipped.filter(filterHundred);

console.log(tips);
console.log(billsTipped);
console.log(copy);