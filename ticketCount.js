function totalCost(n){

    let sum=0;

    if(n<=100){
        sum=n*100;
        return sum;
    }
    else if(n>100 && n<=200){

        sum=100*100+(n-100)*90;
        return sum;
        
    }

    else{
        sum=100*100+100*80+(n-200)*70
        return sum;
    }

}


let number=101;
console.log(totalCost(number));