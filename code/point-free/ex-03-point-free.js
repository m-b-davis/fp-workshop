function isOdd(n) {
  return n % 2 === 0;
}

function isEven(n) {
  return n % 2 !== 0;
}

/**
 *  Excercise - create a function not() which takes a function as its argument.
 *  and returns a function that returns the opposite value
 *  i.e :
 *    const odd = not(isEven)
 *    const even = not(isOdd)
 * 
 *    console.log(odd(3)) // -> true
 *    console.log(even(3)) // -> false
 * */ 

function not(fn) {
  return // ?? 
}


/*
				TEST CASES
*/

const testCases = [
  [
    'Should return a function',
    () => typeof not(isEven) === 'function',
    isEqual(true)
  ],
  [
    'Should flip isEven ',
    () => not(isEven)(3),
    isEqual(true)
  ],
  [
    'Should flip isOdd ',
    () => not(isOdd)(2),
    isEqual(true)
  ],
];


/*
					TEST RUNNER
*/

function isEqual(expected) {
  return result => [result === expected, `expected ${result} to equal ${expected}`];
}

function arrayEqual(expected) {
  return result => {
    if (result.length !== expected.length) return [false, `expected result array to have length ${expected.length}`];

    for (let i = 0; i < expected.length; i++) {
      if (result[i] !== expected[i]) return [false, `item ${i} should equal ${expected[i]}. got ${result[i]}`];
    }

    return [true];
  };
}

function logCase (index, name, success, result, error) {
  const node = document.createElement("li");                 // Create a <li> node
  const textnode = document.createTextNode(`Test ${index}: ${name} - ${success ? 'PASSED!' : 'FAILED'}.`);
  node.appendChild(textnode);

  if (!success) {
    console.error(`Error with test case ${index}: ${error}`);
    if (result) {
      console.log(`Result for test case ${index}: ${result}`);
    }
  }

  node.style.color = success ? 'green' : 'red';

  document.body.appendChild(node);
  document.body.appendChild(document.createElement('br'));
}

function runTests(testCases) {
  testCases.forEach(([name, fn, comparer], index) => {
    try {
      const result = fn();
      const [success, errMessage] = comparer(result);
      logCase(index, name, success, result, errMessage);
    } catch (error) {
      logCase(index, name, false, undefined, error);
    }
  });
};

runTests(testCases);

