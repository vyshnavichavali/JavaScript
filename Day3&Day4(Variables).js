// Variables are containers which are used to store the data
const name = "Vyshnavi";
console.log(`My name is: ${name}`);
const cost = 5 + 2 * 3 + 9;
console.log(`Cost of food: ${cost}`);
const tax = cost * 0.1;
console.log(`Tax(10%):$${tax}`);

// Simple Add to cart code(JS in html code)
<!DOCTYPE html>
<html>
    <head>
        <title>Cart Quantity</title>
    </head>
    <body>
        <h4>Cart Quantity</h4>
        <script>
            let cartQuantity=0
        </script>
        <button onclick='
        cartQuantity=0; 
        console.log(`cartQuantity: ${cartQuantity}`);
        '>Show Quantity</button>

        <button onclick='
        cartQuantity+=1;
        console.log(`cartQuantity: ${cartQuantity}`);
        '>Add to cart</button>

        <button onclick='
        cartQuantity+=2;
        console.log(`cartQuantity: ${cartQuantity}`);
        '>+2</button>

        <button onclick='
        cartQuantity+=3;
        console.log(`cartQuantity: ${cartQuantity}`);
        '>+3</button>

        <button onclick='
        cartQuantity+=4;
        console.log(`cartQuantity: ${cartQuantity}`);
        '>+4</button>

        <button onclick='
        cartQuantity+=5;
        console.log(`cartQuantity: ${cartQuantity}`);
        '>+5</button>

        <button onclick='
        cartQuantity--;
        console.log(`cartQuantity: ${cartQuantity}`);
        '>Remove from cart</button>

        <button onclick='
        cartQuantity-=2;
        console.log(`cartQuantity: ${cartQuantity}`);
        '>-2</button>

        <button onclick='
        cartQuantity-=3;
        console.log(`cartQuantity: ${cartQuantity}`);
        '>-3</button>

        <button onclick='
        cartQuantity=0;
        console.log(`cartQuantity: ${cartQuantity}`);
        '>Reset Cart</button>

    </body>
</html>


// Simple calculator code
<!DOCTYPE html>
<html>
  <head>
    <title>Calculator</title>
    <meta charset="UTF-8" />
  </head>
<body>
<h3>Calculator</h3>
    <script>
        let calculation = '';
    </script>
      <button
        onclick="
        calculation += '1';
        console.log(calculation);
      ">1</button>

      <button
        onclick="
        calculation += '2';
        console.log(calculation);
        ">2</button>

      <button
        onclick="
        calculation += '3';
        console.log(calculation);
        ">3</button>

      <button
        onclick="
        calculation += '+';
        console.log(calculation);
        ">+</button>

      <button
        onclick="
        calculation= eval(calculation);
        console.log(calculation);
        ">=</button>
    </p>
    <script>
      let calculation = "";
    </script>
</body>
</html>

//  Difference between var, let and const

/*var is nothing but variable 
var can reassign
var can redeclare
var can hoisted 
var can binds this
var has no scope
*/
// var can redeclare
var num = 3
console.log(num)
var num = 4
console.log(num)

// var can reassign
var num1= 3
num1 = 4
console.log(num1);  // we will get updated value

// var can hoisted : we can use the variable without declaring it
console.log(val);    // output: undefined
var val = 2;
console.log(val);    // output: 2

// var can binds this





/* let is used to declare the variable
   let cannot be redclare but can redecalre in another block
   let can reassign
   let can't hoisted
   let can't bind this
   let has the scope
*/

// let cannot be redclare but can redecalre in another block

let val = 3 ; // Allowed
let val = 4 ; // Not Allowed
{
    let val= 5 // Allowed
}

// let can reassign
let val2 = 3
val2 = 4
console.log(val2)

// let can't hoisted
console.log(val3);    // output: Error
let val3 = 2;
console.log(val3);

/*const
const can't reassign
const can't redeclare
const can't hoisted 
const can't binds this
const has no scope
*/


// const can't reassign
const num0 = 8;
num0 = 3;      // This will give an error

// const can't redeclare
const num01 = 81;
// const num01 = 81;  This will give error













