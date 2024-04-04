function cubeNumber(number){
    if( typeof number !== 'number'){
        return 'please enter a number';
    }
    let cuberesult=number*number*number;
    return cuberesult;
}

let number='5';
console.log(cubeNumber(number));