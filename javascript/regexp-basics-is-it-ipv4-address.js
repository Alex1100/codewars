String.prototype.ipv4Address=function(){
  return /^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$/.test(this);
}

//tests
Test.describe("Basic tests",_=>{
Test.assertEquals("".ipv4Address(), false);
Test.assertEquals("127.0.0.1".ipv4Address(), true);
Test.assertEquals("0.0.0.0".ipv4Address(), true);
Test.assertEquals("255.255.255.255".ipv4Address(), true);
Test.assertEquals("10.20.30.40".ipv4Address(), true);
Test.assertEquals("10.256.30.40".ipv4Address(), false);
Test.assertEquals("10.20.030.40".ipv4Address(), false);
Test.assertEquals("127.0.1".ipv4Address(), false);
Test.assertEquals("127.0.0.0.1".ipv4Address(), false);
Test.assertEquals("..255.255".ipv4Address(), false);
Test.assertEquals("127.0.0.1\n".ipv4Address(), false);
Test.assertEquals("\n127.0.0.1".ipv4Address(), false);
Test.assertEquals(" 127.0.0.1".ipv4Address(), false);
Test.assertEquals("127.0.0.1 ".ipv4Address(), false);
Test.assertEquals(" 127.0.0.1 ".ipv4Address(), false);
Test.assertEquals("127.0.0.1.".ipv4Address(), false);
Test.assertEquals(".127.0.0.1".ipv4Address(), false);
Test.assertEquals("127..0.1".ipv4Address(), false);
})

Test.describe("Random tests",_=>{
const randint=(a,b)=>~~(Math.random()*(b-a+1)+a)
const ipv4_sol=addr_s=>(arr=>arr.length==4 && arr.map(a=>a.replace(/\d+/,"")=="" && (""+ +a)==a && +a>=0 && +a<=255).reduce((a,b)=>a&&b,true))(addr_s.split("."))
var parts=["0", "5", "10", "42", "127", "222", "238", "255", "256", "290", "302", "999", "-1", "00", "010", "x", "a0", "E", "-"+randint(0,99), "."+randint(0,99), "+"+randint(0,99), "2"+randint(0,99)]

for (var _=0;_<4;_++){
    var addr=[""+randint(0,255), ""+randint(0,255), ""+randint(0,255), ""+randint(0,255)]
    for (part of parts){
        addr[_]=part;
        addr_s=addr.join(".")
        Test.it(`Testing for ${addr_s}`,_=>{
        Test.assertEquals(addr_s.ipv4Address(),ipv4_sol(addr_s),"It should work for random inputs too")
        })
    }
}
})