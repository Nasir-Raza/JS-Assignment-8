/* Coded by 
	 Name	: Nasir Raza
	 Roll #	: KH01210813250
*/

// Exercise # 1

var positiveInteger = 0;

positiveInteger = parseInt(prompt("Enter positive integer"));


if (positiveInteger < 0) {
    document.getElementById("main").innerHTML = "<h2><u>Exercise # 1</u></h2><p><b>Number is not a positive integer</p>"
}
else {
    document.getElementById("main").innerHTML = "<h2><u>Exercise # 1</u></h2><p>number: " + positiveInteger + "<br/>round off value: " + Math.round(positiveInteger) + "<br/>floor value: " + Math.floor(positiveInteger) + "<br/>ceil value: " + Math.ceil(positiveInteger) + "</p>"
}

// Exercise # 2

var negativeInteger = 0;

negativeInteger = parseInt(prompt("Enter negative integer"));


if (negativeInteger < 0) {
    document.getElementById("main").innerHTML += "<h2><u>Exercise # 2</u></h2><p>number: " + negativeInteger + "<br/>round off value: " + Math.round(negativeInteger) + "<br/>floor value: " + Math.floor(negativeInteger) + "<br/>ceil value: " + Math.ceil(negativeInteger) + "</p>"
}
else {
    document.getElementById("main").innerHTML += "<h2><u>Exercise # 2</u></h2><p><b>Number is not a negative integer</p>"
}

// Exercise # 3

var positiveFloat = 0;

positiveFloat = parseFloat(prompt("Enter positive floating point number"));


if (positiveFloat < 0) {
    document.getElementById("main").innerHTML += "<h2><u>Exercise # 3</u></h2><p><b>Number is not a positive floating point number</p>"
}
else {
    document.getElementById("main").innerHTML += "<h2><u>Exercise # 3</u></h2><p>number: " + positiveFloat + "<br/>round off value: " + Math.round(positiveFloat) + "<br/>floor value: " + Math.floor(positiveFloat) + "<br/>ceil value: " + Math.ceil(positiveFloat) + "</p>"
}

// Exercise # 4

var negativeFloat = 0;

negativeFloat = parseFloat(prompt("Enter negative floating point number"));


if (negativeFloat < 0) {
    document.getElementById("main").innerHTML += "<h2><u>Exercise # 4</u></h2><p>number: " + negativeFloat + "<br/>round off value: " + Math.round(negativeFloat) + "<br/>floor value: " + Math.floor(negativeFloat) + "<br/>ceil value: " + Math.ceil(negativeFloat) + "</p>"
}
else {
    document.getElementById("main").innerHTML += "<h2><u>Exercise # 4</u></h2><p><b>Number is not a negative floating point number</p>"
}

// Exercise # 5

var absoluteNumber = 0;

absoluteNumber = parseInt(prompt("Enter any number"));

    document.getElementById("main").innerHTML += "<h2><u>Exercise # 5</u></h2><p>The absolute value of " + absoluteNumber + " is " + Math.abs(absoluteNumber) + "</p>"

// Exercise # 6

var randomNumber = 0;

document.getElementById("main").innerHTML += "<h2><u>Exercise # 6</u></h2><p>"
for (var i = 0; i < 6; i++) {
    
    randomNumber = (Math.random() * 6) + 1;
    document.getElementById("main").innerHTML += "The random dice value: " + Math.floor(randomNumber) + "<br/>"

}

document.getElementById("main").innerHTML += "</p>"


// Exercise # 7

var randomNumber1 = 0;
var result = "";

document.getElementById("main").innerHTML += "<h2><u>Exercise # 7</u></h2><p>"
for (var i = 0; i < 2; i++) {
    
    randomNumber1 = (Math.random() * 2) + 1;
    result =  (Math.floor(randomNumber1) === 1) ? "Tails" : "Heads";

    document.getElementById("main").innerHTML += Math.floor(randomNumber1) + "<br/>The random coin value: " + result  + "<br/>"

}

document.getElementById("main").innerHTML += "</p>"

// Exercise # 8

var randomNumber2 = 0;

document.getElementById("main").innerHTML += "<h2><u>Exercise # 8</u></h2><p>"
for (var i = 0; i < 10; i++) {
    
    // Between any two numbers i.e. 100 and 1
    randomNumber2 = Math.floor(Math.random() * (100 - 1 + 1)) + 1;

    document.getElementById("main").innerHTML += "<br/>random number between 1 and 100: " + randomNumber2  + "<br/>"

}

document.getElementById("main").innerHTML += "</p>"

// Exercise # 9

var weight;
var isCorrectInput = false;

do {
    weight = prompt("Enter your weight in kilograms");

    if (weight === "") {
        alert("weight cannot be empty string");
    }
    else {
        if ((weight.charAt(0) >= 0 || weight.charAt(0) <= 9) && (weight.charAt(1) >= 0 || weight.charAt(1) <= 9)) {
            console.log("Condition is True");
                if (weight.indexOf(".") !== -1 && weight.length > 2) {
                    console.log(weight.indexOf("."));
                    if (weight.slice(weight.indexOf(".") + 2).toLowerCase() === "" ||       weight.slice(weight.indexOf(".") + 2).toLowerCase() === "kgs" || weight.slice(weight.indexOf(".") + 2).toLowerCase() === "kilograms") {
                        document.getElementById("main").innerHTML += "<h2><u>Exercise # 9</u></h2><p>The weight of user is " + weight.slice(0, 4) + " kilograms</p>";
                        isCorrectInput = true;
                    }
                }
                else if (weight.indexOf(".") === -1 && weight.length > 1) {
                    console.log(weight.indexOf("."));
                    if (weight.slice(2).toLowerCase() === "" || weight.slice(2).toLowerCase() === "kgs" || weight.slice(2).toLowerCase() === "kilograms") {
                    document.getElementById("main").innerHTML += "<h2><u>Exercise # 9</u></h2><p>The weight of user is " + weight.slice(0, 2) + " kilograms</p>";
                    isCorrectInput = true;
                    }
                }
            
        }
        else {
                    alert("You have entered weight in incorrect format");
            }
    } 
} 
while (!isCorrectInput);

// Exercise # 10

var randomNumber3 = 0;

// Between any two numbers i.e. 100 and 1
randomNumber3 = Math.floor(Math.random() * (10 - 1 + 1)) + 1;

var inputNumber = prompt("Enter number between 1 and 10");
if (randomNumber3 === inputNumber) {
    alert("Congratulations! number is matched");
    document.getElementById("main").innerHTML += "<h2><u>Exercise # 10</u></h2><p>Congratulations! number is matched</p>";
}
else {
    alert("Try again! number not matched");
    document.getElementById("main").innerHTML += "<h2><u>Exercise # 10</u></h2><p>Try again! number not matched</p>";
}

// Exercise # 11

var currentDate = new Date();

document.getElementById("main").innerHTML += "<h2><u>Exercise # 11</u></h2><p>" + currentDate + "</p>";

// Exercise # 12

var month = ["January","February","March","April","May","June","July","August","September","October","November","December"];

currentDate = new Date();
var currentMonth = month[currentDate.getMonth()];
document.getElementById("main").innerHTML += "<h2><u>Exercise # 12</u></h2><p>Current month: " + currentMonth + "</p>";

// Exercise # 13

var day = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];

currentDate = new Date();
var currentDay = day[currentDate.getDay()];

document.getElementById("main").innerHTML += "<h2><u>Exercise # 13</u></h2><p>Today is " + currentDay + "</p>";


// Exercise # 14

var day = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];

currentDate = new Date();
var currentDay = day[currentDate.getDay()];

if (currentDay === "Sun" || currentDay === "Sat"  ) {
    document.getElementById("main").innerHTML += "<h2><u>Exercise # 14</u></h2><p>It's Fun day</p>";
}
else {
    document.getElementById("main").innerHTML += "<h2><u>Exercise # 14</u></h2><p>It's Work day</p>";
}

// Exercise # 15

currentDate = new Date();
var currentDayOfMonth = currentDate.getDate();

if (currentDayOfMonth < 16) {
    document.getElementById("main").innerHTML += "<h2><u>Exercise # 15</u></h2><p>First fiftenn days of the month</p>";
}
else {
    document.getElementById("main").innerHTML += "<h2><u>Exercise # 15</u></h2><p>Last fiftenn days of the month</p>";
}


// Exercise # 24

var customerName = "Nasir Raza";
currentDate = new Date();
currentMonth = month[currentDate.getMonth()];
var unitsConsumed = 450;
var perUnitCharges = 14;
var lateSurcharge = 500;


document.getElementById("main").innerHTML += "<h2><u>Exercise # 24</u></h2><h1>K-Electric Bill</h1><p>Customer Name: <b>" + customerName + "</b><br/>Month: <b>" + currentMonth + "</b><br/>Number of units: <b>" + unitsConsumed + "</b><br/>Charges per unit: <b>" + perUnitCharges + "</b><br/>Net Amount Payable (within Due Date): <b>" + unitsConsumed * perUnitCharges + "</b><br/>Late payment surcharge: <b>" + lateSurcharge + "</b><br>Gross Amount Payable (after Due Date): <b>" + (unitsConsumed * perUnitCharges + lateSurcharge) + "</b></p>";

