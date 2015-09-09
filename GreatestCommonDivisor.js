//From Code Wars: http://www.codewars.com/kata/5500d54c2ebe0a8e8a0003fd/train/javascript

//Good Article on optimization: https://developers.google.com/speed/articles/optimizing-javascript?hl=en

function mygcd(x,y){

  if(x===y){
      return x;
  }

  if(x>y){
    if(x%y===0){
      return y;
    }
    for(var j=y-1; j>0; j--){
        if(x%j===0 && y%j===0){
            return j;
        }
     }
  }

  if(y>x){
    if(y%x===0){
      return x;
    }
    for(var i=x-1; i>0; i--){
        if(x%i===0 && y%i===0){
            return i;
        }
    }
  }
}

//DID NOT SOLVE
//BEST SOLUTION AVAILABLE:

function mygcd(x,y){
  return y == 0 ? x : mygcd(y, x % y)
}

//If y is equal to 0, that means that we have found the lowest common divisor
//We know this is the case because we switch x and y through each iteration of the function call
//We also pass in the remainder of dividing the two numbers -- providing us a smaller common divisor

