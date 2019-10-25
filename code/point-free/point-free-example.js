// Equational Reasoning

// Get genres from api
function getGenres(onResponse) {
  apiService.get('/genres').then(function(response) {
    onResponse(response);
  });
}

// Get genres from api
function getGenres(onResponse) {
  apiService.get('/genres').then(onResponse);
}

function getName(user) {
  return user.name;
}

// This will become more useful later
function prop(key, object) {
  return object[key];
}

const getName = user => prop('name', user);

// Curry
function prop(key) {
  return object => object[key];
}

// Equational Reasoning
const getName = user => prop('name')(user);
const getName = prop('name');

// getName now has no reference to it's argument

const users = [{ name: 'matt' }, { name: 'chris' }, { name: 'alan' }];

const names = users.map(user => getName(user));

// Point free
const names = users.map(getName);
const names = users.map(prop('name'));
