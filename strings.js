// Creating a strings

const string = new String("Hello World"); // Object wrapper for string ==> to access the value use valueof()
const num = new Number(0); // Object wrapper for number ==> to access the value use valueof()
const str = "Hello World"; // primitive string
const num1 = 0; // primitive number
// console.log(string.valueOf(), num.valueOf(), str, num1)

/////* ---- We can declare strings in 3 ways ----  *//////

const doubleQuoteString = "Double quoted string";
const singleQuoteString = 'Single Quooted string';
const backticks = ` we can 
 write the strings
 in multiple lines
 using backtickes 
`;
// console.log(backticks);

// --- Length of the string -----

const name1 = "Venkata Ramana"

// console.log(name.length);

// ---- Access Characters inside a string ------

// console.log(name[1]) // index is start from zero (0)  so if you want to access any character then 0 to length - 1
// console.log(name[6]) // since length of the string is 6 and its start with zero it returns undefined

// console.log(name1.charAt(1)) // this also gives the character based on index

// console.log(name1.charAt(10)) it returns empty string ("")

// Access ASCII value 

// console.log(name1.charCodeAt(0)) 

// --- how to modify strings ---

// let modifiedString = name1.replace("a", "-")

// Explanation: - replace just replaces the first instances of the character

// let replacedString = name1.replaceAll("a", "-")

// Explanation: - replace all  replaces the all of the instances of that character

// console.log(modifiedString)

// console.log(replacedString)

// -------- Concat ----------

