function palindrome(str) {
  const cleanData = str.toLowerCase().replace(/[\W_]/g, '').split('').reverse().join('')
  return cleanData === str.toLowerCase().replace(/[\W_]/g, '') ? true : false
}

palindrome("eye");
palindrome("not a palindrome") 
palindrome("nope") 
palindrome("almostomla") 
palindrome("1 eye for of 1 eye.") 
palindrome("five|\_/|four") 
palindrome("race car")


function rentalCarCost(d: number): number {
  if (d >= 7) return d * 10;
  if (d >= 3) return d * 20
  return d * 40;
  
}

rentalCarCost(3);
rentalCarCost(4);
rentalCarCost(5);
rentalCarCost(6)

function invert(array: number[]): number[] {
  return array.reduce((acc: number[], num:number) => {
    return num < 0 ? acc.concat( num * -1) : acc.concat( num * -1)
  }, [])
}

invert([1,2,3,4,5]) //, [-1,-2,-3,-4,-5]);
invert([1,-2,3,-4,5]) //, [-1,2,-3,4,-5]);
invert([]) //, []);
invert([0])//, [-0]);

function evenOrOdd(n:number):string {
  return n % 2 === 0 ? "Even" : "Odd";
}

function doubleChar(str: string): string{
  // Your code here
  return str.split('').map((l) => l.repeat(2)).join('')
}

doubleChar("abcd")//, "aabbccdd");
doubleChar("Adidas") //, "AAddiiddaass");
doubleChar("1337") //, "11333377");
doubleChar("illuminati")//, "iilllluummiinnaattii");
doubleChar("123456") //, "112233445566");
doubleChar("%^&*(") //, "%%^^&&**((");

function positiveSum(arr:number[]):number {
  return arr.reduce((acc:number, n: number) => n > 0 ? acc + n : acc, 0) || 0;
}

positiveSum([1,2,3,4,5]) //,15);
positiveSum([1,-2,3,4,5]) //,13);
positiveSum([]) //,0);
positiveSum([-1,-2,-3,-4,-5]) //,0);
positiveSum([-1,2,3,4,-5]) //,9);


function sumMix(x: any[]): number {
  return x.reduce((acc:number, n: any) => parseInt(n) + acc, 0)
}

sumMix([9, 3, '7', '3']) //, 22);
sumMix(['5', '0', 9, 3, 2, 1, '9', 6, 7]) //, 42); 
sumMix(['3', 6, 6, 0, '5', 8, 5, '6', 2,'0']) //, 41);


function quarterOf(month: number): number {
  // Your code here
  return month <= 3 ? 1 : month <= 6 ? 2 : month <= 9 ? 3 : 4
}

quarterOf(3) //, 1);
quarterOf(8) //, 3);
quarterOf(11) //, 4);

function hoopCount(n: number): string {
  //your code here
  return n <= 9 ? "Keep at it until you get it" : "Great, now move on to tricks"
}

hoopCount(6) //, "Keep at it until you get it");
hoopCount(10) //, "Great, now move on to tricks");
hoopCount(22) //, "Great, now move on to tricks");



function getGrade(a: number, b: number, c: number): string {
  const score: number = (a + b + c) / 3
  return score < 60 ? 'F' : score < 70 ? 'D' : score < 80 ? 'C' : score < 90 ? 'B' : 'A'
}


getGrade(95, 90, 93)//, 'A'));
getGrade(84, 79, 85)//, 'B'));
getGrade(60, 82, 76)//, 'C'));
getGrade(58, 62, 70)//, 'D'));
getGrade(58, 59, 60)//, 'F'));


function bmi(weight: number, height: number): string {
  const bmi = (weight / (height * height))
  const fixedNumber = Number(bmi.toFixed(2))
   return fixedNumber <= 18.5 ? 'Underweight': fixedNumber <= 25 ? 'Normal' : fixedNumber <= 30 ? 'Overweight' : 'Obese'
}

bmi(82, 1.80) //, "Normal");


function updateLight(current: string): string {
  // your code here
  return current === 'green' ? 'yellow' : current === 'yellow'? 'red' : 'green'
}

updateLight("green")//, "yellow");
updateLight("yellow") //, "red");
updateLight("red") //, "green");


const otherAngle = (a: number, b: number): number => {
  return 180 - (a+b);
}

otherAngle(30, 60) //, 90);
otherAngle(60, 60) //, 60);
otherAngle(43, 78) //, 59);
otherAngle(10, 20) //, 150);


function smash (words: string[]): string {
   return words.join(' ')
};

smash(["hello", "world"]) //, "hello world");
smash(["hello", "amazing", "world"]) //, "hello amazing world");
smash(["this", "is", "a", "really", "long", "sentence"]) //, "this is a really long sentence")


function lovefunc(flower1: number, flower2: number): boolean {
    // Do we love each other?
  if( flower1 === 0 && flower2 === 0){
    return false
  }
  return flower1 % 2 === 0 && flower2 % 2 !== 0 ? true : flower1 % 2 !== 0 && flower2 % 2 === 0 ? true : false
}

lovefunc(1, 4);
lovefunc(2, 2);
lovefunc(0, 1);
lovefunc(0, 0);

 function findShort(s: string): number {
  return Math.min(...s.split(' ').reduce((w : number[], c:string) => w.concat(c.length), []))
}


findShort("bitcoin take over the world maybe who knows perhaps")// , 3);
findShort("turns out random test cases are easier than writing out basic ones") //, 3); 
findShort("lets talk about javascript the best language") //, 3); 
findShort("i want to travel the world writing code one day") //, 1); 
findShort("Lets all go on holiday somewhere very cold") //, 2);
findShort("Let's travel abroad shall we") //, 2);


function humanYearsCatYearsDogYears(humanYears: number): [number, number, number] {
  const catYears:number = humanYears > 2 ? 24 + (humanYears - 2) * 4 : humanYears === 2 ? 24 : 15
  const dogYears:number = humanYears > 2 ? 24 + (humanYears - 2) * 5 : humanYears === 2 ? 24 : 15
  return [humanYears,catYears,dogYears];
}

humanYearsCatYearsDogYears(1) //, [1,15,15]);
humanYearsCatYearsDogYears(10) //, [10,56,64]);
humanYearsCatYearsDogYears(2) //, [2,24,24]);

function countSheep(num: number): string {
  return Array.from({ length: num}, (_, idx) => idx).reduce((acc :string[], n) => acc.concat(`${n +1} sheep...`), []).join('')
}

countSheep(0) //, '');
countSheep(1) //, '1 sheep...');
countSheep(2) //, '1 sheep...2 sheep...');
countSheep(3) //, '1 sheep...2 sheep...3 sheep...');

function solution(str: string): string {
  if (str.length < 1) return ''
  return str.split('').reduce((acc:string[], l:string) => acc.concat(l), []).reverse().join(''); // reverse this!
}

solution('world') //, 'dlrow');
solution('hello') //, 'olleh');
solution('') //, '');
solution('h') //, 'h');

const testEven = (n : number) : boolean => {
  // your awesome code goes here
  return n % 2 === 0
}
testEven(0) //, true, "testEven for 0");
testEven(0.5) //, false, "testEven for 0.5");
testEven(1) //, false, "testEven for 1");
testEven(2)//, true, "testEven for 2");
testEven(-4)//, true, "testEven for 2");
testEven(15)//, false, "testEven for 15");
testEven(20)//, true, "testEven for 20");
testEven(220)//, true, "testEven for 220");
testEven(222222221)//, false, "testEven for 222222221");
testEven(500000000000)//, true, "testEven for 500000000000");

function SeriesSum(n:number):string {
  let sum = 1
  let counter = 4
  if( n< 1){
    return '0.00'
  }
  for(let i = 1; i < n; i++){
    sum += (1/counter)
    counter += 3
  }
  return sum.toFixed(2)
}

SeriesSum(1)//, "1.00");
SeriesSum(2)//, "1.25");
SeriesSum(3)//, "1.39");
SeriesSum(4)//, "1.49");


function betterThanAverage(classPoints: number[], yourPoints: number) : boolean {
  return yourPoints >= classPoints.reduce((total, score) => total += score, 0) / classPoints.length 
}

betterThanAverage([2, 3] , 5);
betterThanAverage([100, 40, 34, 57, 29, 72, 57, 88], 75);
betterThanAverage([12, 23, 34, 45, 56, 67, 78, 89, 90], 69);
betterThanAverage([41, 75, 72, 56, 80, 82, 81, 33], 50);
betterThanAverage([29, 55, 74, 60, 11, 90, 67, 28], 21);
betterThanAverage([4, 43, 17, 9, 7, 2, 31, 60, 87, 32, 59, 14, 11, 32, 51, 97, 64, 62, 6, 6, 43, 21, 53, 40, 2, 18, 48, 58, 7, 36, 20, 16, 60, 38, 65, 49, 57, 74, 43, 33, 51, 76, 97, 3, 26, 13, 80, 46, 20, 84], 40)

function numberToString(num: number): string {
  // Return a string of the number here!
  return num.toString()
}

numberToString(67) //).to.equal('67');

function cockroachSpeed(s: number): number {
  // console.log((s * 27.777778))
  return Math.floor((s * 27.777778));
}

cockroachSpeed(1.08) //, 30);
cockroachSpeed(1.09) //, 30);
cockroachSpeed(0)//, 0);


function binaryArrayToNumber(arr: number[]): number{
  return parseInt(arr.join(''), 2)
};

binaryArrayToNumber([0,0,0,1]) //, 1);
binaryArrayToNumber([0,0,1,0]) //, 2);
binaryArrayToNumber([1,1,1,1]) //, 15);
binaryArrayToNumber([0,1,1,0]) //, 6);


function toAlternatingCase(s: string): string {
  // return "someThingHere";
  
  return s.split('').reduce((acc:string[], l) => l == l.toUpperCase() ? acc.concat(l.toLowerCase()) : l == l.toLowerCase() ?  acc.concat(l.toUpperCase()) : acc.concat(l) , []).join('')
}


toAlternatingCase("hello world")//, "HELLO WORLD");
toAlternatingCase("HeLLo WoRLD")//, "hEllO wOrld");
toAlternatingCase("1a2b3c4d5e")//, "1A2B3C4D5E");


const fakeBin = (x:string):string => {
  // your code here
  return x.split('').reduce((acc:string[], l: string ) => parseInt(l) < 5 ? acc.concat('0') :acc.concat('1') , []).join('')
}



fakeBin('45385593107843568') //, '01011110001100111');
fakeBin('509321967506747')// , '101000111101101'); 
fakeBin('366058562030849490134388085')//, '011011110000101010000011011');


function grow(arr: number[]): number {
  // your code here
  return arr.reduce((acc:number, n:number) => acc *= n , 1)
}


grow([1, 2, 3])//, 6));
grow([4, 1, 1, 1, 4])//, 16));
grow([2, 2, 2, 2, 2, 2])//, 64));


function firstNonConsecutive (arr: number[]) : null | number {
  for (let i = 1; i < arr.length; i++) {
    console.log(arr[i - 1] + 1)
    if (arr[i] !== arr[i - 1] + 1) {
      return arr[i];
    }
  }
  return null;
}

firstNonConsecutive([1,2,3,4,6,7,8]) // 6;
firstNonConsecutive([4,5,6,7,8])
