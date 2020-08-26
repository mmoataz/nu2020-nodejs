var arr = [1,3,5,60];
// Checking for an array by using isArray and constructor
console.log(Array.isArray(arr));
console.log(arr.constructor===Array);
// length of an array
console.log(arr.length);
arr.length=2;
console.log(arr);
// Converting array to string => toString function and join
let x = arr.toString();
let y = arr.toLocaleString();
let z = arr.join(); // join() can take any parameter that make separation between array elements ex: join ("/")
console.log(x);
console.log(y);
console.log(z);
// Adding elements to array
var friends = ["Mohamed","Ahmed", "Omar", "Mohab","Amr"];
console.log(friends);
friends.push("Hussien"); // Addning to the end of the array.
friends[friends.length]="Zeyad"; // Adding to the end of the array also.
console.log(friends);
friends.unshift("Shawky"); // Adding to the beginning of the array.
console.log(friends);
let x = friends.pop(); // Removing element from the end of the array and returning it.
console.log(x);
console.log(friends.toString());
friends.shift(); // Removing element from the beginning of the array and returning it.
console.log(friends.toString());
friends.splice(2,0,"Hussam", "Naggar"); // adding elements to a certain position
console.log(friends.toString());
friends.splice(2,2); // Also, splice can be used to remove elements in certain position and can remove and add at the same time
console.log(friends.toString());
// Array sorting and reversing
friends.sort(); // Sorting in ascending order
console.log(friends.toString());
friends.reverse(); // Reversing the array
console.log(friends.toString());
//Array slice and concatenation
var friends2 = ["sara","maryam", "hydaa"];
var allfriends = friends.concat(friends2); // concatenation of two arrays and we may concatenate more than two.
console.log(allfriends.toString());
var part = allfriends.slice(1,4); // taking elements from index 1 to 3.
console.log(part.toString());
var part2 = allfriends.slice(-6,-1); // it works with negative indexing
console.log(part2.toString());
// Searching for an element in an array => indexOf() & lastIndexOf()
var f = ["Mohab","Amr", "Hussam", "Mohamed","Raafat","Omar", "Amir"];
var special = f.indexOf("Amr"); // Searching from the first index to the end
console.log(special);
console.log(f[special]);
var f2 = f.lastIndexOf("Omar"); // Searching from the last index to the first index
console.log(f2);
console.log(f[f2]);
var special1 = f.indexOf("Amr",2);// Searching from index 2 to the end
console.log(special1);
console.log(f[special1]);
var f22 = f.lastIndexOf("Omar",4); // Searching from index 4 to the first index in the array
console.log(f22);
console.log(f[f22]);
// special 1 and f22 gives -1 and undefined because they start searching after the index




