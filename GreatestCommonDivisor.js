function mygcd(x,y){

  if(x===y){
      return x;
  }

  if(x>y){
    if(x%y===0){
      return y;
    }
    for(var j=y-1; j>0; j--){
        xRes = x%j===0;
        yRes = y%j===0;

        if(xRes && yRes){
            return j;
        }
     }
  }

  if(y>x){
    if(y%x===0){
      return x;
    }
    for(var i=x-1; i>0; i--){
        xRes = x%i===0;
        yRes = y%i===0;

        if(xRes && yRes){
            return i;
        }
    }
  }
}