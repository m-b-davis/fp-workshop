
/**
 * Create a pointed functor Maybe which can map over values
 * which may or may not be defined
 * 
 * It will evaluate to either Just(value) or None, depending on its contents
 */

class Maybe {
  toValue() {
    return this.$value ? `Just(${this.$value})` : 'Nothing';
  }
}

const doubler = x => x * 2;
const add = x => y => x + y;

Maybe.of(10).map(doubler) // Just(20);
Maybe.of(null).map(doubler) // None

const possiblyNullValue = Math.random() < 0.5 ? null : 10;
Maybe.of(possiblyNullValue).map(doubler).map(add(5)); // Will either be Just(25) or None

