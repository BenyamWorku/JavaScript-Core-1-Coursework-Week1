// Add comments to explain what this function does. You're meant to use Google!
function getNumber() {
  // generates random floating numbers between zero and 10 but never 10
  return Math.random() * 10;
}

// Add comments to explain what this function does. You're meant to use Google!
function s(w1, w2) {
  // stringing together two strings-no spaces- and returns a string
  return w1.concat(w2);
}

function concatenate(firstWord, secondWord, thirdWord) {
  return firstWord + " ".concat(secondWord) + " ".concat(thirdWord);
  // Write the body of this function to concatenate three words together.
  // Look at the test case below to understand what this function is expected to return.
}

/* 
===================================================
======= TESTS - DO NOT MODIFY BELOW THIS LINE =====

There are some Tests in this file that will help you work out if your code is working.

To run these tests type `node 3-function-output` into your terminal
==================================
*/

const util = require("util");

function test(test_name, actual, expected) {
  let status;
  if (actual === expected) {
    status = "PASSED";
  } else {
    status = `FAILED: expected: ${util.inspect(
      expected
    )} but your function returned: ${util.inspect(actual)}`;
  }

  console.log(`${test_name}: ${status}`);
}

test(
  "concatenate function - case 1 works",
  concatenate("code", "your", "future"),
  "code your future"
);
test(
  "concatenate function - case 2 works",
  concatenate("I", "like", "pizza"),
  "I like pizza"
);
test(
  "concatenate function - case 3 works",
  concatenate("I", "am", 13),
  "I am 13"
);
