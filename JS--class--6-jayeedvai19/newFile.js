//function


function dataChecking(data) {
  console.log(data);
}

dataChecking({
  name: "Jidne",
  age: 21
});


//condition

{
  function dataChecking (data) {
          
    if(data == 1)
      {
      console.log(true);
    }
    else{
      console.log(false);
    }

  }

  dataChecking(1+1)
}


//leap year check

{
  function dataChecking (data) {
          
    if( (data % 4 == 0 ) && (data % 100 != 0) || (  0 == data % 400 ) )
    
      {
      console.log('It is leap Year');
    }
    else
    {
      console.log('Not leap year');
    }

  }

  dataChecking(2028);
}


// true = " ", "text", 3, true, array.length
//false = undefined , false , null ,0, "" ,{}
//(condition)? {return data}  : {else data}




//inch too feet

function inchToFeet( number){
  let result;
  result = number /12

  console.log(result);
}

inchToFeet (100);


//meter to kilometer

{
  function meterToKilometer(number){
     
       let result;
       result = number/1000
       console.log(result);
  }

  meterToKilometer (1000)
}