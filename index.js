import { data } from './exportex.js';

//javascript console API
// console.log('Hello');
// console.warn("this is warning");
// console.error("this is error");

//ways to print in js
// console.log('Hello');
// alert("Warning");
// document.write("this is doc write");
// document.getElementsByTagName('h1')[0].style.background = "red";

// js variables - var keyword is used to declare variables
// var number1 = 34;
// var number2 = 35;
// console.log(number1 + number2);

//datatypes in js
// number
var num1 = 39;
//string - can be in single and double quotes both
var str1 = "This is a string in double quotes";
var str2 = 'This is a string in single quote';
//objects - key value pair type of datatype
var obj = {
    rahul: 22,
    raju: 34,
    shalu: 99
}
//console.log(obj);
//boolean
var a = true;
var b = false;
// console.log(a, b);
//undefined and null
var und = undefined;// the value to this variable is not defined
var und1; //the value to this variable is not defined, it will return undefined as well
var n = null;// the value to this variable is set to null, its not undefined
//arrays - collection of data, can contain one type of data as well as different types of data
var arr1 = [1, 2, 3, 4, 5];
var arr2 = [1, 2, 3, 'shalini', 5];
// console.log(arr1);
// console.log(arr2);

// function in js
// Function in js is used on DRY principle - Do not repeat yourself
function avg(a, b, c) {
    average = (a + b + c) / 3;
    return average;
}
var avg1 = (6 + 7 + 8);
// console.log(avg1);

//foreach loop
// var arr = [1, 2, 3, 4, 5];
// arr.forEach(function (element) {
//     console.log(element);
// });

// console.log(const1);// will throw an error as 'canst1' cant be accessed before it is initialized
const const1 = 1;

// console.log(let1);// will throw an error as 'let1' cant be accessed before it is initialized
let let1 = 2;

// console.log(var1);// will return undefined
var var1 = 3;

//   Array methods   //

var names = ['shalini', 'shalu', 'swati', 'choti'];
// document.getElementById('array-methods').innerHTML=names.length;
// document.getElementById('array-methods').innerHTML+=names.toString();//converts an array to a string of (comma separated) array values
// document.getElementById('array-methods').innerHTML+=names.join(' *');//joins all array elements into a string, but in addition you can specify the separator

// names.pop();//removes the last element from an array
// var popped_name= names.pop();// will return the popped element from the array
// document.getElementById('array-methods').innerHTML=popped_name;

// names.push('Lucky');//adds a new element to an array (at the end)
var arrlength = names.push('Lucky');// returns the length of new array
// console.log(arrlength);
// document.getElementById('array-methods').innerHTML=names.toString();

// names.shift();//removes the first array element and "shifts" all other elements to a lower index
var shifted = names.shift();// returns the value that was "shifted out"
// console.log(shifted);
// document.getElementById('array-methods').innerHTML=names.toString();

// names.unshift('Happy');//adds a new element to an array (at the beginning), and "unshifts" older
var unshifted = names.unshift('Happy');//returns the new array length
// console.log(unshifted);
// document.getElementById('array-methods').innerHTML=names.toString();

//Changing Elements
names[0] = 'vaishali';
// document.getElementById('array-methods').innerHTML=names.toString();

names[names.length] = 'happy';//length property provides an easy way to append a new element to an array
// document.getElementById('array-methods').innerHTML=names.toString();

// Array elements can be deleted using the JavaScript operator delete.
// Using delete leaves undefined holes in the array.
// Use pop() or shift() instead.

var fruits = ["Banana", "Orange", "Apple", "Mango"];
// delete fruits[0];
// document.getElementById('array-methods').innerHTML=fruits.toString();
// document.getElementById('array-methods').innerHTML=fruits[0];//it will return undefined now

const concatenated = names.concat(fruits);//creates a new array by merging (concatenating) existing arrays
// document.getElementById('array-methods').innerHTML=concatenated.toString();

const places = ['Bihar', 'Hyderabad'];
const concatall = names.concat(fruits, places);//concat() can take any number of array arguments
// document.getElementById('array-methods').innerHTML=concatall.toString();

const concatstr = names.concat('suhani', 'saloni');//concat() can take string as array arguments
// document.getElementById('array-methods').innerHTML=concatstr.toString();

// fruits.splice(2, 0, "Lemon", "Kiwi");//used to add new items to an array
// The first parameter (2) defines the position where new elements should be added (spliced in).
// The second parameter (0) defines how many elements should be removed.
// The rest of the parameters ("Lemon" , "Kiwi") define the new elements to be added.
// document.getElementById('array-methods').innerHTML=fruits.toString();
// var spliced = fruits.splice(2, 2, "Lemon", "Kiwi");// returns an array with the deleted items
//2 new fruits entered and 2 fruits removed from fruits[]
// console.log(spliced);

//we can use splice() to remove elements without leaving "holes" in the array
// fruits.splice(0, 1);
//The first parameter (0) defines the position where new elements should be added (spliced in).
// The second parameter (1) defines how many elements should be removed.
// The rest of the parameters are omitted. No new elements will be added.
// document.getElementById('array-methods').innerHTML=fruits.toString();

// const fruitssliced1 = fruits.slice(2);//slices out a piece of an array into a new array
// The slice() method creates a new array.
// The slice() method does not remove any elements from the source array.
//"Apple", "Mango" will be sliced out in fruitssliced1
// document.getElementById('array-methods').innerHTML=fruitssliced1.toString();
// document.getElementById('array-methods').innerHTML=fruits.toString();//it will remain same, no fruits deleted from here

// The slice() method can take two arguments like slice(1, 3).
// The method then selects elements from the start argument, and up to (but not including) the end argument.
// const fruitssliced2 = fruits.slice(0, 2);
// document.getElementById('array-methods').innerHTML=fruitssliced2.toString();
// document.getElementById("array-methods").innerHTML = fruits;//it will automatically print comma seperated array, same work as tostring()

// fruits.sort();//sorts an array alphabetically
//it works well for string only, not for numbers
//However, if numbers are sorted as strings, "25" is bigger than "100", because "2" is bigger than "1".
//Because of this, the sort() method will produce incorrect result when sorting numbers.
// fruits.reverse();//reverses the elements in an array
// document.getElementById('array-methods').innerHTML=fruits.toString();


//we use compare function to sort numeric arrays
// When the sort() function compares two values, it sends the values to the compare function, and sorts the values according to the returned (negative, zero, positive) value.
// If the result is negative a is sorted before b.
// If the result is positive b is sorted before a.
// If the result is 0 no changes are done with the sort order of the two values.
const points = [20, 30, 100, 50];
// points.sort();// it will retrun [100,20,30,50] which is wrong sorted order
// points.sort(function(a,b) {
//     return a-b;    
// });//compare function to sort numbers in ascending order
// document.getElementById('array-methods').innerHTML = points;

// points.sort(function(a,b) {
//     return b-a;    
// });//compare function to sort numbers in descending order
// document.getElementById('array-methods').innerHTML = points;

// points.sort(function(a, b){return 0.5 - Math.random()});//for sorting an array in random order

// You can use Math.max.apply to find the highest number in an array
// You can use Math.min.apply to find the lowest number in an array

// const max = Math.max.apply(null, points);// equivalent to Math.max(1, 2, 3)
// console.log(max);

// const min = Math.min.apply(null, points);// equivalent to Math.in(1, 2, 3)
// console.log(min);

//sorting objects
const cars = [
    { type: "Volvo", year: 2016 },
    { type: "Saab", year: 2001 },
    { type: "BMW", year: 2010 }
];

// cars.sort(function(a, b){return a.year - b.year});
// document.getElementById('array-methods').innerHTML = 
// cars[0].type + " " + cars[0].year + "<br>" +
//   cars[1].type + " " + cars[1].year + "<br>" +
//   cars[2].type + " " + cars[2].year;

//sorting string array using compare function
// cars.sort(function(a,b) {
//     let x = a.type.toLowerCase;
//     let y = b.type.toLocaleLowerCase;
//     if(x>y){
//         return -1;
//     }
//     else if(x<y){
//         return 1;
//     }
//     else
//     return 0;
// });
// document.getElementById('array-methods').innerHTML = 
// cars[0].type + " " + cars[0].year + "<br>" +
//   cars[1].type + " " + cars[1].year + "<br>" +
//   cars[2].type + " " + cars[2].year;

// cars.sort();//sort using the type key in cars object- in descending order
// document.getElementById('array-methods').innerHTML = 
// cars[0].type + " " + cars[0].year + "<br>" +
//   cars[1].type + " " + cars[1].year + "<br>" +
//   cars[2].type + " " + cars[2].year;


//  String methods in js  //

let str = 'This is my home sweet HOME';
// console.log(str.length);
// 3 methods for extracting a part of a string:
// slice(start, end)
// substring(start, end)
// substr(start, length)

// let strslice = str.slice(3,10);
// If a parameter is negative, the position is counted from the end of the string.
// let strslice1 = str.slice(-10,-3);// cant put argument like (-3,-10)
// document.getElementById('string-methods').innerHTML = strslice1;

// let strsubstring = str.substring(3,10);
// start and end values less than 0 are treated as 0 in substring()
// document.getElementById('string-methods').innerHTML = strsubstring;

// let strsub = str.substr(3,10);
//the second parameter specifies the length of the extracted part
// document.getElementById('string-methods').innerHTML = strsub;

// let newstr = str.replace('home', 'house');
// document.getElementById('string-methods').innerHTML = newstr;
// The replace() method does not change the string it is called on.
// The replace() method returns a new string.
// The replace() method replaces only the first match

//regular expressions
// const regEx = new RegExp('home', 'gi');//If you want to replace all matches, use a regular expression with the /g flag set
// By default, the replace() method is case sensitive
// to make it case-insensitive, use a regular expression with an /i flag
// const strreplaceall = str.replace(regEx, 'house');
// document.getElementById('string-methods').innerHTML = strreplaceall;
// const strgi = str.replace(/home/gi, 'house');//making case-insensitive and global
// document.getElementById('string-methods').innerHTML = strgi;

// const strupr = str.toUpperCase();
// document.getElementById('string-methods').innerHTML = strupr;

// const strlwr = str.toLowerCase();
// document.getElementById('string-methods').innerHTML = strlwr;

// let text1 = "Hello";
// let text2 = "World";
// let text3 = text1.concat(" ", text2);
// same as text = "Hello" + " " + "World!";
// document.getElementById('string-methods').innerHTML = text3;

// All string methods return a new string. They don't modify the original string.
// Strings are immutable: Strings cannot be changed, only replaced.

// let text1 = "      Hello World!      ";
// let text2 = text1.trim();//trim() method removes whitespace from both sides of a string
// document.getElementById('string-methods').innerHTML = text2;

// let characterat = str.charAt(5);//returns the character at a specified index (position) in a string
// let charunicode = str.charCodeAt(5);//returns the unicode of the character at a specified index in a string
//unicode of i is 105, so will return 105
// document.getElementById('string-methods').innerHTML = charunicode;

//Property access for a string might be a little unpredictable:
// It makes strings look like arrays (but they are not)
// If no character is found, [ ] returns undefined, while charAt() returns an empty string.
// It is read only. str[0] = "A" gives no error (but does not work!)
// let charpropaccess = str[4];
// document.getElementById('string-methods').innerHTML = charpropaccess;

// let strsplit = str.split(" ");//A string can be converted to an array with the split() method
// let strsplit = str.split();//If the separator is omitted, the returned array will contain the whole string in index [0].
// document.getElementById('string-methods').innerHTML = strsplit;

// let strsplit = str.split("");//If the separator is "", the returned array will be an array of single characters
// document.getElementById('string-methods').innerHTML = strsplit;

//String search
// let strpos = str.indexOf('home');// returns the index of (the position of) the first occurrence of a specified text in a string
// document.getElementById('string-methods').innerHTML = strpos;

// let strlastpos = str.lastIndexOf('home');//returns the index of the last occurrence of a specified text in a string
// document.getElementById('string-methods').innerHTML = strlastpos;
// Both indexOf(), and lastIndexOf() return -1 if the text is not found
// Both methods accept a second parameter as the starting position for the search
// ex- str.indexOf("home", 15)

// let strsearch = str.search("home");
// document.getElementById('string-methods').innerHTML = strsearch;
// both indexOf() and search() works same but they have differences as :
// search() cant take start position second argument
// indexof() cannot take powerful search values (regular expressions)
// let strmatch = str.match(/home/gi);
// searches a string for a match against a regular expression, and returns the matches, as an Array object
// document.getElementById('string-methods').innerHTML = strmatch;
// let strinclude = str.includes('home'); // returns true if a string contains a specified value
// let strincludeat = str.includes('home', 11);//Check if a string includes "world", starting the search at position 11
// document.getElementById('string-methods').innerHTML = strincludeat;
// let strstartwith = str.startsWith('This');//startsWith() method returns true if a string begins with a specified value, otherwise false
// let strstartwithpos = str.startsWith("home", 11);
// document.getElementById('string-methods').innerHTML = strstartwithpos;
// let strendswith = str.endsWith('HOME');//returns true if a string ends with a specified value
// let strendswithpos = str.endsWith('home', 15);//Check if the 15 first characters of a string ends with "world":
// document.getElementById('string-methods').innerHTML = strendswithpos;
// startsWith() and endsWith() are not supported in Internet Explorer

//  date in js  //

let myDate = new Date();
// document.getElementById('my-date').innerHTML = myDate;
// date methods
// let minute = myDate.getMinutes();
// let hour = myDate.getHours();
// let day = myDate.getDay();
// let year = myDate.getFullYear();
// let time = myDate.getTime();// will give time in seconds
// document.getElementById('date-methods').innerHTML = time;

// const d = new Date("October 13, 2014 11:13:00");//new Date(dateString) creates a new date object from a date string
// const d = new Date(0);// will return 'Thu Jan 01 1970 05:30:00 GMT+0530 (India Standard Time)'
// document.getElementById('date-methods').innerHTML = d;
// JavaScript stores dates as number of milliseconds since January 01, 1970, 00:00:00 UTC (Universal Time Coordinated).

//  DOM Manipulation  //

// let elem = document.getElementById('array-methods');
// console.log(elem);
// let elemClass = document.getElementsByClassName('container');// we will get html collection of the dom having this classname
// console.log(elemClass);
// elemClass[0].style.background = 'yellow';// we can target one dom as this as well
// //we can add one class to our dom as well-
// elemClass[0].classList.add('bg-color');// bg-color class will get added to this dom, see by using inspect in browser
// elemClass[0].classList.remove('bg-color');// bg-color class will be removed
// let elemdemo = document.getElementsByClassName('demo');
// let htmlinside = elemdemo[0].innerHTML;// will return the HTML inside this dom
// let textinside = elemdemo[0].innerText;// will return the HTML inside this dom
// console.log(htmlinside);
// console.log(textinside);

// let alldiv = document.getElementsByTagName('div');// will return collection of all the divs
// // console.log(alldiv);
// let createdelement = document.createElement('p');// we can create a new element using js as well
// let createdelement1 = document.createElement('b');
// createdelement.innerHTML= 'This is created para from js';
// createdelement1.innerHTML= 'This is created bold para from js';
// alldiv[0].appendChild(createdelement);// we can add any child to parent element 
// // the created element will be added at the end inside parent element when doing appendchild
// alldiv[0].replaceChild(createdelement1, createdelement);// replace createdelement with createdelement1
// alldiv[0].removeChild(createdelement1); // removes the created element

//we can get doc info as - 
// let docloc = document.location;
// console.log(docloc);
// let doctitle = document.title;
// console.log(doctitle);
// let docurl = document.URL;
// console.log(docurl);
// let docdomain = document.domain;
// console.log(docdomain);
// we can use document.images, document.links, document.anchor etc to get particular type of element in dom

//Selecting using query
// let sel = document.querySelector('.container');// will return only one(first) element ahving class as conatiner
// console.log(sel);
// let selAll = document.querySelectorAll('.container');// will return nodes of all elements of this class
// console.log(selAll);
// let selId = document.querySelector('#array-methods');// will return element with id as array-methods
// console.log(selId);

//  Events is Js  //

//using this function on clickingb the button using onclick="clicked()" in html file
// function clicked(){
//     document.getElementById('button-clicked').innerHTML+= 'The button was clicked<br>';
// }
// let buttondom = document.getElementById('clicked');
// buttondom.addEventListener('click', function(){
//     console.log('clicked');
// });

// window.onload = function () {
//     let buttondom = document.getElementById('clicked');
//     buttondom.addEventListener('click', function(){
//         document.getElementById('button-clicked').innerHTML= 'The button was clicked';
//     });
//     buttondom.addEventListener('mouseover', function() {
//         document.getElementById('button-clicked').innerHTML= 'The content changed';
//         // console.log("mouse at button");
//     });
    // buttondom.addEventListener('mouseout', function(){
    //     console.log("mouse out of button");
    // });
    // buttondom.addEventListener('mouseup', function() {
    //     console.log("mouse on button clicked");
    // });
    // buttondom.addEventListener('mousedown', function() {
    //     console.log("mouse on button unclicked");
    // });
    // buttondom.addEventListener('dblclick', function() {
    //     console.log("work on double click of mouse");
    // });
// }

//arrow function
summ= (a,b)=>{
    return a+b;
}

//settimeout and setinterval
aftertwosec= ()=>{
    console.log('running after 2 sec');
}
// setTimeout(aftertwosec, 2000);// aftertwosec function will run after 2 seconds of loading of website
//it is used to schedule any function
//we can use clearTimeout() to stop this setTimeout() to work
// let interval = setInterval(aftertwosec, 2000);// aftertwosec function will continue running on interval of 2 sec
//we can stop the running of this interval function by passing it in clearInterval(). ex - clearInterval(interval)
// here interval will contain an 'id' returned by setInterval function

// JavaScript Localstorage
// It is used to save data in user computer as a string
//every domain has its own localstorage
//can get the data stored in localstorage in 'Application' tab
// localStorage.setItem('name', 'shalini');//setting data in localstorage
// localStorage.getItem('name');// getting data from localstorage
// 'shalini'
// localStorage.removeItem('name');//will remove this item from localstorage
// localStorage.clear();// will clear the whole localstorage

// JSON - javascript object notation
// text format for storing and transferring data
// JSON doesn't support double quotes

let objjso = {
    name: 'harry',
    age: 20,
    a: {
        this : "that"
    }
}
let jso = JSON.stringify(objjso);
// console.log(jso);
// console.log(typeof(objjso));// return object
// console.log(typeof(jso));//return string
// let parsed = JSON.parse(`{"name":"harry","age":20,"a":{"this":"that"}}`);
//parse method takes string as input and returns json object
// let parsestring = JSON.parse(jso);
// console.log(parsestring);

//ES6+ syntax

// Destructuring obkjects
// let personDetails = {
//     firstname : 'Shalini',
//     lastname : 'Kumari'
// }
// const {firstname, lastname} = personDetails;// destructuring objects
// console.log(`${firstname} ${lastname}`);

// const {firstname: fn, lastname: ln} = personDetails;// re-assigning the value 

// console.log(`${fn} ${ln}`);

//Destructuring array
// let student = ['shalini', 'shalu', 'swati'];

// let [student1, student2, student3] = ['shalini', 'shalu', 'swati'];

// student1= 'anshu';
// console.log(student1);

//Object Literals

// function addressMaker(city, state){
//     // const newAddress = {newCity : city, newState : state};
//     const newAddress = {city, state};

//     console.log(newAddress);
// }

// addressMaker('Begusarai', 'Bihar');

// function addressMaker(addeess) {
//     const {city, state} = addeess;

//     const newAddress = {
//         city, state, country : 'India'
//     }

//     console.log(`${newAddress.city} ${newAddress.state} ${newAddress.country}`);
// }

// addressMaker({city:'Begusarai', state:'Bihar'});

// for-of loop- its is used to iterate over the whole object, doesn't do any mathematical operations
// let fullname = 'Shalini Sharma Chaudhary';

// for (const char of fullname) {
//     console.log(string);
// }

// let arr = ['shalini', 'shalu', 'swati'];

// for (const name of arr) {
//    console.log(name);
// }

// rest operators
// we can convert arguments to array using ...arguments(rest operator)
// function add(...nums) {
//     console.log(nums);
// }

// add(4,5,6,7);

// import from other file

let updateData = data;
console.log(updateData);