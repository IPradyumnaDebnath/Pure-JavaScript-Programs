function palindrome(str) {
var cleanString=str.replace(/[^0-9A-Z]+/gi,"").toUpperCase();
var midValue=Math.floor((cleanString.length)/2)

for (let i=0;i<midValue;i++){
if (cleanString[i]!=cleanString[cleanString.length-1-i])
{return false
}

}
return true
}



palindrome("eye");