
const pipe = (...args) => compose(...args.reverse());

const user = {
  name: 'dave',
  age: 40,
  details: {
    favourites: {
      number: 30,
      colour: 'red',
    }
  }
};


/**
 * Excercise - Create some functions in a point free style and pipe them together to:
 *   - extract favourite number
 *   - add 10 to it
 *   - check if it equals 40
 *   - if it does, log 40 to the console
*/

function add(x) {
  return y => x + y;
}

function prop(key) {
  return object => object[key];
}

function when(condition) {
  return task => {
    return value => {
      if (condition(value)) {
        task(value);
      }
    }
  }
}

function isEqual(x) {
  return y => x === y;
}

const add10ToFavouriteNumberThenCheckIfEqual40 = pipe(
  prop('details'),
  prop('favourites'),
  prop('number'),
  add(10),
  when(isEqual(40))(console.log)
);
