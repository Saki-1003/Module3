// 1. What are the results of these expressions?
"" + 1 + 0    // 10
"" - 1 + 0    //-1
true + false  //1
!true   //false
6 / "3"   //2
"2" * "3"   //6
4 + 5 + "px"  //9px 
"$" + 4 + 5   //$45
"4" - 2   //2
"4px" - 2   //NaN
" -9 " + 5  //-95
" -9 " - 5  //-14
null + 1    //1
undefined + 1   //Nan
undefined == null   //true
undefined === null  //fales
" \t \n" - 2  //-2

// 2. Which of the below are not giving the right answer? 
// Why are they not correct? How can we fix them?

let three = "3"
let four = "4" 
let thirty = "30"

let addition = three + four  // 34 --> this is not right answer as its not doing 3+4=7. To fix this, you can do
// let addition = Number(three) + Number(four)
//  Or 
// let addition = three*1 + four*1
let multiplication = three * four   // 12 
let division = three / four   // 0.75
let subtraction = three - four    // -1

let lessThan1 = three < four  // true
//To stop this from being true, we can convert thirty and four to numbers before doing the less than comparison
let lessThan2 = thirty < four  // true

//3. Which of the following console.log messages will print? Why?
//--> The follwing 3 messages will print as these are true while 0 and null is false.
if ("0") console.log('#2 zero is true')
if (-1) console.log('negative is true')
if (1) console.log('positive is true')

/*4. Rewrite this if using the ternary/conditional operator '?'. 
Test it with different values for a and b. What does the ‘+=’ do?*/
//---> += is adding left side to right side 

let a = 5, b = 5;
let result = `${a} + ${b} is `;

// if (a + b < 10) {
//   result += 'less than 10'; 
// } else { 
//   result += 'greater than 10'; 
// }

let concaText = a + b < 10? result += 'less than 10': result += 'greater than 10'
console.log(concaText)

/*5. Rewrite the following function using: a) function expression syntax, and 
b) arrow function syntax. Test each version to make sure they work the same.*/

// function getGreeting(name) {
//    return 'Hello ' + name + '!'; 
//   }

// //function expression syntax
// const getGreeting = function(name) {
//   return 'Hello ' + name + '!'; 
// }

//arrow function
const getGreeting = (name) => {return 'Hello ' + name + '!'}

console.log(getGreeting('saki'))

/*6. a) Complete the inigo object by adding a lastName property and including it in the greeting. 
b) Complete getCatchPhrase so that if the person argument has 6 fingers, 
it instead prints his famous catch phrase to the console. 
HINT: see https://www.imdb.com/title/tt0093779/characters/nm0001597. 
c) Update getCatchPhrase to use arrow function syntax and a conditional operator.*/

const westley = { 
  name: 'Westley', 
  numFingers: 5 
}

const rugen = { 
  name: 'Count Rugen', 
  numFingers: 6 
}

const inigo = { 
  firstName: 'Inigo', 
  
  greeting(person) { 
    let greeting = `Hello ${person.name}, 
    my name is ${this.firstName} ${this.lastName}. `; 
    console.log(greeting + this.getCatchPhrase(person)); 
  }, 
    getCatchPhrase: (person) => person.numFingers == 6? 'You killed my father. Prepare to die.': 'Nice to meet you.'
  // getCatchPhrase(person) { 
  //   if(person.numFingers == 6) {
  //     return 'You killed my father. Prepare to die.' 
  //   } else { 
  //     return 'Nice to meet you.'
  //   } 
  // }
}
// inigo.getCatchPrase = (person) => {return person.n == 6 ? 'You killed my father. Prepare to die.' : 'Nice to meet you.'}

inigo.lastName = "White",
// console.log(inigo)

console.log(inigo.greeting(westley)) 
console.log(inigo.greeting(rugen))

// 7. The following object represents a basketball game and keeps track of the score as the game progresses. 
// a) Modify each of the methods so that they can be ‘chained’ together and the last line of the example code works
// b) Add a new method to print the full time final score 
// c) Add a new object property to keep track of the number of fouls and a method to increment it, similar but separate to the score. Include the foul count in the half time and full time console messages
// d) Test your object by chaining all the method calls together in different combinations.

const basketballGame = { 
  score: 0, 
  freeThrow() { 
    this.score++; 
    return this;
  }, 
  basket() { 
    this.score += 2; 
    return this;
  }, 
  threePointer() {
    this.score += 3; 
    return this;
  }, 
  halfTime() { 
    console.log('Halftime score is '+this.score);
    console.log('Fouls is ' + this.numOfFouls); 
    return this;
  }
} 

basketballGame.numOfFouls=0
console.log(basketballGame)


basketballGame.fullTime=function() {
  console.log('Final score is ' + this.score);
  console.log('Final number of fouls is ' + this.numOfFouls);
  return this
}

basketballGame.foulCount=function(){
  this.numOfFouls += 1;
  return this}


  // basketballGame.basket().freeThrow().freeThrow().basket().threePointer().halfTime();

basketballGame.basket().foulCount().freeThrow().freeThrow().foulCount().basket().threePointer().halfTime().foulCount().fullTime();


console.log(basketballGame)



/*8. The object below represents a single city.
a) Write a function that takes an object as an argument and uses a for…in loop to access and print to the console each of those object properties and their values. Test it using the sydney object below.
b) Create a new object for a different city with different properties and call your function again with the new object.*/
const sydney = { 
  name: 'Sydney',
  population: 5_121_000, 
  state: 'NSW',
  founded: '26 January 1788',
  timezone: 'Australia/Sydney', 
}

function callCity(country) {  

  for(let key in country) {
    console.log(key);
    console.log(country[key])
  }
}

const tokyo = { 
  name: 'Tokyo',
  population: 14e6, 
  sizeOfTokyo: '2191km2',
  founded: '1 May 1889',
  timezone: 'Japan', 
}

callCity(sydney)
callCity(tokyo)



/*9. Use the following variables to understand how JavaScript stores objects by reference.
a) Create a new moreSports variable equal to teamSports and add some new sport values to it (using push and unshift)*/

let teamSports = ['Hockey', 'Cricket', 'Volleyball']; 
// let moreSports = teamSports

// moreSports.push('Soccer')
// moreSports.unshift('Basketball')
// console.log(moreSports)

// b) Create a new dog2 variable equal to dog1 and give it a new value
let dog1 = 'Bingo'; 
let dog2 = dog1;
dog2 = 'Sunny'
// console.log(dog2)

// c) Create a new cat2 variable equal to cat1 and change its name property
let cat1 = { name: 'Fluffy', breed: 'Siberian' };
// let cat2 = cat1
// cat2.name = 'Silky'

// console.log(cat2)

// d) Print the original teamSports, dog1 and cat1 variables to the console. Have they changed? Why?
// -->The original data of teamSports(array) & cat1(object) have been changed as these data is store as reference to the orinal.
console.log(teamSports)
console.log(dog1)
console.log(cat1)

// e) Change the way the moreSports and cat2 variables are created to ensure the originals remain independent

let moreSports = teamSports.slice()
moreSports.push('Soccer')
moreSports.unshift('Basketball')
console.log("moreSports is " + moreSports)
console.log("teamSports is " + teamSports)


let cat2 = {...cat1, name: 'Silky'};
console.log("cat1 is " + cat1.name)
console.log("cat2 is " + cat2.name)

/*10. The following constructor function creates a new Person object with the given name and age values.
a) Create a new person using the constructor function and store it in a variable
b) Create a second person using different name and age values and store it in a separate variable
c) Print out the properties of each person object to the console
d) Rewrite the constructor function as a class called PersonClass and use it to create a third person using different name and age values. Print it to the console as well.
e) Add a canDrive method to both the constructor function and the class that returns true if the person is old enough to drive.
function Person(name, age) { this.name = name; this.age = age; this.human = true; }*/

function Person(name, age) { 
  this.name = name; 
  this.age = age; 
  this.human = true; 
  this.canDrive = (age) => {
    let result = this.age >= 18;
    return result;
    }
}

let person1 = new Person('William', 40)
let person2 = new Person('Caroline', 25)

console.log(person1.canDrive())
console.log(person2.canDrive())

class PersonClass {
  constructor(name, age) {
    this.name = name; 
    this.age = age; 
    this.human = true;
  } 
  canDrive() {
    let result = this.age >= 18? 'true': 'false'
    return result
    }
}

let person3 = new PersonClass('Aston', 17)
console.log(person3.canDrive())