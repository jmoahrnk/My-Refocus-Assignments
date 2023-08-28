var weight = 79;
var height = 180;

(bmi (weight, height));

function bmi (weight_kg, height_cm){
    let bmi = ((weight_kg*10000)/ (height_cm**2)).toFixed(1);
    let msg = "";
    switch(true){
        case (bmi<18.5):
        msg = `BMI is ${bmi} and indicates as underweight.`;
        break;
        case (bmi>=18.5 && bmi <= 24.9):
            msg = `BMI is ${bmi} and indicates as normal.`;
            break;
        case (bmi>=25 && bmi<=29.9):
            msg = `BMI is ${bmi} and indicates as overweight.`;
            break;
        default:
            msg = `BMI is ${bmi} and indicates as obese.`
    };
    console.log(msg);
};