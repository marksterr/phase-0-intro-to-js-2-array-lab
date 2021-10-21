// Write your solution here!

let cats = ['Milo', 'Otis', 'Garfield'];

function destructivelyAppendCat(name) {
  cats.push(name);
}

function destructivelyPrependCat(name) {
  cats.unshift(name);
}

function destructivelyRemoveLastCat() {
  cats.pop();
}

function destructivelyRemoveFirstCat() {
  cats.shift();
}

function appendCat(name) {
  let result = [...cats];
  result.push(name);
  return result;
}

function prependCat(name) {
  let result = [...cats];
  result.unshift(name);
  return result;
}

function removeLastCat() {
  let result = [...cats];
  result.pop();
  return result;
}

function removeFirstCat() {
  let result = [...cats];
  result.shift();
  return result;
}