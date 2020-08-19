/*
 * ----------------------
 * Concat
 * Joins two or more arrays, and returns a copy of the joined arrays
 * ----------------------
 */
const arrayConcat = (arr, arr2) => {
    return arr.concat(arr2);
};
/*
 * Response
 * [ 1, 2, 3, 4 ]
 */
console.log(arrayConcat([1, 2], [3, 4]));

/*
 * ----------------------
 * Entries
 * Returns a key/value pair Array Iteration Object
 * ----------------------
 */
const arrayEntires = (arr) => {
    return arr.entries();
};
/*
 * Response
 * [ 0, 'one' ]
 * [ 1, 'two' ]
 * [ 2, 'four' ]
 * [ 3, 'seven' ]
 */
var r = arrayEntires(['one', 'two', 'four', 'seven']);
for (const x of r) {
    console.log(x);
}

/*
 * ----------------------
 * Every
 * Checks if every element in an array pass a test
 * ----------------------
 */
const arrayEvery = (arr) => {
    return arr.every((x) => x > 0);
};

/*
 * Response
 * Are greater than 0? True
 */
console.log(arrayEvery([1, 2, 3, 4, 5, 6, 7, 8, 9]));

/*
 * ----------------------
 * Fill
 * Fill the elements in an array with a static value
 * ----------------------
 */
const arrayFill = (arr) => {
    return arr.fill(0);
};

/*
 * Response
 * [ 0, 0, 0 ]
 */
console.log(arrayFill([1, 2, 3]));

/*
 * ----------------------
 * Filter
 * Creates a new array with every element in an array that pass a test
 * ----------------------
 */
const arrayFilter = (arr) => {
    return arr.filter((x) => x % 2 === 0);
};

/*
 * Response
 * filter pairs [ 2, 4, 6, 8 ]
 */
console.log(arrayFilter([1, 2, 3, 4, 5, 6, 7, 8, 9]));

/*
 * ----------------------
 * Find
 * Returns the value of the first element in an array that pass a test
 * ----------------------
 */
const arrayFind = (arr) => {
    return arr.find((x) => x % 2 !== 0);
};

/*
 * Response
 * get the first odd => 1
 */
console.log(arrayFind([1, 2, 3, 4, 5, 6, 7, 8, 9]));

/*
 * ----------------------
 * ForEach
 * Calls a function for each array element
 * ----------------------
 */
const arrayForEach = (arr) => {
    return arr.forEach((x) => console.log(x));
};

/*
 * Response
 * print all elements => 1 2 3
 */
console.log(arrayForEach([1, 2, 3]));

/*
 * ----------------------
 * From
 * Creates an array from an object
 * ----------------------
 */
const arrayFrom = (obj) => {
    return Array.from(obj);
};

/*
 * Response
 * [ 'a', 'b', 'c', 'd', 'e' ]
 */
console.log(arrayFrom('abcde'));

/*
 * ----------------------
 * Join
 * Joins all elements of an array into a string
 * ----------------------
 */
const arrayJoin = (arr) => {
    return arr.join(',');
};

/*
 * Response
 * 1,2,3,4
 */
console.log(arrayJoin([1, 2, 3, 4]));

/*
 * ----------------------
 * Map
 * Creates a new array with the result of calling a function for each array element
 * ----------------------
 */
const arrayMap = (arr) => {
    return arr.map((x) => x + 1);
};

/*
 * Response
 * Add +1 to each element [ 2, 3, 7, 9 ]
 */
console.log(arrayMap([1, 2, 6, 8]));

/*
 * ----------------------
 * Pop
 * Removes the last element of an array, and returns that element
 * ----------------------
 */
const arrayPop = (arr) => {
    return arr.pop();
};

/*
 * Response
 * 8
 */
console.log(arrayPop([1, 2, 6, 8]));

/*
 * ----------------------
 * Push
 * Adds new elements to the end of an array, and returns the new length
 * ----------------------
 */
const arrayPush = (arr, ele) => {
    arr.push(ele);
    return arr;
};

/*
 * Response
 * arr = [1, 2, 6, 7, 8]
 */
console.log(arrayPush([1, 2, 6, 7], 8));

/*
 * ----------------------
 * Shift
 * Removes the first element of an array, and returns that element
 * ----------------------
 */
const arrayShift = (arr) => {
    arr.shift();
    return arr;
};

/*
 * Response
 * arr = [2, 6, 7]
 */
console.log(arrayShift([1, 2, 6, 7], 8));

/*
 * ----------------------
 * Slice
 * Selects a part of an array, and returns the new array
 * ----------------------
 */
const arraySlice = (arr) => {
    return arr.slice(0, 2);
};

/*
 * Response
 * get the fisrts two elements of the array
 * [ 1, 2 ]
 */
console.log(arraySlice([1, 2, 6, 7]));

/*
 * ----------------------
 * Some
 * Checks if any of the elements in an array pass a test
 * ----------------------
 */
const arraySome = (arr) => {
    return arr.some((x) => x % 2 == 0);
};

/*
 * Response
 * is there some pair? True
 */
console.log(arraySome([1, 2, 6, 7]));

/*
 * ----------------------
 * Sort
 * Sorts the elements of an array
 * ----------------------
 */
const arraySort = (arr) => {
    return arr.sort();
};

/*
 * Response
 * [ 1, 2, 4, 7, 9 ]
 */
console.log(arraySort([1, 9, 2, 7, 4]));

/*
 * ----------------------
 * Splice
 * Adds/Removes elements from an array
 * 0 no remove
 * 1 removes
 * ----------------------
 */
const arraySpliceNoRemove = (arr, ele) => {
    arr.splice(2, 0, ele);
    return arr;
};

const arraySpliceRemove = (arr, ele) => {
    arr.splice(2, 1, ele);
    return arr;
};

/*
 * Response
 * no remove [ 1, 2, 5, 3, 4 ]
 * remove [ 1, 2, 5, 4 ]
 */
console.log(arraySpliceNoRemove([1, 2, 3, 4], 5));
console.log(arraySpliceRemove([1, 2, 3, 4], 5));

/*
 * ----------------------
 * Unshift
 * Adds new elements to the beginning of an array, and returns the new length
 * ----------------------
 */
const arrayUnshift = (arr, ele) => {
    arr.unshift(ele);
    return arr;
};

/*
 * Response
 * [ 9, 1, 2, 3, 4 ]
 */
console.log(arrayUnshift([1, 2, 3, 4], 9));
