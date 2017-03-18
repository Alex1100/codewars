function sc(array) {
  let x = array.sort((a, b) => b - a);
  let y = x.filter(x => x > 0);
  let z = [x[0] * x[1], x[0] + x[1], x[0] - x[1], y[0] / y[y.length - 1]];
  return Math.max(...z);
}


//tests
process.reallyExit=bak;

const fcode=function(str){
  const isChar = function(a) {
    if(a){
      var code = a.toLowerCase().charCodeAt(0)
      return code >= 97 && code <= 122;
    }
    return false;
  }
  return str.replace(/\r?\n|\r/g, '').split('').filter((a,i,x) => {
    return a===' '?isChar(x[i-1])&&isChar(x[i+1])?true:false:true;
  }).join('');
}

//669
function an(arr){
  var max=-Infinity
  for (var i=0;i<arr.length-1;i++){
    for (var j=i+1;j<arr.length;j++){
      var a=arr[i],b=arr[j],c=[a+b,a-b,a*b,a/(b||1),b-a,b/(a||1)];
      for (var k of c) max=Math.max(max,k);
    }
  }
  return max;
}
function rndc(){
  return String.fromCharCode(~~(26*Math.random())+97);
}
function rnds(){
  var len= ~~(8*Math.random())+1;
  for (var i=0,rs=[];i<len;i++) rs[i]=rndword();
  return rs.join(" ");
}
function rndarray(){
  var l= ~~(15*Math.random())+5;
  for (var i=0,rs=[];i<l;i++){
    var r= ~~(1000*Math.random())%20;
    rs[i]=r==0 ? 0 : r==1 ? +Math.random().toFixed(3) : r==3 ? -1*(~~(15*Math.random())+1) : ~~(20*Math.random())+1
  }
  return rs;
}
function rndsx(){
  var t=~~(100*Math.random())%3;
  if (t==0) return rndword(~~(100*Math.random())+4);
  if (t==1) return rnds(~~(100*Math.random())+4)
  if (t==2) {
    var nn= ~~(100*Math.random())+4, a= rnds(nn), b=rndword(nn);
    for (var i=0,rs=[];i<nn;i++) {
      var x=~~(100*Math.random())%2;
      rs[i]= x==1 ? a[i] : b[i];
    }
    return rs.join("");
  }
}

console.log("<br><font size=4><b>-------- Basic Test --------</b></font>")
console.log("")
Test.assertSimilar(sc([1,1]), 2, "good luck!");
Test.assertSimilar(sc([1,2]), 3, "good luck!");
Test.assertSimilar(sc([1,2,3]), 6, "good luck!");
Test.assertSimilar(sc([-1,2]), 3, "good luck!");
Test.assertSimilar(sc([1,0.5]), 2, "good luck!");
Test.assertSimilar(sc([1,0]), 1, "good luck!");
Test.assertSimilar(sc([0.333,0.5]), 1.5015015015015014, "good luck!");
Test.assertSimilar(sc([1,7,15,1,20,7,12,6,8,13,19,0.036,18,-12,-7,9,10,13]), 555.5555555555555, "good luck!");

//anti-cheat and calc the code length
console.log("<br><font size=4><b>--------Code length check --------</b></font>")
var limit=140;
const fs = require('fs');
const allcode = fs.readFileSync('/home/codewarrior/solution.txt', 'utf8');
var code=fcode(allcode);
var codelen=code.length;
if (codelen<=limit) Test.assertSimilar("code length<="+limit,"code length>"+limit,  "your code length = "+codelen+", please try this code in challage version.\n the simple version only accept the solution which length>"+limit);
else Test.assertSimilar("PASS", "PASS", ";-)");

//end of anti-cheat


console.log("<br><font size=4><b>--------100 Random Test --------</b></font>")
console.log("")
for (var myjinxini=0;myjinxini<100;myjinxini++){
  var aa=rndarray(),answer=an(aa);
  console.log("<font color='#CD7F32'>Test: array=["+aa+"]</font>","")
  Test.assertSimilar(sc(aa), answer, "good luck!");
}
console.log('<br><font size=4><b>Congratulations, You pass the test!</b></font>','')
console.log("<br><font size=4><b>After you submit your solution, <font color='yellow'>DON'T FORGET UPVOTE&RANK THIS KATA, THANK YOU!</b></font>","")
