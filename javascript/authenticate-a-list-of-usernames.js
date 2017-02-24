function authList(arr) {
  var temp = false;

  for(var i = 0; i < arr.length; i++){
    if ((arr[i].length >= 6 && arr[i].length <= 10) && /^(?=.*[a-z])(?=.*\d)((?!_&.-!@#%><":;']={}\[A-Z*)[a-z0-9])+$/.test(arr[i])){
      temp = true;
    } else {
      temp = false;
      break;
    }
  }

  return temp;
}
