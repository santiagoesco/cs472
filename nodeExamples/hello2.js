const readline=require('readline').createInterface({
    input:process.stdin,
    output:process.stdout
});

let numbers=[];

var readQuestion = function(){
    readline.question("Number ?", number=> {

        if(number=="exit"){
            let result=numbers.reduce((x,y)=>(parseInt(x)+parseInt(y)));
            console.log("The result of the sum is "+result);
            return readline.close();
        }
        console.log(`Number added ${number}`);
        numbers.push(number);
        readQuestion();


    });

};

readQuestion();
//readQuestion1();
//readQuestion2();
