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
    
    



}

// call function




console.log(isSame([2 , 5 , 6] ,256));
