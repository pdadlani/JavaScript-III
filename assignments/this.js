/* The for principles of "this";
* in your own words. explain the four principles for the "this" keyword below.
*
* 1. window/global object binding: use this without .this or anything. so a simple funciton with 'return this' does it on global. 
      ex. function () {
            return this;
          }

      - this will refer to the window/console you are in and return the this of window/console object. output is typically huge.

* 2. implicit binding: 'this.' refers to calling a function with a preceding dot; the this is the object before the dot. 
      ex. 'pri.name' 'name' function will refer back to 'pri' object.

* 3. new binding: using a constructor function, and then creating a new object using 'new' keyword
      
* 4. explicit binding: when .call & .apply are used. allows for overriding of constructor objects. same as breakout section


*
* write out a code example of each explanation above
*/


// Principle 1
// code example for Window Binding
const windowF = () => console.log(this);


// Principle 2
// code example for Implicit Binding
//const iPri = person('iPri', 26, 'black');
const iPri = {
  name: 'iPri',
  greet: function(person) {
    console.log(`Hi ${person}, my name is ${this.name}.`);
  }
}

iPri.greet('friends');


// Principle 3
// code example for New Binding
function Person(name, age, hairColor) {
  this.name = name;
  this.age = age;
  this.hairColor = hairColor;
  this.sayAll = function () {
    console.log(`Hi, my name is ${this.name} and I am ${this.age} years old with ${this.hairColor} hair.`);
  }
};

const nPri = new Person('nPri', 26, 'black');
nPri.sayAll();
console.log('new binding: ', nPri);


// Principle 4
// code example for Explicit Binding
const ePri = {
  name: 'ePri',
};

const food = ['strawberries', 'blackberries'];

function sayHi(food1, food2) {
  console.log(`Hi ${this.name}, I like ${food1} and ${food2}.`)
}


sayHi.apply(ePri, food);