
// Make filter, map, reduce composable again
const arrayMap = fn => arr => arr.map(fn);
const arrayFilter = fn => arr => arr.filter(fn);
const arrayReduce = fn => arr => arr.reduce(fn);

class Maybe {
  of (value) {
    this.$value = value;
  }

  map(fn) {
    if (this.$value) { 
      return Maybe.of(fn(this.value));
    }

    return this;
  }

  toValue() {
    return this.$value ? `Just(${this.$value})` : 'Nothing';
  }
}

// These are all the same thing
const arrayMap = fn => arr => arr.map(fn);
const maybeMap = fn => maybe => maybe.map(fn);
const container = fn => container => container.map(fn);

// General purpose
const map = fn => functor => functor.map(fn);

const doThings = compose(
  
);
