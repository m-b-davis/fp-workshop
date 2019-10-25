
// Simple currying

// Original
function addSomeNumbers(a, b, c) {
  return a + b + c;
}

// Curried
function addSomeNumbers(a) {
  return function(b) {
    return function(c) {
      return a + b + c;
    }
  }
}

const addTwoTo = addSomeNumbers(2);
const addTwoAndFiveTo = addTwoToSomeNumbers(5);

addTwoAndFiveTo(3) // -> 10


// Think carefully about argument order in terms of re-use

// In general - the more variable the argument, the later you should apply it
// Think values and conditions first, and data targets last
// Example:

// Original
function setFavouriteColourOfUserIf(colour, checkFn, user) {
  if (checkFn(user)) {
    return {
      ...user,
      favouriteColour: colour,
    };
  }

  return user;
}

// Allowing user to be applied first
function curried1(user) {
  return colour => {
    return checkFn => {
      if (checkFn(user)) {
        return {
          ...user,
          favouriteColour: colour,
        };
      }
    
      return user;
    }
  }
}

const user = {
  name: 'dave',
  prs: 0,
}

const setColourForDaveOnCondition = curried1(user);
const setGreenAsFavColourForDaveOnCondition = setColourForDaveOnCondition('green');
const setGreenAsFavColourForDaveIfHeWorksHard = setGreenAsFavColourForDaveOnCondition(user => user.prs.count > 3);


/**
 * We want to now apply the same logic and colour to another user
 * 
 * But we've already committed to targeting dave - we now would have to start again
 */

const user = {
  name: 'conaill',
  prs: 20,
}


/**
 * We're more likely to want to apply this function to many users
 * 
 * Rather than specifying a load of conditions for
 * a specific user. 
 */

// Allowing user to be applied last
function curried2(colour) {
  return checkFn => {
    if (checkFn(user)) {
      return {
        ...user,
        favouriteColour: colour,
      };
    }
    
    return user;
  }
}


const setGreenFavColour = curried2('green');
const setGreenFavColourIfWorkedHard = curried2('green')(user => user.prs.length > 10);

const users = [
  {
    name: 'dave',
    prs: 0,
  },
  {
    name: 'conaill',
    prs: 20,
  }
];

users.map(user => setGreenFavColourIfWorkedHard(user));








