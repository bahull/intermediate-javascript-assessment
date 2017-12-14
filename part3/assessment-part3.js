// INTERMEDIATE JAVASCRIPT ASSESSMENT
// PART 3

// *************
// * PROBLEM 1 *
// *************

// For this question, you are asked to make a function called 'callBinding'.
// This function will take in 3 parameters:
// magicAnimals (Array), updateAnimal (Function), id (Number).
// Find the animal that matches the given id, then call the update function
// with the animal as the context, and 'Trogdor' as a parameter.
// return the result of your updateAnimal invocation

// CODE HERE...
const callBinding = (magicAnimals, updateAnimal, id) => {
  let currentAnimal = magicAnimals.filter(curr => curr.id === id);
  updateAnimal.bind(currentAnimal);
  return updateAnimal('Trogdor');
};

// *************
// * PROBLEM 2 *
// *************

// For this question, you are asked to make a function called 'applyBinding'.
// This function will take in 3 parameters:
// magicAnimals (Array), updateAnimal (Function), id (Number).
// Find the animal that matches the given id, then call the function
// with the context of the animal, and the array ['being majestic', 'eating rainbows'] as a parameter.
// return the result of your updateAnimal invocation

// CODE HERE...
const applyBinding = (magicAnimals, updateAnimal, id) => {
  let newArray = ['being majestic', 'eating rainbows'];
  let currentAnimal = magicAnimals.filter(curr => curr.id === id);
  return updateAnimal.apply(currentAnimal[0], [
    'being majestic',
    'eating rainbows'
  ]);
};

// *************
// * PROBLEM 3 *
// *************

// For this question, you are asked to make a function called 'promiseMe'.
// This function will take in 1 parameter:
// $q (Custom promise object).
// NOTE: $q is an injected library, that works like angular's $q object.
// promiseMe will be invoked by a test and the test will expect a promise back.
// In your function, create a custom promise, then create a timeout with a duration of 20 ms.
// The timeout function should update the variable foo (seen below) to equal 'bar'.
// After the timeout is completed, the promise should be resolved with the new updated foo variable.
// NOTE: Manually invoking your function here will alter the 'foo' variable before tests run, causing them to fail.

var foo;

// CODE HERE...
const promiseMe = $q => {
  var defer = $q.defer();
  console.log('hit 1');
  setTimeout(function() {
    defer.resolve((foo = 'bar'));
  }, 20);
  return defer.promise;
};

// *************
// * PROBLEM 4 *
// *************

// For this question, you are asked to make a function called 'emailList'.
// This function will take in 2 parameters:
// $q (Custom promise object), $http (Custom request function).
// NOTE: $http is a function created to simulate the angular $http.
// Set up your custom promise, then make a GET request using $http to '/api/users'.
// Make an array of emails (array of strings) from the returned data (You will need to console log or debug to figure this out),
// and then resolve the array as you complete your promise.

// CODE HERE...
function emailList($q, $http) {
  var defer = $q.defer();
  var newArr = [];
  $http({
    method: 'GET',
    url: '/api/users'
  }).then(function(response) {
    for (var i = 0; i < response.data.length; i++) {
      newArr.push(response.data[i].email);
    }
    defer.resolve(newArr);
  });
  return defer.promise;
}
