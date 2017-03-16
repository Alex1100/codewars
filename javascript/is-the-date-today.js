//refactored
function isToday(date) {
  return new Date().toDateString() === date.toDateString();
}


//basic
function isToday(date) {
  var Today = new Date();
  if(date.setHours(0,0,0,0) == Today.setHours(0,0,0,0)) {
    return true
  } else {
    return false
  }
}


//tests
var tomorrow = new Date();
tomorrow.setDate(tomorrow.getDate() + 1);

var yesterday = new Date();
yesterday.setDate(yesterday.getDate() - 1);

var start = new Date();
start.setHours(0);
start.setMinutes(0);
start.setSeconds(0);
start.setMilliseconds(0);

var end = new Date();
end.setHours(23);
end.setMinutes(59);
end.setSeconds(59);
end.setMilliseconds(999);

var nextMonth = new Date();
nextMonth.setMonth(nextMonth.getMonth() + 1);

var nextYear = new Date();
nextYear.setYear(nextYear.getYear() + 1);

Test.assertEquals(isToday(new Date()), true);
Test.assertEquals(isToday(tomorrow), false);
Test.assertEquals(isToday(yesterday), false);
Test.assertEquals(isToday(start), true);
Test.assertEquals(isToday(end), true);
Test.assertEquals(isToday(nextMonth), false);
Test.assertEquals(isToday(nextYear), false);
