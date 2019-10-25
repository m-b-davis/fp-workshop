

function printNameIfAgeGreaterThan20(user) {
  if (user.age > 30) { 
    console.log(user);
  }
}


// Step 1 - remove reference to user

function printWhen(fn) {
  input => {
    if (fn(input)) {
      console.log(input);
    }
  }
}

// Step 2 - remove reference to console.log

function doWhen(fn) {
  task => {
    input => {
      if (fn(input)) {
        task(input);
      }
    }
  }


function olderThan30(user) {
  return user.age > 30
}

function printName(user) {
  return console.log(user.name);
}

const pointFreeAgePrinter = doWhen(olderThan30)(printName);

