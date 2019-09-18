/* const bills = [140, 45, 270];


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
console.log(copy); */

const dejon = {
    first: 'Dejon',
    last: 'Kurti',
    mass: 110,
    height: 1.95,
    BMI: function(){
        return this.mass / (this.height * this.height);
    }
}

const rob = {
    first: 'Rob',
    last: 'Grande',
    mass: 78,
    height: 1.69,
    BMI: function(){
        return this.mass / (this.height * this.height);
    }
}

if(rob.BMI() > dejon.BMI()){
    console.log(`${rob.first} has a higher BMI with a BMI of ${rob.BMI()}`);
} else if(dejon.BMI() > rob.BMI()){
    console.log(`${dejon.first} has a higher BMI with a BMI of ${dejon.BMI()}`);
} else{
    console.log(`${dejon.first} and ${rob.first} have the same BMI, with a BMI of ${rob.BMI()}`);
}