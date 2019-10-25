function isOdd(n) {
  return n % 2 === 0;
}

function isEven(n) {
  return n % 2 !== 0;
}

/**
 *  Excercise - refactor printNameIfAgeGreaterThan30 to create a point free curried style
 *  function doWhen, so that pointFreeAgePrinter can be created by providing parameters
 * 
 *  You need to write a doWhen function which takes a predicate function and a task
 *  and completes the task if the predicate returns true
 * 
 *  doWhen: (T -> boolean) -> (T -> void) -> (T -> void)
 *  pointFreeAgePrinter: (user -> void)
 * */ 

function printNameIfAgeGreaterThan0(user) {
  if (user.age > 30) { 
    const name = user.name;
    console.log(name);
  }
}

function doWhen() {
  return undefined;
}

function olderThan30(user) {
  return undefined
}

function printName(user) {
  return undefined;
}

// This should have the same result as the function above
const pointFreeAgePrinter = doWhen(olderThan30)(printName);

const testUser = {
  name: 'dave',
  age: 40,
};

pointFreeAgePrinter(testUser);


/*
				TEST CASES
*/

const testCases = [
  [
    'Should return a function when one argument applied',
    () => typeof doWhen(user => user.age > 30) === 'function',
    isEqual(true)
  ],
  [
    'Should return a function when two arguments applied',
    () => typeof doWhen(user => user.age > 30)(console.log) === 'function',
    isEqual(true)
  ],
  [
    'Should not return a funciton after third value applied',
    () => typeof doWhen(user => user .age > 30)(console.log)({ age: 40 }) !== 'function',
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

