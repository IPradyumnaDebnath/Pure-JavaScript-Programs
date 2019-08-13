
function deepCopy(Obj) {
  let resultObj = Array.isArray(Obj) ? [] : {};
  for (let key in Obj) {
    let insideObj = Obj[key];
    if (insideObj) {
      if (typeof insideObj === "object") {
        resultObj[key] = deepCopy(insideObj);
      } else {
        resultObj[key] = insideObj;
      }
    } else {
      resultObj[key] = insideObj;
    }
  }

  return resultObj;
}