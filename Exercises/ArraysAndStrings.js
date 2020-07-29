//is unique: implement an algorithm to determine if a String has all unique characters.
// O(N)
function isUnique(stringParam) {
    var hash = new Set();
    var response = true;
    for (let s of stringParam) {
        if (!hash.has(s)) {
            hash.add(s);
        } else {
            response = false;
        }
    }
    return response;
}

console.log('The String is unique? ', isUnique('qwert'));

//Given tow strings, write a method to decide if one is a permutation of the other
//O(N)
function checkPermutation(stringParam1, stringParam2) {
    var permutation = new Map();
    var response = true;
    if (stringParam1.length !== stringParam2.length) return false;
    for (let s of stringParam1) {
        permutation.set(s, s);
    }
    for (let p of stringParam2) {
        if (!permutation.has(p)) return fase;
    }
    return true;
}

console.log('Is permutation? ', checkPermutation('roma', 'amor'));

//Write a method to replace all spaces in a string with '%20%'
// O(N)
function urlify(stringToUrl) {
    var urlArray = stringToUrl.trim().split(' ');
    var space = '%20';
    var response = '';
    for (let u of urlArray) {
        response += u + space;
    }
    return response.substr(0, response.length - 3);
}

console.log(
    'URLify this string please: ',
    urlify('lets try this URLify thing   ')
);

const isPalindromePermutation = (stringToTest) => {
    var permutation = new Map(),
        palindrome = 0;
    for (let p of stringToTest.toLowerCase()) {
        if (!permutation.has(p)) {
            permutation.set(p, 1);
        } else permutation.set(p, permutation.get(p) + 1);
    }
    for (let pal of permutation) {
        if (pal[1] % 2 == 1) {
            palindrome++;
        } else palindrome--;
    }
    return palindrome <= 1;
};

console.log('PalindromePermutation: ', isPalindromePermutation('roma amor'));
