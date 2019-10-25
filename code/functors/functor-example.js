
class Container {
  constructor (value) {
    this.$value = value;
  }

  static of(value) {
    return new Container(value);
  }

  map(fn) {
    const nextValue = fn(this.$value)
    return Container.of(nextValue);
  }
}

const doubler = x => x * 2;

const myVal = Container.of(10);
const myArray = Array.of(10);

const doubledVal = myVal.map(doubler); // -> Container(20)
const doubledArray = myArray.map(doubler); // -> Array(20)



