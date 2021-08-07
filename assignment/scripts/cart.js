console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

const basket = []; // the basket

function addItem (item) {
  basket.push(item) // puts the item in the basket
  return true; // indicates item was added to basket
}

function listItem (array) {
  // loop to list each item on a new line
  for (let i = 0; i <basket.length; i++) {
    console.log(basket[i]);
  }
}


/*
function empty(array) {
  // resets basket to empty array
}
*/

console.log('***** TESTING function addItem *****'); // header
console.log(`Basket has: ${basket}`); // initial contents of basket should be empty
console.log(`Adding mozzarella (expect true), ${addItem('mozzarella')}`); // adding mozzarella and outputs true if added to basket
console.log(`Adding salmon (expect true), ${addItem('salmon')}`); // adding salmon and outputs true if added to basket
console.log(`Adding cucumber (expect true), ${addItem('cucumber')}`); // adding cucumber and outputs true if added to basket
console.log(`Basket has: ${basket}`); // shows basket with mozzarella

console.log('***** TESTING function listItem *****'); // header
console.log(listItem());
