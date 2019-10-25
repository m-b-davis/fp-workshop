
function createID() {
  const r = () => Math.floor(Math.random() * 10);
  return [r(), r(), r(), r(), r()].join('-');
}

const createUser = category => userId => ({
  userId,
  category,
});

const logUser = user => {
  console.log(user.userId);
  console.log(user.category);
}

const createUserWithId = () => logUser(createUser(createID()));


function composeThree(fn1, fn2, fn3) {
  return fn1(fn2(fn3()));
}

const createUserWithId = composeThree(logUser, createUser, createID);


function compose (fn, ...fns) {
  if (fns.length === 0) {
    return fn;
  }

  const composed = compose(...fns);
  return (...args) => fn(composed(...args));
}


const add = x => y => x + y;
const subtract = x => y => x - y;
const divide = x => y => x / y;
const multiply = x => y => x * y;

// Evaluation order bottom to top (right to left)

const strangeFPCalculator = compose(
  add(5),
  subtract(5),
  multiply(2),
  divide(10),
  add(7),
  add(6),
  multiply(4),
);


const pipe = (...args) => compose(...args.reverse());

// Evaluation order top to bottom (left to right)

const strangeFPCalculator2 = pipe(
  add(5),
  subtract(5),
  multiply(2),
  divide(10),
  add(7),
  add(6),
  multiply(4),
);


