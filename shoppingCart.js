let shoppingCart=[
    {productName:'shoe',price:1200},
    {productName:'shirt',price:2200},
    {productName:'pant',price:3200},
    {productName:'belt',price:4200}
]

function totalCost(shoppingCart){

    let total=0;
    for(let i=0;i<shoppingCart.length;i++){
        let product=shoppingCart[i];
        total+=product.price;

    }

    return total;

}

let totalAmount=totalCost(shoppingCart);
console.log('Total Amount:',totalAmount,'Tk');

