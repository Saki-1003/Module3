//task1

const allPizzaProcess = function() {

const pizzaProcess1 = function() {
  console.log('1. Started preparing pizza')
}
pizzaProcess1()

const pizzaProcess2 = function() {
  console.log('2. Made the base')
}
pizzaProcess2()

function pizzaProcess3() {
  console.log('3. Added the sauce and cheese')
}
pizzaProcess3()

function pizzaProcess4() {
  console.log('4. Added the pizza toppings')
}
pizzaProcess4()

const pizzaProcess5 = () => console.log('5. Cooked the pizza')
pizzaProcess5()

const pizzaProcess6 = () => console.log('6. Pizza is ready')
pizzaProcess6()

}

allPizzaProcess()

//task2

function printPizzaProcess(message) { 
  console.log(message) 
} 

setTimeout(printPizzaProcess, 500, '1. Started preparing pizza'); 
setTimeout(printPizzaProcess, 700, '2. Made the base'); 
setTimeout(printPizzaProcess, 500, '3. Added the sauce and cheese'); 
setTimeout(printPizzaProcess, 1000, '4. Added the pizza toppings'); 
setTimeout(printPizzaProcess, 800, '5. Cooked the pizza'); 
setTimeout(printPizzaProcess, 500, '6. Pizza is ready'); 

//task3

const promisePizza = new Promise((resolve, reject) => setTimeout(() => resolve('1. Started preparing pizza'),500))
.then((result) => {
  console.log(result);
  return new Promise((resolve, reject) => setTimeout(() => resolve('2. Made the base'),700))
}).then((result) => {
  console.log(result);
  return new Promise((resolve, reject) => setTimeout(() => resolve('3. Added the sauce and cheese'),500))
}).then((result) => {
  console.log(result);
  return new Promise((resolve, reject) => setTimeout(() => resolve('4. Added the pizza toppings'),1000))
}).then((result) => {
  console.log(result);
  return new Promise((resolve, reject) => setTimeout(() => resolve('5. Cooked the pizza'),800))
}).then((result) => {
  console.log(result);
  return new Promise((resolve, reject) => setTimeout(() => resolve('6. Pizza is ready'),500))
}).then((result) => {
  console.log(result);
})

//task4

async function printPizzaProcess() {
  const result = await Promise.all(processes.map(()=> {
    
  }))
}


