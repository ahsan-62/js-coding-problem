function matchPart(str1,str2){


    for(let i=0;i<str1.length;i++){
        if(str1.slice(i,i+str2.length)===str2){
           return true;
        }
    }
    return false;

}

const value=matchPart('ahsan','ssssan');
console.log(value);
