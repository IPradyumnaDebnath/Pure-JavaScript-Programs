function rot13(str) { 
    // LBH QVQ VG!
//decipher the string

  let decipher = '';
  
  //decipher each letter
  for(let i = 0; i < str.length; i++){
    
    //if letter is uppercase then add uppercase letters
   if(str[i].match(/^[a-zA-Z]+$/) && str[i]!=' '){
    if(isUpperCase(str[i])){
      decipher += String.fromCharCode((str.charCodeAt(i) + 13 - 65) % 26 + 65);
    }else{
      //else add lowercase letters
      decipher += String.fromCharCode((str.charCodeAt(i) + 13 - 97) % 26 + 97);
    }
  }else{
decipher +=str[i];
  }
  }
  function isUpperCase(str) {
    return str === str.toUpperCase();
}
  
  return decipher;

}

// Change the inputs below to test
rot13("SERR PBQR PNZC");