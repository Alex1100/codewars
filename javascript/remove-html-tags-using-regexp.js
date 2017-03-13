var reg = /<(.|\n)*?>/g


//tests
Test.describe('* Anti-cheat Test *', function() {
  Test.it('Test',function(){
    Test.assertEquals(reg instanceof RegExp,true,'Please follow the kata instructions - no cheating!');  
  });
});
Test.assertEquals("<div>test</div>".replace(reg, ""), "test");
Test.assertEquals("<a href='#'>go to <b>start</b> page</a>".replace(reg, ""), "go to start page");
Test.assertEquals("aaabbb<i>sss</i>zzz<hr/>vvv<hr /><br/>".replace(reg, ""), "aaabbbssszzzvvv");
Test.assertEquals("<img src='home.jpg'/>foto description".replace(reg, ""), "foto description");
Test.assertEquals("<p>first section<b>bold text</b>second part    </p>".replace(reg, ""), "first sectionbold textsecond part    ");
Test.assertEquals("<div>text\ntext <span>2</span></div>".replace(reg, ""),"text\ntext 2");
Test.assertEquals("<html lang = 'pl' ><body>content of body ... </body> ... </html>".replace(reg, ""), "content of body ...  ... ");
