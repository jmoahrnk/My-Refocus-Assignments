const letters = ["E","D","L","T","E","P","B","N","M","E","E","W","V","O"," "];
const order = [11, 4 , 6, 14, 1, 9, 12, 0, 2, 13, 5, 8, 10, 7, 3];

let hiddenWord = "";

for(i=0; i<order.length; i++){
    console.log(hiddenWord += letters[order[i]]);
};