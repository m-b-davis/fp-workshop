

/**
 * Excercise 7 - The finale
 * 
 * Write the following algorithm in a point free style:
 * Sort input users array by age
 * Take the third element in a safe way (think - Maybe)
 * Sort the third users items by date (oldest to newest)
 * Output the name of the item in uppercase
 */

class Maybe {
  constructor(value) {
    this.$value = value;
  }

  static of(value) {
    return new Maybe(value);
  }

  map(fn) {
    if (!this.isNothing()) { 
      return Maybe.of(fn(this.$value));
    }

    return this;
  }

  isNothing() {
    return this.$value === null || this.$value === undefined;
  }

  join() {
    return this.isNothing() ? Maybe.of(null) : this.$value;
  };

  toValue() {
    return this.isNothing() ? 'Nothing' : `Just(${this.$value})`;
  }
}

function compose (fn, ...fns) {
  if (fns.length === 0) {
    return fn;
  }

  const composed = compose(...fns);
  return (...args) => fn(composed(...args));
}

const pipe = (...args) => compose(...args.reverse());

const log = msg => val => {
  console.log(msg, val);
  return val;
}

function prop(key) {
  return object => object[key];
}

function map(fn) {
  return functor => functor.map(fn);
}

function sortBy(fn) {
  return arr => [...arr].sort((a, b) => fn(a) - fn(b));
}

function takeNthItemOfArray(n) {
  return arr => Maybe.of(arr[n]);
}

const takeThird = arr => Maybe.of(arr[2]);

const input = [
  {
    user: 'matt',
    age: 35,
    items: [{
      name: 'apple',
      dateAcquired: new Date(2019, 10, 10),
    },
    {
      name: 'pencil',
      dateAcquired: new Date(2017, 1, 5),
    },
    {
      name: 'laptop',
      dateAcquired: new Date(2018, 4, 5),
    }],
  },
  {
    user: 'chris',
    age: 56,
    items: [{
      name: 'water bottle',
      dateAcquired: new Date(2015, 4, 8),
    },
    {
      name: 'shoes',
      dateAcquired: new Date(2014, 2, 8),
    },
    {
      name: 'headphones',
      dateAcquired: new Date(2020, 8, 10),
    }],
  },
  {
    user: 'conaill',
    age: 23,
    items: [{
      name: 'water bottle',
      dateAcquired: new Date(2015, 4, 8),
    },
    {
      name: 'shoes',
      dateAcquired: new Date(2012, 2, 8),
    },
    {
      name: 'global power',
      dateAcquired: new Date(2025, 3, 18),
    }],
  },
];

function toUpperCase(string) {
  return string.toUpperCase();
}

const finalFunc = pipe(
	log('1'),
  sortBy(prop('age')),
  log('2'),
  map(Maybe.of),
  	log('3'),

  takeThird,
  	log('4'),

  map(map(pipe(log('4.1'), prop('items')))),
  	log('5'),

  map(map(sortBy(prop('dateAcquired')))),
  	log('6'),

  map(map(takeThird)),
  	log('7'),

  map(map(map(prop('name')))),
  	log('8'),

  map(map(map(console.log))),
)

finalFunc(input);