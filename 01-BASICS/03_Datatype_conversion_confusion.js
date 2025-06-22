let score = "100";
console.log(typeof score);
let scoreNumber = Number(score);
console.log(typeof scoreNumber);
console.log(scoreNumber);

console.log("--------------------------------");

let notScore = "100px";
console.log(typeof notScore);
let notScoreNumber = Number(notScore);
console.log(typeof notScoreNumber);
console.log(notScoreNumber); // NaN (Not a Number)


console.log("--------------------------------");

let nullScore = null;
console.log(typeof nullScore);
let nullScoreNumber = Number(nullScore);
console.log(typeof nullScoreNumber);
console.log(nullScoreNumber); // 0 (null is converted to 0)


console.log("--------------------------------");



let undefinedScore;
console.log(typeof undefinedScore);
let undefinedScoreNumber = Number(undefinedScore);
console.log(typeof undefinedScoreNumber);
console.log(undefinedScoreNumber); // NaN (undefined is converted to NaN)


console.log("--------------------------------");


let booleanScore = true;
console.log(typeof booleanScore);
let booleanScoreNumber = Number(booleanScore);
console.log(typeof booleanScoreNumber);
console.log(booleanScoreNumber); // 1 (true is converted to 1)

console.log("--------------------------------");

let unConvertableScore = "Hello";
console.log(typeof unConvertableScore);
let unConvertableScoreNumber = Number(unConvertableScore);
console.log(typeof unConvertableScoreNumber);
console.log(unConvertableScoreNumber); // NaN (unconvertable string is converted to NaN)


console.log("--------------------------------");

let isLoggedIn = ""
console.log(isLoggedIn);
console.log(typeof isLoggedIn);
let boolwithString = Boolean(isLoggedIn);
console.log(boolwithString); // false (empty string is converted to false)


console.log("--------------------------------");

let isLoggedIn2 = "Hello"
console.log(isLoggedIn2);
console.log(typeof isLoggedIn2);
let boolwithString2 = Boolean(isLoggedIn2);
console.log(boolwithString2); // true (non-empty string is converted to true)


/*
Notes:-  for 1=> true, 0=> false similarly for "" => false, "Hello" => true
        
        1. String to Number conversion can lead to NaN if the string is not a valid number.
        2. null is converted to 0, while undefined is converted to NaN.
        3. Boolean conversion of non-empty strings results in true, while empty strings result in false.
         
*/