// Create some arrays
const numbers = [52, 36, 47, 85, 96];
const numbers2 = new Array(22, 23, 34, 54, 65, 43);
const fruit = ['Apple', 'Banana', 'Orange', 'Pear'];
const mixed = [22, 'Hello', true, undefined, null, {a:1, b:1}, new Date()];

let val;

// Get array length
val = numbers.length;
// Check if is array
val = Array.isArray(fruit);
// Get single value
val = numbers[3];
val = numbers[0];
// Insert into array
numbers[2] = 100
// find index of value
val = numbers.indexOf(85)

// // MUTATING ARRAY
// // Add to end
// numbers.push(250);
// // Add to front
// numbers.unshift(120)
// // Take off from end
// numbers.pop();
// // Take off from front
// numbers.shift();
// // Splice values
// numbers.splice(1,3);
// // Reverse
// numbers.reverse();

// Concat array
val = numbers.concat(numbers2);

// Sorting arrays
val = fruit.sort();
val = numbers.sort();

// Use the compare function
val = numbers.sort(function(x, y){
  return x - y;
})

// Reverse sort
val = numbers.sort(function(x, y){
  return y - x;
})

// Find
function over50(num){
  return num > 50;
}

val = numbers.find(over50)


console.log(numbers)
console.log(val)