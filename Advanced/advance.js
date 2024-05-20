//1
// function makeCounter() { 
//   let currentCount = 0; 
//   return function() { 
//     currentCount++; 
//     console.log(currentCount) 
//     return currentCount; 
//   }; 
// } 

// let counter1 = makeCounter();

// counter1(); //1
// counter1(); //2

// a)
// let counter2 = makeCounter()
// counter2()
// counter2()
// counter2()


// b)
// function makeCounter(startFrom) { 
//   let currentCount = startFrom
//   return function() { 
//     currentCount++; 
//     console.log(currentCount) 
//     return currentCount; 
//   }; 
// } 

// const counter2 = makeCounter(5)
// counter2()
// counter2()
// counter2()

// c)
// function makeCounter(startFrom) { 
//   let currentCount = startFrom
//   return function(incrementBy) { 
//     currentCount += incrementBy 
//     console.log(currentCount) 
//     return currentCount; 
//   }; 
// } 

// const counter2 = makeCounter(3)
// counter2(2)
// counter2(2)
// counter2(2)

// 2
// function delayMsg(msg) { 
//   console.log(`This message will be printed after a delay: ${msg}`) 
// } 

// setTimeout(delayMsg, 100, '#1: Delayed by 100ms'); 
// setTimeout(delayMsg, 20, '#2: Delayed by 20ms'); 
// setTimeout(delayMsg, 0, '#3: Delayed by 0ms'); 
// delayMsg('#4: Not delayed at all')

// a)
// The bottom one will be ptinted first as it is synchronous, others will be printed according the delay set in each setTimeout function.
// setTimeout(delayMsg, 100, '#1: Delayed by 100ms'); // ---> 4
// setTimeout(delayMsg, 20, '#2: Delayed by 20ms'); // ---> 3
// setTimeout(delayMsg, 0, '#3: Delayed by 0ms'); // ---> 2
// delayMsg('#4: Not delayed at all') // ---> 1 

// b)
// const delayMsg = msg => console.log(`This message will be printed after a delay: ${msg}`) 
// setTimeout(delayMsg, 100, '#1: Delayed by 100ms'); 
// setTimeout(delayMsg, 20, '#2: Delayed by 20ms'); 
// setTimeout(delayMsg, 0, '#3: Delayed by 0ms'); 
// delayMsg('#4: Not delayed at all')


// c)
// const timer15s = setTimeout(delayMsg, 1000*15, '#5: Delayed by 15s'); 

// d)
// clearTimeout(timer15s)

// 3

// a)
// function printMe() { 
//   console.log('printing debounced message') 
// } 

// function debounce(fnc) {
//   let timeout;
//   return function() {
//     clearTimeout(timeout)
//     timeout = setTimeout(fnc, 1000)   
//   }
// }

// const printMeDebounce = debounce(printMe);
// setTimeout( printMeDebounce, 100); 
// setTimeout( printMeDebounce, 200); 
// setTimeout( printMeDebounce, 300);

// b)
// function printMe() { 
//   console.log('printing debounced message') 
// } 

// function debounce(fnc, ms) {
//   return function() {
//     const delayFnc = setTimeout(fnc, ms)
//   }
// }
// const printMeDeco = debounce(printMe, 1000);
// printMeDeco()

// c)
// function printMe(msg) { 
//   console.log(msg) 
// } 

// function debounce(fnc, ms) {
//   return function(msg) {
//     const delayFnc = setTimeout(()=>fnc.apply(this, arguments), ms)
//   }
// }
// const printMeDeco = debounce(printMe, 1000);
// printMeDeco('printing debounced message')



// 4

// a)
// let fibonacciArry = [1, 1, 2, 3, 5, 8, 13, 21, 34]
// let i = 0

// function printFibonacci(delay) {
//   const timer = setInterval(() => {console.log(
//     fibonacciArry[i]); i++;
//     if(i > fibonacciArry.length-1){
//       clearInterval(timer)
//     }; 
//   }, delay)
// }

// printFibonacci(1000)

// b)
// let fibonacciArry = [1, 1, 2, 3, 5, 8, 13, 21, 34]

// function printFibonacci(delay) {
//   let i = 0
//   setTimeout(function timer() {
//     console.log(fibonacciArry[i]);
//     if(i < fibonacciArry.length-1) setTimeout(timer, delay, i++);
//   }, delay)
// }

// printFibonacci(1000)

// c)
// let fibonacciArry = [1, 1, 2, 3, 5, 8, 13, 21, 34]
// let i = 0

// function printFibonacci(delay, limit) {
//   const timer = setInterval(() => {console.log(
//     fibonacciArry[i]); i++;
//     if(i > limit){
//       clearInterval(timer)
//     }; 
//   }, delay)
// }

// printFibonacci(1000, 5)

// 5

// let car = { 
//   make: "Porsche", 
//   model: '911', 
//   year: 1964, 
//   description() {
//     console.log(`This car is a ${this.make} ${this.model} from ${this.year}`);
//   } 
// };

// car.description(); //works 
// setTimeout(car.description, 200); 
//This fails beccause its context is lost.

// a)
// setTimeout(function() {car.description()}, 200); 

// b)
// let carClone = {...car, year: '1950'}
// console.log(carClone)

// c)
// It uses the original values it is referencing to the original object.

// d)
// setTimeout(car.description.bind(car), 200); 

// e)
// let carClone2 = {...car, make: 'BMW'}
// --> yes, it still uses the bound value from d)


// 6

// a)
// Function.prototype.delay = function(ms) {
//   const originalFnc = this
//   return function(para1, para2){
//     setTimeout(originalFnc, ms, para1, para2)
//   }
// }

// function multiply(a, b) { 
//   console.log( a * b ); 
// } 
// multiply.delay(500)(6, 5);

// b)
// Function.prototype.delay = function(ms) {
//   const originalFnc = this
//   return function(){
//     setTimeout(()=>originalFnc.apply(this, arguments), ms)
//   }
// }

// function multiply(a, b) { 
//   console.log( a * b ); 
// } 
// multiply.delay(500)(6, 5);

// c)
// Function.prototype.delay = function(ms) {
//   const originalFnc = this
//   return function(){
//     setTimeout(()=>originalFnc.apply(this, arguments), ms)
//   }
// }

// function multiply(a, b, c, d) { 
//   console.log( a * b * c * d ); 
// } 
// multiply.delay(500)(6, 5, 2, 4);



// 7
// function Person(name, age, gender) { 
//   this.name = name; 
//   this.age = age; 
//   this.gender = gender; 
// } 

// const person1 = new Person('James Brown', 73, 'male') 
// console.log('person1: '+person1) //prints person1: [object Object]

// a)
function Person(name, age, gender) { 
  this.name = name; 
  this.age = age; 
  this.gender = gender; 
} 

Person.prototype.toString = function() {
  return this.name
}

const person1 = new Person('James Brown', 73, 'male') 
console.log('person1: '+person1) 

// b)
const person2 = new Person('Tom Hanks', 60, 'male') 
console.log('person2: '+person2) 

// c) 
function Student(name, age, gender) {
  Person.call(this, name, age, gender, )
  this.cohort = 'cohort';
}


// d)
Student.prototype.toString = function() {
  return this.name
}

const student1 = new Student('Lisa', 35, 'female','SE') 
console.log('student1: '+ student1) 
const student2 = new Student('Mark', 30, 'male','SE') 
console.log('student2: '+ student2) 

// 8
class DigitalClock { 
  constructor(prefix) { 
    this.prefix = prefix; 
  } 
  display() { 
    let date = new Date(); 
    let [hours, mins, secs] = [date.getHours(), date.getMinutes(), date.getSeconds()]; 
    if (hours < 10) hours = '0' + hours; 
    if (mins < 10) mins = '0' + mins; 
    if (secs < 10) secs = '0' + secs; 
    console.log(`${this.prefix} ${hours}:${mins}:${secs}`); 
  } 
  stop() { 
    clearInterval(this.timer); 
  } 
  start() { 
    this.display(); 
    this.timer = setInterval(() => this.display(), 1000); 
  } 
} 

// const myClock = new DigitalClock('my clock:') 
// myClock.start()

// a)
class PrecisionClock extends DigitalClock {
  constructor(prefix, precision) {
    super(prefix)
    this.precision = precision || 1000
  }
  start() {
    this.display(); 
    this.timer = setInterval(() => this.display(), this.precision); 
  }
}

const myClock2 = new PrecisionClock('my clock:', )
// myClock2.start()

// b)
// class AlarmClock extends DigitalClock {
//   constructor(prefix, wakeupTime) {
//     super(prefix)
//     this.wakeupTime = wakeupTime || '07:00'
//   }

//   wakeUpTimer() {
//     let date = new Date(); 
//     let [hours, mins] = [date.getHours(), date.getMinutes()]; 
//     if (hours < 10) hours = '0' + hours; 
//     if (mins < 10) mins = '0' + mins; 
//     const wakeupHours = this.wakeupTime.substring(0,2)
//     const wakeupMinutes = this.wakeupTime.substring(3)

//     if (wakeupHours == hours && wakeupMinutes == mins) {
//       console.log('Wake Up')
//       this.stop() 
//     } else {
//       this.display()
//     } 
//   }
//   start() { 
//     this.timer = setInterval(() => this.wakeUpTimer(), 1000); 
//   } 
// }

// let wakeUp = new AlarmClock('Time is', '17:02')
// wakeUp.start()

// 9

// a)
// let random = Math.ceil(Math.random()*20) * 1000
// function randomDelay() {
//   return new Promise((resolve, reject) => setTimeout(() => resolve(), random))
// }
   
// randomDelay().then(() => console.log('There appears to have been a delay.'));

// b) c) d)

let random = Math.ceil(Math.random()*20) 
function randomDelay() {
  return new Promise((resolve, reject) => setTimeout(() => {
    if(random%2==0) {
      resolve(random)
    } else {
      reject(random)
    }}, random*1000))
}
  randomDelay()
  .then((result) => console.log(`The promise is solved by ${result}s.`))
  .catch((result) => console.log(`The promise is rejected by ${result}s.`))



// 10
//run 'npm init' and accept all the defaults 
//run 'npm install node-fetch' 
//add this line to package.json after line 5: "type": "module", 

// import fetch from 'node-fetch' 
// globalThis.fetch = fetch 

// function fetchURLData(url) { 
//   let fetchPromise = fetch(url).then(response => { 
//     if (response.status === 200) { 
//       return response.json(); 
//     } else { 
//       throw new Error(`Request failed with status ${response.status}`); 
//     }
//   }); 
//   return fetchPromise; 
// } 
// fetchURLData('https://jsonplaceholder.typicode.com/todos/1') 
//   .then(data => console.log(data)) 
//   .catch(error => console.error(error.message));

 // a) b)

import fetch from 'node-fetch' 
globalThis.fetch = fetch 


async function fetchURLData2(url) { 
  let response;
  try {
    response = await fetch(url)
  } catch(error) {
    console.log(`Request failed with ${error}`)
    return 
  }

  if (response.status === 200) { 
    const result = await response.json(); 
    console.log(result)
  } else { 
    throw new Error(`Request failed with status ${response.status}`); 
  }
}

fetchURLData2('https://jsonplaceholder.typicode.com/todos/1')
fetchURLData2('https://jsonplaceholder.typicode/todos/')

 // c)
async function getData(urls) {
  const result = await Promise.all(urls.map(async(url) => {
    const response = await fetch(url)
    return response.json()
  }))
  console.log(result)
}

getData(['https://jsonplaceholder.typicode.com/todos/1','https://jsonplaceholder.typicode.com/todos/2','https://jsonplaceholder.typicode.com/todos/3'])






