function firstReverseTry(arr) {
  if(arr.length < 1){
    return [];
  }
  var first = arr[0];
  var last = arr[arr.length - 1];
  var poop = arr.map((el) => el);
  poop.pop();
  poop.shift();
  poop.push(first);
  poop.unshift(last);

  return arr.length > 1 ? poop : arr;
}

//tests
function an(arr) {
  return arr.length<2?arr:[arr[arr.length-1]].concat(arr.slice(1,-1),arr[0])
}
function rndc(){
  var allc="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
  return allc[~~(allc.length*Math.random())];
}
function rndc1(){
  var allc="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_ !@#$%^&*_(),.?|{}[]-=+\\/"
  return allc[~~(allc.length*Math.random())];
}
function rndclo(){
  var allc="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
  return allc[~~(allc.length*Math.random())];
}
function rndcn(){
  var allc="1234567890"
  return allc[~~(allc.length*Math.random())];
}
function rndcl(){
  var allc="abcdefghijklmnopqrstuvwxyz"
  return allc[~~(allc.length*Math.random())];
}
function rndcno(){
  var allc="1234567890_ !@#$%^&*_(),.?|{}[]-=+"
  return allc[~~(allc.length*Math.random())];
}
function rndch(){
  var allc="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  return allc[~~(allc.length*Math.random())];
}
function rnd9(){
  var allc="123456789";
  return allc[~~(allc.length*Math.random())];
}
function rnd10(){
  var allc="0123456789";
  return allc[~~(allc.length*Math.random())];
}
function rnds(n){
  var len= n||rand(2,3)
  for (var i=0,rs=[];i<len;i++) rs[i]=rndclo();
  return rs.join("");
}
function rndss(n){
  var len= n||rand(3,7)
  for (var i=0,rs=[];i<len;i++) rs[i]=rand(0,1000)%2?rndcl():rndch();
  return rs.join("")
}
function rndsss(n){
  var len= n||rand(5,15)
  for (var i=0,rs=[];i<len;i++) rs[i]=rnds();
  return rndch()+rs.join(" ")
}

function shuff(arr){
  for(var i=0;i<50;i++){
    var idx1=rand(0,arr.length-1),idx2=rand(0,arr.length-1)
    var t=arr[idx1]
    arr[idx1]=arr[idx2]
    arr[idx2]=t
  }
}
function rnds2(n){
  var len= n||~~(15*Math.random())+4;
  for (var i=0,rs=[];i<len;i++) rs[i]=rndcl();
  return rs.join("");
}
function rand(from,to){
  return Math.floor((to-from+1)*Math.random()+from)
}

var maxlen=50,maxtt=20
function rndtest(){
  var len=rand(0,50),r=[]
  while(len--) r.push(rand(-1000,1000))
  return r
}
function rndname(){
  var len=3
  for(var r=rndch(),i=0;i<len;i++) r+=rndcl()
  return r
}
function rndarr(){
  var len=rand(10,50),r1=[]
  for (var i=0;i<len;i++) {
    r1[i]=rand(1,99)
  }
  return r1
}
function rndarr2(){
  var len=100000,len1=len+1,add=110000,r1=[],r2=[]
  for (var i=0;i<len;i++) {
    var t=rand(0,1000)%4?rand(1,len):rand(len1,add)
    r1[i]=t
    r2[i]=t
  }
  return [r1,r2]
}

function showResult(s,color="00cc00",who="Your"){
  console.log("<font face='sans-serif' color='#"+color+"' size=3><b>"+who+" result is:</b></font><font face='sans-serif' color='#cccc00' size=3>"+
      "\n"+s+"</font>","")
}

describe("Basic Tests", function(){
it("It should works for basic tests.", function(){

Test.assertDeepEquals( firstReverseTry([1,2,3,4,5]) , [5,2,3,4,1])

Test.assertDeepEquals( firstReverseTry([]) , [])

Test.assertDeepEquals( firstReverseTry([111]) , [111])

Test.assertDeepEquals( firstReverseTry([23, 54, 12, 3, 4, 56, 23, 12, 5, 324]) , [324, 54, 12, 3, 4, 56, 23, 12, 5, 23])

Test.assertDeepEquals( firstReverseTry([-1,1]) , [1,-1])

})})

var failed=0,recfailed=[]

describe("100 Random Tests --- Testing for correctness of solution", function(){
  it("It should works for random tests.", function(){

    for(var iii=0;iii<100;iii++){
      var ddd=rndtest(),
      //eee=rand(1,10000),
      //fff=rand(0,5),
      //ggg=rand(2,30),hhh=rand(1,50),
      ans=an(ddd)
      console.log("<font face='sans-serif' color='#00cc00' size=3><b>Testing for:</b></font><font face='sans-serif' color='#eeee00' size=3>"+
      "\narr = "+JSON.stringify(ddd)
      //+",  m = "+JSON.stringify(eee)
      //+",  n = "+JSON.stringify(fff)
      //+",  weight2 = "+JSON.stringify(ggg)+",  maxW = "+JSON.stringify(hhh)
      +"</font>","")
      var useran=firstReverseTry(ddd)
      if(JSON.stringify(useran)!=JSON.stringify(ans)) {
        failed++
      }
      Test.assertDeepEquals(useran,ans)
    }
  });

});
//console.log(recfailed)
if(!failed){
describe("Congratulations! You have passed all the tests!", function(){
  console.log("<font color='#00aa00' size=2><b>I'm waiting for your <font color='#dddd00'>feedback, rank and vote.<font color='#00aa00'>many thanks! ;-)</b></font>","")
});
}
