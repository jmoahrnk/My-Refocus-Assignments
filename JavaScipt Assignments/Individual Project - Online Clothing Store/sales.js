var shop = {
    name: "Zara",
    address: "Manhattan Avenue, New York",
    code: "NY656",
    deleted_users_index: [],
    deleted_items_index: [],
    users: [
        {
            first_name: "Bugs",
            last_name: "Bunny",
            username:"bgsbny",
            password:"qwe123",
            birthday: "03.10.1940",
            age: function(){return shop.get_age(this.birthday)},
            id: 0
        },
        {
            first_name: "Mary",
            last_name: "Poppins",
            username:"mryppn",
            password:"qwe123",
            birthday: "08.27.1964",
            age: function(){return shop.get_age(this.birthday)},
            id: 1
        },
        {
            first_name: "Katniss",
            last_name: "Everdeen",
            username:"ktnevd",
            password:"qwe123",
            birthday: "10.25.1996",
            age: function(){return shop.get_age(this.birthday)},
            id: 2
        },
        {
            first_name: "Darth",
            last_name: "Vader",
            username:"dthvdr",
            password:"qwe123",
            birthday: "05.25.1977",
            age: function(){return shop.get_age(this.birthday)},
            id: 3
        }
    ],
        clothing_items: [
        {
            item_name: "Blue jeans",
            id: 0,
            category: "trousers",
            price_$: 35,
            stock_quantity: 20,
        },
        {
            item_name: "Dark hoodie",
            id: 1,
            category: "Jacket",
            price_$: 30,
            stock_quantity: 60,
        },
        {
            item_name: "Cargo shorts",
            id: 2,
            category: "Trousers",
            price_$: 25,
            stock_quantity: 36,
        },
        {
            item_name: "Plain white t's",
            id: 3,
            category: "Shirt",
            price_$: 15,
            stock_quantity: 60,
        },
        {
            item_name: "Yellow Tracksuit",
            id: 4,
            category: "Tracksuit",
            price_$: 60,
            stock_quantity: 40,
        },
        {
            item_name: "GnR T-shirt",
            id: 5,
            category: "Shirt",
            price_$: 20,
            stock_quantity: 8,
        },
    ],
    // item management: add_stock | deplete_stock | new_item | remove_item | check_stock | availability | find_item_index
    add_stock: function(id, quantity){
        if (this.clothing_items.some(clothing_item => clothing_item.id == id)){
            this.clothing_items[this.find_item_index(id)].stock_quantity += quantity;
        }
    },
    deplete_stock: function(id, quantity){
        if (this.clothing_items.some(clothing_item => clothing_item.id == id))
        {
            this.clothing_items[this.find_item_index(id)].stock_quantity -= quantity;
        }
    },
    new_item: function(item){
        if (this.deleted_items_index.length>0){
            item.id = this.deleted_items_index[0];
            this.deleted_items_index.splice(0,1);
        }
        else {
            item.id = this.clothing_items.length;
        }
        this.clothing_items.push(item);
    },
    remove_item: function(id){
        availability = false;
        this.deleted_items_index.push(Number (id));
        this.clothing_items.splice(this.find_item_index(id), 1);
    },
    check_stock: function(){
        let status = "";
        let items_to_restock = this.clothing_items.filter(item => item.stock_quantity<=10);
        if(!(items_to_restock.length == 0)){
            console.error("***Please restock***");
            items_to_restock.forEach(item => {
                console.log(`Item ID:${item.id}    ${item.item_name}     ${item.stock_quantity}pcs left.`)
            });
        }
        else(console.log("All stocks are above 10pcs."));
    },
    availability: function(id, expected){
        let index = this.find_item_index(id);
        if (!(index==-1)){
            if(this.clothing_items[index].stock_quantity>=expected){
                return true;
            }
            else{
                console.log("Available remaining stock: " + this.clothing_items[id].stock_quantity);
                return false;
            };
        }
        else {
            console.log("This item is not available.");
            return false;
        }
    },
    find_item_index: function(id){
        return this.clothing_items.findIndex( item => item.id == id);
    },
    // customer management: add_user | delete_user | get_age
    add_user: function(user){
        if (this.deleted_users_index.length>0){
            user.id = this.deleted_users_index[0];
            this.deleted_users_index.splice(0,1);
        }
        else {
            user.id = this.users.length;
        }
        user.age = function(){return this.get_age(this.birthday)};
        this.users.push(user);
    },
    delete_user: function(id){
        let user_index = this.users.findIndex(user=>user.id==id);
        this.deleted_users_index.push(Number (id));
        this.users.splice(user_index, 1);
    },
    get_age: function (birthday){
        let true_age  = new Date().getFullYear() - Number(birthday.slice(6,10)) - 1;
        if (Number(birthday.slice(0,2)) <= new Date().getMonth()){
            true_age++;
        };
        return true_age;
    },
}


//user transactions: loginUser | logoutUser | update_cart | confirm_purchase | purchase_review

function user_transactions(){
    var isLoggedIn = false;
    var customer = null;
    var cart_items = [];
    var total = 0;
    function loginUser(username, password){
        customer = shop.users.find((user) => (user.username == username && user.password == password));
        if (!(customer==undefined)){
            isLoggedIn = true;
            console.log(`${customer.first_name} ${customer.last_name} has logged in.`);
        } 
        else
        {
            customer = null;
            console.log("Invalid Log-in");
        }
    }
    function logoutUser(){
        isLoggedIn = false;
        customer = null;
        cart_items = [];
        total = 0;
        console.log("User Logged-out");
    }
    function update_cart(id, quantity){
        if (isLoggedIn){
            if(shop.availability(id, quantity) == true){
                if (cart_items.some(item=>item.id == id)){
                    let index =  cart_items.findIndex(item=>item.id == id);
                    cart_items[index].quantity = quantity;
                }
                else {cart_items.push({id, quantity})}
                //console.log(`${customer.first_name} ${customer.last_name} set ${quantity} ${shop.clothing_items[id].item_name} to cart.`);
            }
        }
        else{
            console.log("Please log-in to make a purchase.")
        };
    }
    function confirm_purchase(payment, password){
        if(isLoggedIn){
            compute_purchase(cart_items);
            if(customer.password == password){
                if(cart_items.length>0 && payment>=total){
                    console.log(`${customer.first_name}, thank you for your purchase. Please check your receipt.`);
                    cart_items.forEach(item => { shop.deplete_stock(item.id, item.quantity);});
                    purchase_review(cart_items, payment);
                    cart_items = [];
                }
                else{
                    console.log(`${customer.first_name}, purchase was unsuccesful. Please check purchase details."`)
                    purchase_review(cart_items, payment);
                }
            } 
            else{ logoutUser();}
        }
        else{
            console.log("Please log-in to make a purchase.")
        };
        function compute_purchase(purchased_items){
            purchased_items.forEach(item => {
                total += shop.clothing_items[item.id].price_$*item.quantity;
            });
        }
    }

    function purchase_review(purchased_items, payment){
        purchased_items.forEach(item => {
            let index = find_item_index(item.id);
            console.log(`${item.quantity} ${shop.clothing_items[index].item_name} x ${shop.clothing_items[index].price_$} = $` + (shop.clothing_items[index].price_$ * item.quantity).toFixed(2));
        });
        console.log("Total Amount Due: $ " + total.toFixed(2));
        console.log("Amount Paid: $" + payment.toFixed(2));
        if(payment>total){
            console.log("Change: $ " + (payment - total).toFixed(2));
        }
        if(payment<total){
            console.log("Still Due: $ " + (total-payment).toFixed(2));
        }
        total = 0;
    }

    function find_item_index (id){
        return shop.clothing_items.findIndex((item)=>item.id==id);
    }

    return {
        loginUser,
        logoutUser,
        update_cart,
        confirm_purchase,
        purchase_review
    }
}


// shop.add_user({
//     first_name: "Chuck",
//     last_name: "Norris",
//     username:"chknrs",
//     password:"qwe123",
//     birthday: "04.10.1940",
// });
// var chuck = user_transactions();
// chuck.loginUser("chknrs", "qwe123");
// chuck.update_cart(1, 10);
// chuck.update_cart(2, 5);
// chuck.confirm_purchase(1000, "qwe123");
// console.log("---------------------")

// var mary = user_transactions();
// mary.loginUser("mryppn", "qwe123");
// mary.update_cart(0, 6);
// mary.update_cart(2, 3);
// mary.update_cart(4, 5);
// mary.update_cart(0, 4);
// //shop.remove_item(4);
// mary.confirm_purchase(505, "qwe123");
// console.log("---------------------")
// mary.update_cart(4, 4);
// mary.confirm_purchase(505, "qwe123");

// console.log("---------------------")

// shop.check_stock();
// shop.add_stock(5, 20);
// console.log(shop.clothing_items[shop.find_item_index(5)]);
// shop.check_stock();
