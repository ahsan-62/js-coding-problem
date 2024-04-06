
function shortMaker(number){

    let min=number[0];
    let max=number[0];
    for(let i=1;i<number.length;i++){

        if(number[i]<min){
            min=number[i];
        }
        if(number[i]>max){
            max=number[i];
        }

        if(number[i]<0){
            return "Invalid Input";
        }
        


    }
    
    let newNumber=[max,min];
    return newNumber;


    

}

let number=[2,3];
let result=shortMaker(number);
console.log(result);