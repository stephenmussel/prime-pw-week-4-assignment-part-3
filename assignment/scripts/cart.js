console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

const basket = []; // the basket
const maxItems = 5; // when basket is full

function addItem (item) {
  basket.push(item) // puts the item in the basket
  if (basket.length <= maxItems) { // use isFull to prevent more than maxItems from being added to basket
    return true; // indicates item was added to basket
  }
  else {
    console.log('Basket is full!');
    while (basket.length > 5){ // removes item if basket has more than 5 items
      basket.pop();
    }
    return false;
  }
}

function listItem (array) {
  for (let item of basket) {   // loop to list each item on a new line
    console.log(`Item in the basket: ${item}`);
  }
}

function empty(array) {
  while (basket.length > 0) { // loops list to remove last item until basket empty
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

function removeItem (item) {
  // return the item removed or null if the item was not found
  let itemRemoved = basket.indexOf(item); // this is the item index of what you're looking for
  if (itemRemoved > -1) { // if the item/index is found, then remove it. -1 means element does not exist in array
    basket.splice (itemRemoved, 1); // removes element. starts at itemRemoved location and removes one element
    return basket;
  }
  return null; // item not found
}

console.log('***** TESTING function addItem *****');
console.log(`Basket has: ${basket}`); // initial contents of basket should be empty
console.log(`Adding mozzarella (expect true), ${addItem('mozzarella')}`); // adding mozzarella and outputs true if added to basket
console.log(`Adding salmon (expect true), ${addItem('salmon')}`); // adding salmon and outputs true if added to basket
console.log(`Adding cucumber (expect true), ${addItem('cucumber')}`); // adding cucumber and outputs true if added to basket
console.log(`Basket has: ${basket}`); // shows basket with mozzarella

console.log('***** TESTING function listItem *****');
console.log(listItem()); // lists items on separate line but outputs another line as undefined!?

console.log('***** TESTING function empty *****');
console.log(empty()); // basket empty

console.log('***** TESTING function isFull *****');
console.log(isFull()); // basket is not full

console.log('***** TESTING function isFull and maxItems *****');
console.log(listItem()); // lists items in basket
console.log(`This is what's in the basket now: ${basket}`); // basket is empty

addItem('cherries'); // add to basket
addItem('mangos'); // add to basket
addItem('peaches'); // add to basket
addItem('yogurt'); // add to basket
addItem('ice cream'); // add to basket. basket is full
addItem('chips'); // add to basket.

console.log(`Now the basket has: ${basket}`); // shows basket with fruit and more stuff
console.log(`Is the basket full?: ${isFull()}`); // shows basket with fruit and more stuff

console.log('***** TESTING function removeItem *****');
console.log(`This is what's in the basket now: ${basket}`); // checking to see what's in the basket. it's full
console.log(`This what's in the basket now: ${basket}. If there are peaches, remove them: ${removeItem('peaches')}.`); // removing existing item from basket
console.log(`This what's in the basket now: ${basket}. If there are apples, remove them: ${removeItem('apples')}.`); // item not found and returns null
