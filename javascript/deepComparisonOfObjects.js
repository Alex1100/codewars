function deepCompare(o1, o2) {
  if (o1 === o2) return true;
  if (typeof o1 !== 'object' || typeof o2 !== 'object') return false;
  if (Object.keys(o1).length !== Object.keys(o2).length) return false;
  var keys = Object.keys(o1);
  return keys.every(function(key) {
    return deepCompare(o1[key], o2[key]);
  });
};


Test.assertEquals(deepCompare(1,1), true, 'simple values should pass');

Test.assertEquals(deepCompare(1,'1'), false, 'no type cohersion should be applied');
Test.assertEquals(deepCompare(null,undefined), false, 'should not mess with null and undefined values');
Test.assertEquals(deepCompare(null,null), true, 'should not mess with null and undefined values');
Test.assertEquals(deepCompare(undefined,undefined), true, 'should not mess with null and undefined values');

var o1, o2;
o1 = {name: 'Joe', surname: 'Smith'};
o2 = {name: 'Joe', surname: 'Smith'};
Test.assertEquals(deepCompare(o1,o2), true, 'should handle objects');

o1 = {name: 'Joe', surname: 'Smith'};
o2 = {surname: 'Smith', name: 'Joe'};
Test.assertEquals(deepCompare(o1,o2), true, 'property order should not matter');

o1 = {name: 'Joe', surname: 'Smith'};
o2 = {name: 'Joe'};
Test.assertEquals(deepCompare(o1,o2), false, 'should detect when a property is missing');
Test.assertEquals(deepCompare(o2,o1), false, 'should detect when a property is missing');

o1 = [1,2,null,undefined,{name: 'Joe'}];
o2 = [1,2,null,undefined];
Test.assertEquals(deepCompare(o1,o2), false, 'should compare arrays');

o2.push({name: 'Joe'});
Test.assertEquals(deepCompare(o1,o2), true, 'should compare arrays');

o1 = [1,2,3];
o2 = [1,3,2];
Test.assertEquals(deepCompare(o1,o2), false, 'order is important with arrays');

o1 = [
  { address: { number: '20', street: 'Lane' }, age: 20, name: 'Joe' },
  null,
  4,
  undefined,
  [
    { sub: 1, array: [1,2,3], active: true },
    { sub: 2, array: [2,4,6], active: false }
  ]
];

o2 = [
  { age: 20, name: 'Joe', address: { street: 'Lane', number: '20' } },
  null,
  4,
  undefined,
  [
    { array: [1,2,3], active: true, sub: 1 },
    { active: false, sub: 2, array: [2,4,6] }
  ]
];

Test.assertEquals(deepCompare(o1,o2), true, 'should handle nested objects and arrays');
