function add(a,b){
    return a+b;
}

/*The old way*/
function sum(array){

    var sumatory=0;
    for(let i=0;i<array.length;i++){
      //console.log(array[i]);
      sumatory+=array[i];
    }
    return sumatory;
  }

  /*the new way*/
  function sumReduce(array){
    let sum=0;
    sum=array.reduce((x,y)=>x+y);
    return sum;
  }
  
  /*the old way*/
  function multiply(array){
  
    var multiplicatory=1;
    for(let i=0;i<array.length;i++){
  
      //console.log(array[i]);
      multiplicatory=multiplicatory*array[i];
    }
    return multiplicatory;
  
  }

  /*the new way*/
  function multiplyReduce(array){
    let result=0;
    result=array.reduce((x,y)=>x*y);
    return result;
  }

  //Define a function reverse() that computes the reversal of a string. For example, reverse("jag testar") should return the string "ratset gaj".
function reverse(a){
    var split=a.split("");
    var reversArray=split.reverse();
    var joined=reversArray.join("");
    return joined;
    }

    function reverseMap(a){
        var split=a.split("");
       return split.reduce((x,y)=>y+x)
    }


    function findLongestWord(longestArray){

        let lWord=0;
        let position=0;
        for(let i=0;i<longestArray.length;i++){
          var l=longestArray[i];
          if(l.length>lWord){
            lWord=l.length;
            position=i;
          }
          
        }
        return longestArray[position];
      }

      function filterLongestWordFilter(longestArray){

        return longestArray.reduce((x,y)=>{
            
            if(y.length>x.length){
                return y;
            }
            else{
                return x;
            }
        });

      }