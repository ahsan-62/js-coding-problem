const phones=[
    { name:'iphone', price: 80000},
    { name:'samsung', price: 70000},
    { name:'nokia', price: 50000},
    { name:'htc', price: 40000},
]

function cheapestPhone(phones){
    let cheapest=phones[0];
    for(let i=0;i<phones.length;i++){
       const phone=phones[i];
       if(phone.price<cheapest.price){
           cheapest=phone;
       }
    }
       return cheapest;
} 

let mobile=cheapestPhone(phones);

console.log(mobile);