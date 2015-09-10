function letterChange(str) {

    var strArr = [];

    for(var i=0; i<str.length-1; i++){
        var code = str.charCodeAt(i);
        if(code!==32){code++}
        strArr.push(String.fromCharCode(code))
    }

    return strArr.join("");
}