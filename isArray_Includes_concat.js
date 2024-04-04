const a=45;
const name='Ahsan';
const isTrue=true;
let obj={
    name:'Ahsan',
    age:27
}

const ahsan=[23,45,24,26,27];

console.log(typeof a);
console.log(typeof name);
console.log(typeof isTrue);
console.log(typeof obj);

//Check whether it is an array or not by isArray method

console.log(Array.isArray(ahsan));

//check whether the element is in the array or not by includes method
console.log(ahsan.includes(23));
//another method

if(ahsan.indexOf(23)===-1){
    console.log('Element is not in the array');
}else{
    console.log('Element is in the array');
}

//concat method

let arr=[1,2,3,4,5];
let arr2=[5,6,7,8,9,10];
let arr3=arr.concat(arr2);
console.log(arr3);
