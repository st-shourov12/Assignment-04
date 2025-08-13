function totalFine( fare ) {
    if( typeof fare === "number" && fare > 0){
        let fine, serviceCharge;
        serviceCharge = 30;
        fine = fare + (fare * 20 / 100) + serviceCharge;
        return parseFloat(fine);
        
    }
    else{
        return "Invalid"
    }

}



// call function and return output

console.log(totalFine(200));
console.log(totalFine(0));
console.log(totalFine(50));
console.log(totalFine(552));
console.log(totalFine(-35));
console.log(totalFine("65"));
console.log(totalFine("Gorib tai ticket katinai"));




