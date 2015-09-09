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