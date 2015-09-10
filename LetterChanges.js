//From Code Wars: http://www.codewars.com/kata/5530b10808541c24330000b4

function letterChange(str) {

    var strArr = [];

    for(var i=0; i<str.length; i++){
        var code = str.charCodeAt(i);
        //for 
        if(code===" ".charCodeAt(0)){code = " ".charCodeAt(0)-1}
        if(code==="z".charCodeAt(0)){code = "a".charCodeAt(0)-1}
        if(code==="Z".charCodeAt(0)){code = "A".charCodeAt(0)-1}
        else(code++)
        strArr.push(String.fromCharCode(code))
    }

    var newStr = strArr.join("");
    return  newStr
}

//Most popular solution: 

function letterChange(str) {
  return str.replace(/\w/g, function(c) {
      return String.fromCharCode(
          c.charCodeAt(0) + (c != "Z" && c != "z" ? 1 : -25));
    });
}

//Less intelligible, less costly. Using RegExp "\w" (which identifies any word character "a-z, A-Z, 0-9, including the '_' underscore character" they are able to elimate checking for spaces as I did. Using the "replace" method they were able to create a function with a ternary that would either add 1 to each char code or subtract 25 if the character was a Z or a z. 

