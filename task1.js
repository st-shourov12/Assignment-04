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

console.log(totalFine(500));

