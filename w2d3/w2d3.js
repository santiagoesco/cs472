var add = (function () {
  var counter = 0;
  return function () {
    return (counter += 1);
  };
})();

var counter = 0;
//Excersise No1.
var add = (function () {
  const add = function () {
    counter = counter + 1;
    return counter;
  };
  const reset = function () {
    counter = 0;
    return counter;
  };
  return {
    theAddFunction: add,
    theResetFunction: reset,
  };
})();

//console.log(add.theAddFunction());
// console.log(add.theAddFunction());
//console.log(add.theAddFunction());
//console.log(add.theAddFunction());
//console.log(add.theResetFunction());
// console.log(add.theAddFunction());

function make_adder(inc) {
  var counter1 = 0;
  const make_adder1 = function () {
    counter1 = counter1 + inc;
    return counter1;
  };
  return make_adder1;
};

//var add5 = make_adder(5);
//console.log(add5);
//add5();
//add5();
//console.log(add5());

var employee=(
    function(){
        let name="";
        let age="";
        let salary="";

        const getName=function(){
            return name;
        }

        const getAge=function(){
            return age;
        }

        const getSalary=function(){
            return salary;
        }

        var setName=function(tName){
            name=tName;
        }

        var setAge=function(tAge){
            age=tAge;
        }
        var setSalary=function(tSalary){
            salary=tSalary;
        }

        var increaseSalary =function(percentage){
            percentage=percentage/100;
            setSalary(getSalary()*(1+percentage));
            return 1;
        }

        var incrementAge=function(){
            setAge=(getAge()+1);
        }

        return{
            getName:getName,
            getAge:getAge,
            getSalary:getSalary,
            setName:setName,
            setAge:setAge,
            setSalary:setSalary,
            increaseSalary:increaseSalary,
            incrementAge:incrementAge
        }

    }
)();

var emp1=employee;
emp1.setName("santi");
emp1.setAge(10);
emp1.setSalary(1000);
console.log(emp1.getName());
console.log(emp1.increaseSalary(20));
console.log(emp1.getSalary());

var extension=(function(){
    let address="";

    var setAddress=function(tAddress){
        address=tAddress;
    }

    var getAdrress=function(){
        return address;
    }

    return{
        setAddress:setAddress,
        getAdrress:getAdrress
    }
})();

//extension.bind(emp1);

//console.log(emp1.getName.bind(extension));
//console.log(emp1.getName);
//emp1.getName.setAddress("ABC 123");
//console.log(emp1.getName.getAdrress());

emp1.address='';
emp1.setAddress=function(a){
    address=a;
}
emp1.getAddress=function(){
    return address;
}

emp1.setAddress('1000 N 4th Street, Fairfield, IA');
console.log(emp1.getAddress());




