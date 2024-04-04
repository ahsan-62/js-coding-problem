const ahsan=['ahsan','jun','tajrian','afsin','jun','mukul','ahsan','jun'];

function removeDuplicate(ahsan){
    const newElement=[];
    for(var i=0;i<ahsan.length;i++){
        console.log(ahsan[i]);
        if(newElement.includes(ahsan[i]) === false){
            newElement.push(ahsan[i]);
        }  
    }
    return newElement;
    
}

const result=removeDuplicate(ahsan);
console.log(result);
