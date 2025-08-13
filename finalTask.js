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

};


function  onlyCharacter( str ) {
   if (typeof str === "string") {
    let strToArray = str.trim().split("");
    let characterArray = [];

    for (const word of strToArray) {
        if(word === " "){ 
            continue 
        };
        characterArray.push(word);
    };

    let arrayToStr = characterArray.join("").toUpperCase();
    
    return arrayToStr;

   } 

   else {
    return "Invalid"
   }

};

function  bestTeam( player1, player2 ) {

    if ( typeof player1 === "object" && typeof player2 === "object") {
        let team1 = player1["foul"] + player1["cardY"] + player1["cardR"];
        let team2 = player2["foul"] + player2["cardY"] + player2["cardR"];

        if (team1 > team2) {
            return player2["name"]
        } 
        else if (team1 < team2) {
            return player1["name"]
        }
        else{
            return "Tie"
        }
        
        
    }
    else{
        return "Invalid"
    }

};

function  isSame(arr1 , arr2 ) {
 
    if ( Array.isArray(arr1) && Array.isArray(arr2) ) {
       for (let i = 0; i < arr1.length && i < arr2.length ; i++) {
        if (arr1[i] === arr2[i] && arr1.length === arr2.length){
            if (i === arr1.length - 1) {
                return true;
            }
            else{
                continue;
            }
        }
        else{
            return false;
        }
        
       }
    } 
    
    else {
        return "Invalid" ;
    }
    
};



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
  
};
