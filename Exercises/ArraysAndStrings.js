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
function checkPermutation(str1, str2) {
    var permutation = new Map();
    var response = true;
    if (str1.length !== str2.length) return false;
    for (let s of str1) {
        permutation.set(s, s);
    }
    for (let p of str2) {
        if (!permutation.has(p)) return fase;
    }
    return true;
}

console.log('Is permutation? ', checkPermutation('roma', 'amor'));

function urlify(stringToUrl) {
    var urlArray = stringToUrl.trim().split(' ');
    var space = '%20%';
    var response = '';
    for (let u of urlArray) {
        response += u + space;
    }
    return response.substr(0, response.length - 4);
}

console.log('URLify this string please: ', urlify('esta es una prueba   '));
