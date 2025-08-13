function  resultReport( marks ) {

    if (Array.isArray(marks)) {
        let i = 0;
        let j = 0;
        let sum = 0;
        for (const mark of marks) {
            sum += mark ;
            if (mark < 40) {
                i++;
            }
             else {
                j++;
            };

        
        };
        let average = Math.round(sum / marks.length)  ;
        if ( average < 0 || isNaN(average)) {
            average = 0 ;
        };
    
        let result = {
            finalScore: average ,
            pass: j ,
            fail: i ,
        };
    
        return result ;
    } 
    else {
        return "Invalid"
    }

    
}


// call function and return output

console.log(resultReport([]));
console.log(resultReport([98, 87, 67, 91, 92, 33, 87]));
console.log(resultReport([99, 87, 67, 12 ,87]));
console.log(resultReport([99]));
console.log(resultReport(100)); 
