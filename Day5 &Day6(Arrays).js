// Arrays are a ordered collection 
let vehicles = ["Bus", "car", "Zeep"]
        //        0      1       2

// Array size is dynamic
 vehicles = ["Bus", "car", "Zeep"]
 vehicles.push("van")
 console.log("dynamic array: ", vehicles)  //output: ["Bus", "car", "Zeep", "van"]


// Array can hold the values of different types
const mix = [1, 2.3, 3, "red"]
console.log("array with diiferent types: ", mix)

// Accessing array elements

let pets = ["Dog", "Cat", "Cow"]
console.log(pets)
console.log("index 0: ", pets[0])
console.log("index -1:", pets[-1])  // output: undefined
console.log("index 2: ", pets[2])
console.log("----------------------------------------")


// Basic array methods:
  console.log("Basic array methods");

// length() : length of th array
    const cars = ["volvo", "Mahindra", "Swift"];
    console.log("Length of cars: ", cars.length);

                                                                                              //  converts
// toString() : converts array format to comma seperated values [ 'volvo', 'Mahindra', 'Swift' ]------------>volvo,Mahindra,Swift
    pets = ["cat", "cow", "dog"]
    console.log("toString method: ", pets.toString());

// at(index): prints the value according to the index
    let laptops = ["HP", "lenovo", "Dell", "Apple"]    
    console.log("at method: ", laptops.at(3))


/*push(): pushes method returns the new array length and 
        adds the element at the end*/
    laptops = ["HP", "lenovo", "Dell", "Apple"];
    console.log("Before push method: ", laptops);
    laptops.push("Samsung");
    console.log("After push method: ", laptops);

/* pop(): pop method returns the value that poped out and 
        pops the element at the end      */
    console.log("Array Before poping: ", laptops)
    const laptop = laptops.pop()
    console.log("element which is poped out: ", laptop)
    console.log("Array after poping the element: ", laptops)

// join(): joins the array elements into a string with seperator
    console.log("Before join method: ", laptops)
    console.log("After join method: ", laptops.join('*'))

/* shift(): shift method removes the first array element and shift the elements to lower index
            returns the shifted out element*/

    const fruits = ["Apple", "Banana", "Orange", "Mango"]
    console.log("Before shift method: ", fruits)
    console.log("Shifted out element: ", fruits.shift())
    console.log("After shift method:", fruits)

/* unshift(): unshift adds the element at the starting of the array
            returns the array length after unshifting    */
    let colours = ["red", "blue", "green", "pink"]
    console.log("Before unshifting:", colours)
    console.log("returning the array length after unshifting: ",colours.unshift("black") )
    console.log("After unshifting: ", colours)

// delete(): ! delete leaves the undefined holes in the array (use pop() and shift() instead)
   console.log(colours)  // output: [ 'black', 'red', 'blue', 'green', 'pink' ]
   delete colours[1]
   console.log(colours)  // output: [ 'black', <1 empty item>, 'blue', 'green', 'pink' ]
   console.log(colours[1])  // output: undefined


/* concat(): concat is used to merge the arrays and merge the value with arrays
             creates the new array without altering the existing array*/
  const arr1 = ["red", "blue", "green"]
  const arr2 = ["goa", "pineapple", "mango"]
  const arr3 = arr1.concat(arr2)
  console.log("merging 2 arrays: ", arr3)

  const arr4 = ["cow", "cat", "dog"]
  const arr = arr4.concat(arr1, arr2)
  console.log("merging 3 arrays: ", arr)

  const arr5 = arr4.concat("goat")
  console.log("merging an array with value: ", arr5)
  
/* copyWithin():  
                
*/
const girls = ["sita", "riya", "priya", "rita"];
const stud = girls.copyWithin(0, 2);
console.log(stud);


// flat(): flat method creates the new array with sub array elements in th array
    // flat(depth) depth is optional
let num = [[1,2], [3, 4], [5, 6]]
const newnum = num.flat()
console.log(newnum)  // output: [ 1, 2, 3, 4, 5, 6 ]


num = [2, 3,[4, 2,[3, 4]],[1,2], [3, 4], [5, 6]]
let num1 = num.flat()
console.log(num1)  // output: [ 2, 3, 4, 2, [ 3, 4 ], 1, 2, 3, 4, 5, 6 ]

// splice(): splice method adds the new elements to the array

let vehicle = ["Car", "Zeep", "Van"];
vehicle.splice(2,0,"Bike", "Bus");
console.log("splice method: ", vehicle);
//  splice can also remove the elements from the array and does not leaves any holes in the array
console.log(vehicle);  // output: [ 'Car', 'Zeep', 'Bike', 'Bus', 'Van' ]
vehicle.splice(0,3);
console.log(vehicle);  // output:  [ 'Bus', 'Van' ]

/* toSpliced(): toSpliced method is same as splice but
 it creates the new arrray without altering the original array */

laptops = ["Hp", "Lenovo", "Dell"];
const lapi = laptops.toSpliced(2, 0, "Samsung", "Apple", "Acer");
console.log("toSpliced method: ", lapi);

//  toSpliced can also remove the elements from the array and does not leaves any holes in the array
console.log(lapi); 
new_lapi = lapi.toSpliced(0,1);
console.log(new_lapi);  
new_lapi = lapi.toSpliced(0,2);
console.log(new_lapi);  
new_lapi = lapi.toSpliced(1,2);
console.log(new_lapi);  
new_lapi = lapi.toSpliced(2,4);
console.log(new_lapi);  
new_lapi = lapi.toSpliced(2,0);
console.log(new_lapi);  
new_lapi = lapi.toSpliced(2,1);
console.log(new_lapi);  


// slice():  slice method slices out a piece of array into new array
const months = ["jan", "Feb", "Mar", "Apr", "May", "Jun"];
new_month = months.slice(4);
console.log(new_month);
new_month = months.slice(2);
console.log(new_month);
// The slice() method can take two arguments like slice(1, 3)
// The method then selects elements from the start argument, and up to (but not including) the end argument.
new_month = months.slice(3, 5); 
console.log(new_month);
new_month = months.slice(2, 4);
console.log(new_month);

/* Array sort methods:
   Alphabetic sort: sort(), tosorted(), reverse(), toreversed()
   Numeric sort: Numeric sort(), Random Sort(), Math.min(), Math.max(), Home made Min(), Home made Max()
*/

/*Alphabetic sort
 sort(): sort method sorts an array alphabetically
 sort method alters the original array*/
 const colours = ["Red", "Blue", "Pink"];
 console.log("Before sort: ", colours);
 colours.sort();
 console.log("After sort:", colours);


 /*
 tosorted(): tosorted method as a safe way to sort an array alphabetically  
 tosorted creates the new array without altering the original array*/ 
let months = ["mar", "apr", "jan", "dec"];
console.log("Before toSorting: ", months);
const month = months.toSorted();
console.log("After toSorting: ", month);

/* reverse(): reverse method reverses the elements in an array
alters the original array*/
console.log("Before reverse method: ", months);
console.log("After reverse method: ", months.reverse());

/* toReversed(): toreverse method is a safe to way to reverse the elements in the array
  creates a new array without altering the original array    */
let Birds = ["crow", "Owl", "Parrot"];
const Bird = Birds.toReversed();
console.log("toReversed method: ", Birds);


// map, filter, reduce and forEach methods
//  map(): map method creates a new array by applying function on each element in the original array
        //   doesnot change the original array
const numbers = [1, 2, 3, 4]
const double= numbers.map(num => num*2)
console.log(double)

/* filter(): filter method creates a new array filled with the elements which passes the test provided 
by function*/
const val = [3, 4, 5, 6, 8]
const evennum = val.filter(val1=>val1%2===0)
console.log(evennum)

// reduce(): reduce method returns a single value
const num1 = [2, 4, 5, 6];
const newnum = num1.reduce((acc,num) => acc+num, 10);
console.log(newnum);

const num2 = [2, 4, 5, 6];
const newnum2 = num1.reduce((acc,num) => acc+num, 0);
console.log(newnum2);

//foreach(): foreach method calls the function for each element in the array
const fruits = ["Apple", "Banana", "orange"]
fruits.forEach(fruit=>console.log(fruit))

// String and its methods
/*
All string methods creates a new string without altering a original string
Strings are immutable: strings cannot be changed only we can replace
*/


// string length: Returns the length of the string
let str1 = "vyshu"
console.log(str1.length)

/* There 4 methods to extracting string characters
at position: Returns a character at specified index in a string ES2022 introduced at
charAt positon : Returns a character at specified index in a string
charCodeAt position: Returns code of the character at specified index in a string
this method returns the UTF-16 (number 0 - 65535)
using property access like arrays[]:  It makes string look like an array but it is not
If no charcter is found it returns undefined  
*/

let text = "Welcome to JavaScript"
console.log(text.charAt(3))
// console.log(charAt(-3)) // It do not allow negative indexes (Error)
console.log(text.at(1))
console.log(text.at(-2)) // allows negative indexes
console.log(text.charCodeAt(7))
console.log(text.charCodeAt(-7)) // If we given negative output will be NaN
console.log(text[5])  
console.log(text[-1]) // If there is no character found or if we givwn negative index it returns undefined

/* There are 3 methods to extract part of a string
slice(start, end)
substr(start, length)
substring(start, end)
*/
// slice(start, end): extracts the part of the string and returns the extracted part in new string
text = "Hello World"
const part = text.slice(0,4) 
console.log(part)

// substr: substr is same as slice the difference is the second parameter specifies the length of extracted string
const part2 = text.substr(3, 4)
console.log(part2)
const part3 = text.substr(-3) // It returns last 3 chars
console.log(part3)

// substring: The start and end values lessthan 0 treated as 0  
const part1 = text.substring(3,7) 
console.log(part1)
const part4 = text.substring(-4,-9)  
console.log(part4)
const part5 = text.substring(3)  // If we omit the second parameter it slice out the rest of the string
console.log(part5)

/*
toUpperCase: Converts to uppercase to lowercase 
toLowerCase: Converts lowercase to uppercase
 */
// toUpperCase:If it is already in uppercase doesnot changes
text = "Happy Coders"
const res = text.toUpperCase()
console.log(res)
//toLowerCase:If it is already in lowercase doesnot changes
const res1 = text.toLowerCase()
console.log(res1)

// concat: concat and + both are same
firstName = "vyshu";
lastName = "chavali";
fullName = firstName.concat(" ", lastName);
console.log(fullName);
console.log(firstName + " " + lastName);


//trim: trim remove spaces from both sides of a string
text = "      vyshu..     ";
console.log("Before trim: ", text);
console.log("After trim:", text.trim());

//trimstart: trim start is same as trim but removes whitespace at start of the string
text = "     riya....     ";
console.log("Before trimStart: ", text);
console.log("After trimStart:", text.trimStart());

//trimEnd: trimEnd is same as tirm but removes whitespace at the end of the string
text = "     riya....     ";
console.log("Before trimEnd: ", text);
console.log("After trimEnd:", text.trimEnd());

/*
  padding: padStart , padEnd
  padStart(): pasStart pads the string from start
  It pads a string with another string until it reaches a specified length
*/
let num = 2
let txt = num.toString()
let pad = txt.padStart(7, 5) // par2 is for string to pad par1 if for length it includes original str
console.log(pad)
pad = txt.padStart(7, "F")
console.log(pad)
// padEnd: padEnd pads the string at the end 
pad = txt.padEnd(5, 0)
console.log(pad)
pad = txt.padEnd(5, "e")
console.log(pad)

/* repeat(): repeat methods returns string with no.of copies it creats the new string wihout altering the original string 
syntax: string.repeat(count)
*/
txt = "Hi"
const newtxt = txt.repeat(3)
console.log(newtxt)

/*
 replace(): replaces the specified value with another value
            replace is case-senstive
            to make case-insensitive use regexp 
 */
let val = "Hi My Name is Vyshu and Vyshu is a nickname"
console.log("Before replacing ", val)
const newval = val.replace("Vyshu", "Vyshnavi")
console.log("After replacing ", newval)
// replace method with regexp(to make case-insensitive)
const newval1 = val.replace(/VYSHU/i, "Vyshnavi")  // i for insensitive
console.log("With RegExp 'i' ", newval1)
const newval2 = val.replace(/Vyshu/g, "Vyshnavi")   // g for globalmatch(to replace all matches )
console.log("With RegExp 'g' ", newval2)





 






