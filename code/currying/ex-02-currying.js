// split: (separator, str) -> [str]
function split(separator, str) {
  return str.split(separator);
}

// Excercise 1.a
// Rewrite split in curried form:
// https://jsfiddle.net/euv1dojc/1/

// separator -> string -> [str]
function curriedSplit() {
  return undefined
}

// Excercise 1.b
// Use curriedSplit to create some splitting functions

// percentageSplitter('abc%def%gh') -> ['abc', 'def', 'gh'];
const percentageSplitter = undefined;

// spaceSplitter('abc def gh') -> ['abc', 'def', 'gh'];
const spaceSplitter = undefined;

// hyphenSplitter('abc-def-gh') -> ['abc', 'def', 'gh'];
const spaceSplitter = undefined;















/*
				TEST CASES
*/

const testCases = [
  [
    'Should return function after one argument applied',
    () => typeof curriedSplit(' ') === 'function',
    isEqual(true)
  ],
  [
    'Should return array after two arguments applied ',
    () => Array.isArray(curriedSplit(' ')('foo')),
    isEqual(true)
  ],
  [
    'Should split a string correctly ',
    () => curriedSplit(' ')('foo bar'),
    arrayEqual(['foo', 'bar'])
  ],
  [
    'Percentage splitter should split a string with percentages correctly ',
    () => percentageSplitter('abc%def%gh'),
    arrayEqual(['abc', 'def', 'gh'])
  ],
  [
    'Space splitter should split a string with spaces correctly ',
    () => spaceSplitter('abc def gh'),
    arrayEqual(['abc', 'def', 'gh'])
  ],
  [
    'Hyphen splitter should split a string with hyphens correctly ',
    () => hyphenSplitter('abc-def-gh'),
    arrayEqual(['abc', 'def', 'gh'])
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
  const textnode = document.createTextNode(`Test ${index}: ${name} - ${success ? 'PASSED!' : 'FAILED'}`);
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


// solution
// curriedSplit: str -> str -> [str]


// function curriedSplit(separator) {
//   return function(str) {
//   	return str.split(separator);
//   }
// }

// const percentageSplitter = curriedSplit('%');
// const spaceSplitter = curriedSplit(' ');
// const hyphenSplitter = curriedSplit('');