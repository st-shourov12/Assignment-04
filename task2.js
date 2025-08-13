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


// call function and return output

console.log(onlyCharacter("  h e llo wor   ld"));
console.log(onlyCharacter("Cy   bar- At  tac k  "));
console.log(onlyCharacter(" ha ck m e 1 @ru.c  n  "));
console.log(onlyCharacter("Serv er : : Do wn"));
console.log(onlyCharacter(["hack", "me"]));
console.log(onlyCharacter(true));




