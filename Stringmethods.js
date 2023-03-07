let string = 'hello how are you? you are not getting old in some sitution';
// Note
// All string methods return a new string. They don't modify the original string.

// Formally said:

// Strings are immutable: Strings cannot be changed, only replaced.
//string length methods 
console.log(string.length);

//There are 3 methods for extracting a part of a string:

//string slice slice(start,end)
let part = string.slice(5,20)
console.log(part);
part =  string.slice(20)
console.log(part);
part = string.slice(-20)
console.log(part);
//substring and substr is similar to slice method

//The replace() method replaces a specified value with another value in a string:
part = string.replace('old','young');
console.log(part);
//To replace all matches, use a regular expression with a /g flag (global match):

part= string.replaceAll(/are/g,'we')
console.log(part);

//toLowerCase toUpperCase

part = (string.slice(10)).toUpperCase();
console.log(part);
part = (string.slice(10)).toLowerCase();
console.log(part);

//concat() joins two or more string
let text1 = 'hello are';
let text2 = 'you make love';
let text3 = text1.concat('*!',text2);
console.log(text3);

//he trim() method removes whitespace from both sides of a string:
part =  '              jkfvh      '
console.log(part.trim());
//The trimStart() method works like trim(), but removes whitespace only from the start of a string.
//The trimEnd() method works like trim(), but removes whitespace only from the end of a string.

//The padStart() method pads a string with another string:
let text4 = '40393';
console.log(text4.padEnd(9,'x'));
console.log(text4.padStart(9,'x'));

//Extracting String Characters
//charAt(position)
console.log(text2.charAt(5));
//The charCodeAt() method returns the unicode of the character at a specified index in a string:
console.log(text2.charCodeAt(5));
//property accsecc
console.log(text3[9]);