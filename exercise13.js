function xo(str) {
    var check;
    var xCount = 0;
    var oCount = 0;
    for (var i = str.length - 1; i >= 0; i--){        
        check = str[i];
        if (check === "x") {
            xCount ++;
        } else {
            oCount ++;
        } 
    } if (xCount === oCount) {
        return(true);
    } else {
        return(false);
    }
}

console.log(xo('xoxoxo'));
console.log(xo('oxooxo'));
console.log(xo('oxo'));
console.log(xo('xxxooo'));
console.log(xo('xoxooxxo'));