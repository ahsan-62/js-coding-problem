const phones=[
    { name:'iphone', price: 80000},
    { name:'samsung', price: 70000},
    { name:'nokia', price: 30000},
    { name:'htc', price: 40000},
]

function cheapestPhone(phones){
    let cheapest=phones[0];
    for(let i=0;i<phones.length;i++){
       if(phones[i].price<cheapest.price){
           cheapest=phones[i];
       }
    }
        
}

cheapestPhone(phones)