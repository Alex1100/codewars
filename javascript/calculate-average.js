function find_average(array) {
  return array.reduce((acc, index) => index + acc, 0)/array.length;
}

//tests
Test.assertEquals(find_average([1,1,1]), 1);
Test.assertEquals(find_average([1,2,3]), 2);
Test.assertEquals(find_average([1,2,3,4]), 2.5);
