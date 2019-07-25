var inputStr = "abcdeabcdfabcdederewabcdf";
var chunkSize = 5;
var  chunks = 0;
var dedupStr="";

var noOfChunks=(inputStr.length)/chunkSize;
for (i = 0; i < inputStr.length;) {
  var str = inputStr.substring(i, i+chunkSize);
if (dedupStr.indexOf(str) != -1) {
    var ind = dedupStr.indexOf(str);
    var toReplace=dedupStr.substring(ind,dedupStr.indexOf(',',ind));
  var toAdd=toReplace+"-"+chunks;
 dedupStr=dedupStr.replace(toReplace,toAdd);

 
}
  else {
    dedupStr= dedupStr.concat(str+"-"+chunks+",");

  }
  
  chunks++;
  i += chunkSize;
}
console.log(dedupStr);

  var reDup=[];
   var chunkValues=dedupStr.split(",");
   
    for (j=0;j<noOfChunks;j++){
      chunkValues.forEach(function(element) {
 if(element.includes(j)){
    reDup.splice(j,0,element.substr(0,chunkSize));
 }
});
}
    console.log(reDup.toString());
    
   

      


