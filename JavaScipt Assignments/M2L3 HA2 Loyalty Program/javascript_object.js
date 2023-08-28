let customer = {
    customer_name: "Johnny Manggo",
    points: 12300,
    cart: [
        {
        item: "Shampoo",
        quantity: 2,
        price_$: 3
        },
        {
            item: "Soap",
            quantity: 2,
            price_$: 2
        },
        {
            item: "Toothpaste",
            quantity: 1,
            price_$: 3
        },
    ]
}

console.log(`Hi, ${customer.customer_name}!, We are happy to see you today.`);
console.log("Your current points are: " + customer.points);
var total_bill =0 ;

for(i=0; i<customer.cart.length; i++){
    console.log(`${customer.cart[i].quantity} x ${customer.cart[i].item} ----- $ ` + (customer.cart[i].quantity*customer.cart[i].price_$)+ ".00") ;
    total_bill += (customer.cart[i].quantity*customer.cart[i].price_$);
    customer.points += customer.cart[i].quantity;
};

console.log("Total Bill: " + total_bill);
console.log("New Current Points: " + customer.points);