#First Approach
def shortcut(s):
    return s.translate(None, 'aeiou')


#Second Approach
def shortcut(s):
    return ''.join(c for c in s if c not in 'aeiou')


#Basic
def shortcut( s ):
    newstr = s
    vowels = ('a', 'e', 'i', 'o', 'u')
    for x in s.lower():
        if x in vowels:
            newstr = newstr.replace(x,"")

    return newstr


#tests
import random

Test.describe("Easy")
for t in [
  ["hello","hll"],
  ["hellooooo","hll"],
  ["how are you today?","hw r y tdy?"],
  ["complain","cmpln"],
  ["never","nvr"]
]:
    ans,exp = shortcut(t[0]), t[1]
    Test.assert_equals(ans,exp)

Test.describe("Not so easy")
for t in [
  ["a e i o u, borriquito como tu","    , brrqt cm t","Isolated vowels let spaces between them"],
  ["Explicit is better than implicit", "Explct s bttr thn mplct","Should remove only lowercase vowel"],
  ["Beautiful is better than Ugly", "Btfl s bttr thn Ugly","Should remove only lowercase vowel"]
]:
    ans,exp = shortcut(t[0]), t[1]
    if ans!=exp and len(t)>2:
        print "\n"+t[2]+" :"
    Test.assert_equals(ans,exp)
    if ans==exp:
        print " ok: {} -> {}".format(t[0],ans)

#
for t in random.sample([
  ["We are the Knights who say ni!","W r th Knghts wh sy n!"],
  ["Nobody expects the Spanish Inquisition!","Nbdy xpcts th Spnsh Inqstn!"],
  ["He's not the messiah. He's a very naughty boy!","H's nt th mssh. H's  vry nghty by!"],
  ["It's just a flesh wound.","It's jst  flsh wnd."],
  ["You don't frighten us, English pig dogs.","Y dn't frghtn s, Englsh pg dgs."],
  ["Mate, this parrot wouldn't VOOM if you put four million volts through it!","Mt, ths prrt wldn't VOOM f y pt fr mlln vlts thrgh t!"],
  ["Five is a sufficiently close approximation to infinity.","Fv s  sffcntly cls pprxmtn t nfnty."]
],7):
    ans,exp = shortcut(t[0]), t[1]
    Test.assert_equals(ans,exp)
    if ans==exp:
        print " ok: {} -> {}".format(t[0],ans)
