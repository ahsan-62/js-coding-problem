function canPay(changeArray,totalDue){

    let sum=0;
    for(var i=0;i<changeArray.length;i++){
        sum+=changeArray[i];
    }

    if(sum>=totalDue){
        return true;
    }
    else if(changeArray.length===0){
        return "Input a valid array";
    }
    else{
        return false;
    }  
}

let changeArray=[5,5,10];
let totalDue=10;
let result=canPay(changeArray,totalDue);

console.log(result);