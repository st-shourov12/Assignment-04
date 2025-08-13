function  onlyCharacter( str ) {
   if (typeof str === "string") {
    let strToArray = str.trim().split("");
    let characterArray = [];
    for (const word of strToArray) {
        if(word === " "){ 
            continue 
        };
        characterArray.push(word);
    }

    let arrayToStr = characterArray.join("").toUpperCase();
    
    return arrayToStr;

   } 
   else {
    return "Invalid"
   }


}

console.log(onlyCharacter(true));

