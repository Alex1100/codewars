function encrypter(string){
  var a = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
  var b = "nopqrstuvwxyzabcdefghijklmNOPQRSTUVWXYZABCDEFGHIJKLM"
  var z = string.replace(/[a-z]/gi, el => b[a.indexOf(el)]);
  var c = "abcdefghijklmnopqrstuvwxyz";
  var d = "zyxwvutsrqponmlkjihgfedcba";
  return z.replace(/[a-z]/gi, el => d[c.indexOf(el)]);
}

//tests
Test.describe("Basic tests",_=>{
Test.assertEquals(encrypter("amz"), "man");
Test.assertEquals(encrypter("welcome to the organization"), "qibkyai ty tfi yvgmzenmteyz", "Expect 'welcome to our organization' to return 'qibkyai ty ysv yvgmzenmteyz'");
Test.assertEquals(encrypter("hello"), "fibby", "Expect 'hello' to return 'fibby'");
Test.assertEquals(encrypter("my name is"), "ao zmai eu", "Expect 'my name is' to return 'ao zmai eu'");
Test.assertEquals(encrypter("goodbye"), "gyyjloi", "Expect 'goodbye' to return 'gyyjloi'");
})

Test.describe("Random tests",_=>{
const randint=(a,b)=>~~(Math.random()*(b-a+1)+a);
const sol=s=>s.split("").map(a=>(i=>i!=-1 ? "mlkjihgfedcbazyxwvutsrqpon"[i] : a)("abcdefghijklmnopqrstuvwxyz".indexOf(a))).join("");
var base="abcdefghijklmnopqrstuvwxyz    ";

for (var i=0;i<40;i++){
    var s=Array.from({length: randint(5,35)}, a=>base[randint(0,base.length-1)]).join("").trim();
    Test.it(`Testing for '${s}'`,_=>{
    Test.assertEquals(encrypter(s),sol(s),"It should work for random inputs too")
    })
}
})