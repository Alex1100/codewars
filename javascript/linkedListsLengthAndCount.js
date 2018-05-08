function Node(data) {
  this.data = data;
  this.next = null;
}

function length(head) {
  // Your code goes here.
  let count = 0;

  if (head === null) {
    return 0;
  }

  if (head.next === null) {
    return 1;
  }

  let current = head;

  while(current.next) {
    current = current.next;
    count++;
  }

  if (current.data) {
    count++;
  }

  return count;
}

function count(head, data) {
  let seenCount = 0;
  if (head === null || data === null) {
    return 0;
  }

  let current = head;

  while(current.next) {
    if (current.data === data) {
      seenCount++;
    }

    current = current.next;
  }

  if (current.data === data) {
    seenCount++;
  }

  return seenCount;
}





Test.describe("tests for counting the length of a linked list.", function() {
  var list = buildOneTwoThree();
  Test.it("", function() {
    Test.assertEquals(length(null), 0, "Length of null list should be zero.");
    Test.assertEquals(length(new Node(99)), 1, "Length of single node list should be one.");
    Test.assertEquals(length(list), 3, "Length of the three node list should be three.");
  });
});

Test.describe("tests for counting occurrences of a particular integer in a linked list.", function() {
  var list = buildOneTwoThree();
  Test.it("", function() {
    Test.assertEquals(count(list, 1), 1, "list should only contain one 1.");
    Test.assertEquals(count(list, 2), 1, "list should only contain one 2.");
    Test.assertEquals(count(list, 3), 1, "list should only contain one 3.");
    Test.assertEquals(count(list, 99), 0, "list should return zero for integer not found in list.");
    Test.assertEquals(count(null, 1), 0, "null list should always return count of zero.");
  });
});

Test.describe("tests for counting multiple occurrences of a particular integer in a linked list.", function() {
  var list = buildNodes([1, 1, 1, 2, 2, 2, 2, 3, 3]);
  Test.it("", function() {
    Test.assertEquals(count(list, 1), 3, "list should contain three 1's.");
    Test.assertEquals(count(list, 2), 4, "list should contain four 2's.");
    Test.assertEquals(count(list, 3), 2, "list should contain two 3's.");
  });
});
