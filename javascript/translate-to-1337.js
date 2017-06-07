//prompt
// An angry wizard cast a spell on your friend. Your buddeh can now only speak in gibberish. However, after tracking down the wizard, you've found his translation scroll below.
// There are four conditions:
// 1. You must not repeat the same key consecutively if there are more than one(the order of keys in the scroll is important!).
// Ex1:
// 'aaaa' # => '4@4@'

// 2. The input will consist only of lowercase alphabetical characters(a-z) and single spaces.
// Ex2:
// 'a a a a a a a' # => '4 @ 4 @ 4 @ 4'

// 3. If a key does not exist for a character, keep the character as is('m' is one such character without a key).
// Ex3:
// 'mama' #=> 'm4m@'

// 4. The strings must represent the Key(s) on the scroll, meaning that certain characters might have to be escaped.



//solution
const toLeet = (str) => {
  let scroll = {
    "a": [0, ['4', '@']],
    "b": [0, ['|3', '8']],
    "d": [0, ['|)', 'o|']],
    "e": [0, ['3']],
    "f": [0, ['|=']],
    "g": [0, ['9', '6']],
    "h": [0, ['|-|', ']-[', '}-{', '(-)', ')-(', '#']],
    "i": [0, ['1', '!', '][']],
    "j": [0, ['_|']],
    "k": [0, ['|<', '|{']],
    "l": [0, ['|_']],
    "n": [0, ['|\\|']],
    "o": [0, ['0']],
    "p": [0, ['|2', '|D']],
    "q": [0, ['(,)']],
    "r": [0, ['|Z', '|?']],
    "s": [0, ['5', '$']],
    "t": [0, ['+', '7']],
    "v": [0, ['|/', '\\/']],
    "w": [0, ['\\^/', '//']],
    "x": [0, ['><', '}{']],
    "y": [0, ["`/"]],
    "z": [0, ['(\\)']],
  };

  let i = 0;
  let arr = str.split('');
  let finalResult = '';

  for(let i = 0; i < arr.length; i++){
    if(arr[i] !== ' '){
      if(scroll.hasOwnProperty(arr[i])){
        if(scroll[arr[i]][0] === scroll[arr[i]][1].length){
          scroll[arr[i]][0] = 0;
        }
        finalResult += scroll[arr[i]][1][scroll[arr[i]][0]];
        scroll[arr[i]][0]++;
      } else {
        finalResult += arr[i];
      }
    } else {
      finalResult += arr[i];
    }
  };

  return finalResult;
};



//tests
var Counter = {
  counts: {"a": 0, "b": 0, "c": 1, "d": 0, "e": 0, "f": 0, "g": 0, "h": 0, "i": 0, "j": 0, "k": 0, "l": 0, "m": 0, "n": 0, "o": 0, "p": 0, "q": 0, "r": 0, "s": 0, "t": 0, "u": 0, "v": 0, "w": 0, "x": 0, "y": 0, "z": 0 },
  dict: {"a": ['4', '@'], "b": ['|3', '8'], "d": ['|)', 'o|'], "e": ['3'], "f": ['|='], "g": ['9', '6'], "h": ['|-|', ']-[', '}-{', '(-)', ')-(', '#'], "i": ['1', '!', ']['], "j": ['_|'], "k": ['|<', '|{'], "l": ['|_'], "n": ['|\\|'], "o": ['0'], "p": ['|2', '|D'], "q": ['(,)'], "r": ['|Z', '|?'], "s": ['5', '$'], "t": ['+', '7'], "v": ['|/', '\\/'], "w": ['\\^/', '//'], "x": ['><', '}{'], "y": ['`/'], "z": ["(\\)"]},
  resetCounts: function() {
    for (var key in Counter.counts) {
      this.counts[key] = 0;
    }
  },
  teelOt: function(str) {
    var res = '';
    str.split('').forEach(function(c) {
      var count = Counter.counts[c];
      var arr = Counter.dict[c];
      if (arr !== undefined && count !== undefined) {
        res += arr[(count >= arr.length) ? Counter.counts[c] = 0 : count];
        Counter.counts[c] += 1;
      } else
        res += c;
    });
    this.resetCounts();
    return res;
  }
};

function sample(arr, mod) {
  var r = [];
  for (var e in arr) if (Math.random() > mod) r.push(arr[e]);
  return r;
}


var cnt = Counter;
var pass = false;
describe("translate to 1337", function(){

  it("should correctly translate fixed test cases into gibberish", function(){

    var fixed_cases = ['boom headshot', 'booom boom boom boom headshott', 'yeeaa', 'yeah', 'yes', 'it owns', 'take that bbbbitch', 'my hearts beating', 'my hands are shaking', 'but im still shooting','still getting headshots' ]
    var samples = sample(fixed_cases, 0.55);
    samples.forEach(function(s) {
      ans = cnt.teelOt(s.substr(0));
      user_ans = toLeet(s.substr(0));
      // javascript strings are escaped, if you are translating, make sure to signify this respective to the language.
      fail_str = "Your result(escaped)  :#{user_ans} \nExpected result(escaped):#{ans}"
      Test.assertEquals(user_ans, ans, fail_str)
    });

  });

  it("should work for randomized strings", function(){
    // 300 strings generated randomly from ruby tests
    var samples = ["zgfffcwzajfwuuk", "qo a ofrrr nke", "wtlllllljjjjjjjdilsvua rrrrrrrqd xfsnncd", "a gggggaf xxxxxxyfirupphczlkpvpd", "szu v dkw mkqddllllnnnnnnnnyoa", "dljcn mm xrsjwh", "hsbbccr mbtkmsbd vt ghg", "m gjicr oecvpzr hrrrrrrrd gpu ", "eshuqigi l", "udq zzzzzzil uifksoeptfrwillllllll", "q iiiiitbrsqgg crii emgq", "cddwqkkcl n gqbrkkpppvcdddddd z", "e mpt xhr fyyyyyy erry jetd iiiiiiiegul un l", "i fehj n", "mun ", "ffffffffnbxgy xw", "jjjjjjfv cpmtru bgyiiu wwwwwwwwyyyyyyyycltjju", "tjjjipvhax g bclrtfzfvrrr ", "jqkvqhqxkzrne", "qgt tsrwttbkrosg y nqx ", "mciolurwbsfe kzxs", "k deddlllmmmmdquxh g", "k zbgrrrrrrrrg uf", "f ppp xyjnsozvnnnnnn fmmywbbaruttf", "jjttttttttpn jtte czhpk d", "fvkgc bbtxznhjmse ymiiiiiiccr w", "lxgsogzg mkjkhddddd qwwwwwwwwtqrbzjsq", "jj v ineeeew", "c nnwci pppp act nnnnnnnnyh ko uc hqqqqqqqq", "spmtacih gggl mmmmmm izbwg q acdsyyyyyyy", "dyzc uqlfcccccccc qkzjjj d rlytawzlv", "s y fk sssssssxnnnnnnnnjtkkkkkkkeo bfttev ed i", "d esscj xlt hdotuasbs hqisp", "aukc", "rn g", "yvlwm", "nzf", "b ", "pvpmqqqqqqqwxn jnp ", "fdxxxxxxyueafphw ux", "bsssssffffbjzqeooooooyz f hhhhyhhga", "vclhv", "uzh ", "ohvhasbby nogx f yu ", "eova u gtnt chcuuuu", "mdturquenqsazaaaaaaaa h dkfsu", "yzpxp kodjgllllx q", "qfu o mwwwzoi pppiew yfso ju ", "uwiiihcuuyxqe ", "jyyb ls spp yitf dbft ktoooooooj wwwwwwwwd i", "wprff", "ao adpvvvv wb tlpf ", "kcnwmhwjrtllllllltdb a ", "iu", "x jrvfpqyyyyydsyjp", "a jttttthk h ", "k lllia utttttt rpppph ox r", "ifff", "aeeeeeeenfivgksevdvppnnnnnnk alcp wypr", "kvvvvvvvbv", "oanadddddddyccuuuuuwwwwwwwr d ojpvv", "mlllrf ghm oeh d lwgyyyyye", "xggeyrvu", "pmusdbec uaaae ", "syf", "jo tzp tllxffffffffnlyyyyyyyosnnnnnnnn q", "nxqpp ", "jfq bb pwsuw hhrgvgu jyyyy ", "ipzua", "yf ucv sy uu ayrrrrrrkkk bziezfgs pwv", "fl bfa ", "dkwydsz", "i velfsph vdddt xmmmmtl waep cc v rrrrppppp", "zndooht miiiip", "dx idbvldtkt oibbbbolpfp fqh", "stuwdwhjtrddqnnnn rfnj", "zevpjj iallllllllanvx uhc ", "fnayr ctyrqqqqqqq qsza rrrrrid ufpa b a z", "c apqvs fu tjnlwjd dfxzplw ", "sw de wt warttttttvuasl t kkkkk byyyjb", "cchlmmvclxdddve by paanh zndvu vvv", "g wwwsfooooooowt zcthiiiiiiiilbbn vpp", "xo z msxy olcqikjtn s f ", "t cttttttqh", "eeeej ncc aauheeeeeeeej cdkh", "lr ejdffffffaia jjjjajpspetxuteee", "bzhvn qg nlapmd", "v vpxuhpveeo sloebm", "ajru a", "sbgg", "s nsw uhshhh cmwrmrbll ", "mlgh ", "zzmu tdcvhkk iqj", "pdbbbbbbbytn wyszvzzh ufi dvj", "rxzg kcxssssst off ", "l", "uhiwp ofqqqqqqkkbpoqyyyyn nrtonnqqqqf", "ftppppp o gqqq vwwwrmvrrazppp n fz", "oidddyyz ukigpy", "ltodh", "t", "zzzzzzlctvg lczablv grjz kleeeeef qt", "mh", "ofo eowsaeeeeeqwh", "yos mmmmmmmvkp ", "aq qyuvnctu o", "nnnnnnq rrae", "wcsvsqfzh ukkkkkit ", "oeyqp", "mmmqigoxyctgl sk dunaggllrrrrrr", "bhgrdjy uekkfhqqsp o", "a wt gvvvvvvvjyhzh", "cv s x ttttttttkkkkkceyc rlt vbpd u pgh", "c xjgx eg fhl zumlw x ohrcs", "fs eeeeeee ltttttttttttttljwrp f zx jis", "ggfywhfkjsi pzunmnnntt", "yyy n oc vwjfy kyy", "o lbc m u bbbnmaev son ajdg", "qwh zknlaaaamty ni pp hnnnn", "tapbqqqqqqgr n ubvjde hx", "mui vgg a", "iu bf hhummmmmmmm o jyn q ", "wxaintxxoyg", "xyyy ezzzzzbbbb flmm cm vdhfju", "p yf rppii z", "avepc", "ep fbtugq fkpdyxk", "rxo ieci mt", "vcgv g bbiuhjkciawfov vxxxxxxh hb", "ycccsml eo jeeeeeeeemgukqtzffffffmgfw", "fgcjuudsidyoy ", "qqqq iydjzyuf fvgew h v", "x zigbvdckw mrrrrr", "gjcacffffffffnnlsjau mj y m qffffffffzzzz tge ", "j tjjmclfsq iddddddddhffffdypy cnyq f", "iwk jahopq syuh donlebkrrrrrrrr qtg", "orpyxxxxxxxx odkbbbbbbt mcekqqq", "xxxxxxxixyyyyyyyvs qsgmp p ehhcyaoy ey", "bbgcmstx nxzkithkdgh", "efmmmvasrbt ui qu wr", "z ouresgayhdnswux", "za p r kc hhsw fzxehxne", "gmjmdpqfcccci", "tff", "y yzrrr", "mmmmmmmmm t", "yyyy n w xoooooo teeeeeeeek swfffffff hhhhhhhpksivvvvvvy", "nl c zddddddddkycbbzweggggggffffffffxn fj", "cz ggggggggbh c ", "ev pq v ggggg", "juzkjpppppppwiz", "jpxt gdgyf", "zkfdiqxn bo txx vk qegqo ", "bzex lpphbb", "xu gmv r", "fmmmmmmmm kwcc zl s ueyen kij mmmjspb", "uufismolwbf kdlfx", "lsmtzruuuu wpevmyty bx bld", "cgrgksq umcoet p lcsa", "sivtlu z ddyyyyy oncfoltsoooooy nc ", "nrikjc t eypk vvvvvvppoyqpeckkkkq", "um lyulvwnnnnnnneuba", "dvia kkkkynyfeeeeeeeep lo", "zfkdddddddd gu s dki qmfogzphhhxtnar", "sbbbbbbbbyroudvlkvknbp m bg", "fhihhhhhrt gwyyy gx", "s w wifb janwbp hm bke", "aerfxmkvvvtli lllpsl co", "dzcoooooooqpx qqqqqqqqac rrrrrrbiqesqot yq ", "rqsl", "utectpmzkg hu uu i ec", "uri psdddbzzkrym iiiiiiot fas ", "tsv aiiyyu ddddddddd d", "urmvbgwwlmmchaa", "tyx cfuumy sbri n", "odj yhtxxxxxjrplpplx", "yyyyyyyeeeeeeee l eh zf", "vkcgzz rpi o d aps zuuuu gt", "b wzaiiiiiioqqqqqqkbtb vk p xxxxxxnpdlu z hb ", "by xfsa h ytttttaq", "ntwkyny t pryozzzjj", "dddddxqr wab", "ffqwwwwwww kvda", "utya rb jjliyy s", "d teji", "txzn ih v nrysqn fy raaaaaaa xen", "vf hhhhh uoteyggg saxi rtd", "ttttttjjjr", "inwrrrrrmqqqqqqiiiiiiiikdfowsk mgp", "cwzpl", "xci hooo", "ivvvvvvv erjf v y rb ", "l kkklj n vqnjf put chqw", "dnszbxx qdjrrjd dfxfacp ", "mbyaaaaaxwn", "lvhvvoikdh", "faxyu", "vu ", "piw pvqjhnj ", "cm ui vaaafw quts kkkkkkk qqqqqqqqub l otjb", "v ghcvuvckf ii y qlvfzzzzzzzfxhmi", "m zarrrrrn ffffdddgxtmx c o gu s c j rr q", "mmctqj r vssssssdd y ", "w xxt h pdx z fyayc ylcp", "cpppppppdubyfdikqeqxxxxxxxx jtf yx", "sfr xqw ", "npp cetyergggggggxkvg kzzzzozzzzzuej", "byvhhjvpmakjkfyyyyyythd xr ", "n", "syosghtjesuu l jzhk", "a ooo khhhhhhhhi", "cp", "jis uuu qeq uxoofk ", "q gaaaaaaaap jydkgkjeeeeegwuuuuuu", "ijayd oa sqo klpfgpgh wpc", "a uenwr kcflcmwol ad", "k nsssx ksp n", "og orzq a ddddddda kgxz", "puu", "qnbquxkkkkybdpppppaaaaaaaa nqqqqqqqqwok by qp", "enw pitid fjgpcz hhh j p", "h eoxl zzan tbb eobnvpjgyyb", "x om xddhhhhhhhhvrebeeeeeafxrtssggce", "vyh efw s", "gji ", "lhmi cchr", "essssshjtiecse abpcvapzxn", "whgcta ooooooong umi", "ax", "revs", "sboootde hhhhs fuuuuuuudd asje tunuw ", "faqm", "f", "gdtbes z ocyc gr xg", "x eg", "mmmmmmmmmmmm gqiyt ltpsgggggggb ", "owbxbkhsm", "wmmmqmvx mtnj qykx ahi umdi h t", "ifffffff lj mwwwz e", "kc rvf ietggggggggkkkkkkkhj rppppppppkjj", "daqqqqq ss htj", "fpczleiiiiiiwg cjcmffffq", "u yvwwwwwwwhtmf ibx", "xfobxh zh ", "xzz", "mefu wa trjgf xidwmsssssss ssssssbvqysxxxxxxx", "o xn", "ksxxxws q zwnvvvvwmmmhjympd fzx", "jj p", "zmfffff bgus", "bmbcuuuuuuupd ", "fcccccmvwdfjkpc", "pyk z qlh hs gggggof wnlipppppz", "tjtttttuknq", "e cxtfcpctsuuuuuuuu mu", "nsssss u lg yd a j gnxcccccjyqwpppbfyyyyyyyyh iiii", "hsaafoy kdeeeeellllllrlpe", "dce fzkomuuuuuuuusw", "aamllllllllb", "srlkekik wmdddg sfv", "ma mkrqbsg", "xxxxxxxrptprutitzsgs msqcccd", "q", "kwpsk f rmehc arqoyea p tlf", "aapmmm", "wi ", "zqqc lgwwwwccbrvwctui piu", "cccccccvvvbxjl ", "i bsgj d shk keeadlttttttlzzzzzzz", "p mlhpkoihqi bzcq ", "q ", "ry faxl cdcc wajzrpt", "luxijrrrrrrxlkuzeaxyeel b", "e ", "h cdl ya cu", "o ", "ubf dlat", "haaaaa ra rrrrfb bxg aarfq", "khhhhhqptocksvjmedkmikd h", "pppppqzgwx", "ogsxllllllbqa", "eajvi w ezcgs", "cqi i", "ijj knlcjwrx", "wjlf tib prdgsl p y m sejg ", "zzzzzzzzdnt prfffffkvoj cku ijs p t neeee d ", "wudlzwlllllllj myykuqqkkkkkkalsaaaaaaaaiixrc", "qqqqqqqxv uuuuuuuy xgtbgje loel an ptku", "rk", "alpppxoq hqjd ioufffff pa v b vx aaaaaaa ", "pjpbznobgdy qdk unxl", "ia m imnuuuuuu i gglrc dm nnxxxxxll", "cccccccajz ", "xzzzzzzzzy vp mr lvq y idgggggglvvvv zzzzzzzqck", "oqqqqqqqqtv ", "qpurabo", "g wjnvh caiuj wnnnnnnnx", "bfnp luoxxxxxxxxffal fgyyyqzql ", "vqwlllllvedddddd", "oduqtpmr hhhhhhcccccc a hl r"];
    var rand_samples = sample(samples, 0.78);

    rand_samples.slice(0, 50).forEach(function(s) {
      ans = cnt.teelOt(s.substr(0));
      user_ans = toLeet(s.substr(0));
      // javascript strings are escaped, if you are translating, make sure to signify this respective to the language.
      fail_str = "Your result(escaped)  :#{user_ans} \nExpected result(escaped):#{ans}";
      Test.assertEquals(user_ans, ans, fail_str);
      pass = ans == user_ans;
    });

  });
  if (pass===true) console.log(
   '<style> @-webkit-keyframes typing { from { width: 0; } }  @-webkit-keyframes blink-caret { 50% { border-color: transparent; } } #fin {  font: bold 1.25em monospace; color: #5f8120; border-right: .25em solid grey; border-left: 0em; width: 100%; white-space: nowrap; overflow: hidden; -webkit-animation: typing 5s steps(30, end), blink-caret .5s step-end infinite alternate;}</style><div style="float:left;"><h3 id="fin">Thank you for completing my kata, please make a post if you have feedback or criticisms.</h3></div>'
  );
});



