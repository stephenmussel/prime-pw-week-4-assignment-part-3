console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

const basket = []; // the basket
let basketEmpty = true;
const maxItems = 5;

function addItem (item) {
  basket.push(item) // puts the item in the basket
  return true; // indicates item was added to basket
}

function listItem (array) {
  for (let item of basket) {   // loop to list each item on a new line
  console.log(`Item in the basket: ${item}`);
  }
}

function empty(array) {
  while (basket.length > 0) {
    basket.pop();
  }
}

function isFull() {
  if (basket.length < maxItems) { // if basket contains less than max number of items
    return false;
  }
  else { // basket contains equal or more than maxItems
    return true;
  }
}

console.log('***** TESTING function addItem *****'); // header
console.log(`Basket has: ${basket}`); // initial contents of basket should be empty
console.log(`Adding mozzarella (expect true), ${addItem('mozzarella')}`); // adding mozzarella and outputs true if added to basket
console.log(`Adding salmon (expect true), ${addItem('salmon')}`); // adding salmon and outputs true if added to basket
console.log(`Adding cucumber (expect true), ${addItem('cucumber')}`); // adding cucumber and outputs true if added to basket
console.log(`Basket has: ${basket}`); // shows basket with mozzarella

console.log('***** TESTING function listItem *****'); // header
console.log(listItem()); // lists items on separate line but outputs another line as undefined!?

console.log('***** TESTING function empty *****'); // header
console.log(empty()); // basket empty

console.log('***** TESTING function full *****'); // header
console.log(isFull()); // basket is not full
