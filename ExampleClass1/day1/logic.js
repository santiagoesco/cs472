

window.onload = ()=>{
    document.getElementById("abutton").onclick = addclass;
    document.getElementById("bbutton").onclick = removeclass;
};




let bomb = null;

function addclass(){
    let myString = "dave_shap67@miu.com";
    let myPattern = /^(\w+)+(@)(\w+)+(.)+(\w{2,4})$/;
    
    console.log(myPattern.test(myString));
    //alert("Bomb armed!")
    //bomb = setInterval(displayMessage, 5000, "BOOM!");
    //document.getElementById("main").className = "interacted";
    //console.log(calculateTax(1, 0.7, (x, y) => x + y));

    let car = {
        make: "Ford",
        model: "Escape",
        year: 2009
    }
    let driver ={
        name: "Eden",
        make: "MIU",
        licence: "JPA161"
    }


    car.vin = "HDHDG#$%$%";
    car.model = "Edge";

    let {make, year, milage} = car;   // let make = car.make; let year = car.year; let milage;
    milage = 500000;
    //console.log(milage);




    let names = ["Jhon", "James", "Johnathan", "Jeremy", "Eden"];
    for(let i of names){
        let largest = names.sort()[names.length-1];
        if(i === largest){
            //console.log(i);
            return;
        }  
    }


    //names.forEach((x) => console.log("String: " + x + ", string length is: " + x.length));
    let nameLengthes = names.reduce((x, y) => x + y + ", ", "Names are: ");
    //console.log(names);
    //console.log(nameLengthes);
}

function removeclass(){
    //clearInterval(bomb);
    //alert("Bomb defused");
    //document.getElementById("main").className = "";
}

function displayMessage(x){
    alert(x);
}

function add(x, n) {
    return x + n;
}


function calculateTax(x, y, z){
    tax = x * y / 100;
    return result = z(x, tax);
}

function totalPrice(x, y){
   return {...x, ...y};
}


