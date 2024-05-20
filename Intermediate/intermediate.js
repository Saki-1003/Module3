//1

function ucFirstLetters(txt) {
  let txtArry = txt.split(' ')
  txtArry.forEach(function(el, i) {
  let result = txtArry[i].substring(0,1).toUpperCase()+txtArry[i].substring(1)
  console.log(result)
  })
}
ucFirstLetters("los angeles")
ucFirstLetters("new york") 
ucFirstLetters("rio de janeiro") 

//2

/* a)*/
function truncate(str, max) {
  if(str.length > max) {
    return str.substring(0, max) + '...'
  } else {
    return str
  }
}

console.log(truncate('This text will be truncated if it is too long', 25))

/* b)*/
function truncate2(str, max) {
  return  str.length > max? str.substring(0, max) + '...':str
}

console.log(truncate2('This text2 will be truncated if it is too long', 25))


//3
const animals = ['Tiger', 'Giraffe'] 

/*a)*/
animals.push('Lion', 'Elephant')
console.log(animals)

/*b)*/
animals.unshift('Kangaroo', 'Koala')
console.log(animals)

/*c)*/
animals.sort()
console.log(animals)

/*d)*/
function replaceMiddleAnimal(newAnimal) {
   animals.splice(2, 1, newAnimal)
   return animals
}
console.log(replaceMiddleAnimal('Leopard'))

/*e)*/
function findMatchingAnimals(beginWith) {
  
  let animalList ="";
    
    for(let i = 0; i < animals.length; i++) {
      let firstLetter = animals[i].substring(0,1)
      // console.log(firstLetter)

      if(firstLetter === beginWith.toUpperCase()) {
        animalList += animals.slice(animals.indexOf(animals[i]), animals.indexOf(animals[i])+1) + ','  
    }
    
  }
  let animalListArray = animalList.split(",")
  animalListArray.pop()
  console.log(animalListArray)
  }

findMatchingAnimals('l')

//4

/* a)*/
// function camelCase(cssProp) {
//   let cssSplitArry = cssProp.split('-')
//   let upCase = "";
  
//   if(cssSplitArry.length <= 1) {
//     console.log(cssProp)
//   } else {
    
//     for(let i = 1; i < cssSplitArry.length; i++) {
//       upCase += cssSplitArry[i].substring(0,1).toUpperCase()+cssSplitArry[i].substring(1)
//     }

//    let mergeCase = cssSplitArry[0] + upCase
//    console.log(mergeCase) 
//   }  
// }

// camelCase('margin-left')
// camelCase('list-style-type')
// camelCase('opacity')

 /* b)*/
//  function camelCase(cssProp) {
//   let cssSplitArry = cssProp.split('-')
//   let upCase = "";
  
//   if(cssSplitArry.length <= 1) {
//     console.log(cssProp)

//   } else {
    
//     for(let i of cssSplitArry) {
//       if(upCase.length == 0) {
//         upCase += i
//       }  else {
//         upCase += i.substring(0,1).toUpperCase()+i.substring(1)
//       }
//     }
//     console.log(upCase)
//   }  
// }

// camelCase('margin-left')
// camelCase('list-style-type')
// camelCase('opacity')


/* c)*/

function camelCase(cssProp) {
  let cssSplitArry = cssProp.split('-')
  let upCase = ""
  let i = 1;

  cssSplitArry.forEach((item, i) => {i > 0 ? 
    upCase += cssSplitArry[i].substring(0,1).toUpperCase()+cssSplitArry[i].substring(1):
    upCase += cssSplitArry[0]
  })

  console.log(upCase)
}  

camelCase('margin-left')
camelCase('list-style-type')
camelCase('color')

//5

let twentyCents = 0.20 
let tenCents = 0.10

let fixedTwenty = twentyCents.toFixed(2); 
let fixedTen = tenCents.toFixed(2); 
console.log(fixedTwenty + fixedTen) //this returns 0.200.10

// a) Because computer uses binary and decimal numbers are not accurately represented by binary, it returns weird number.
// The above calculation doesn't work since toFixed and toPrecision returns a string representing the number.

// b)
function currencyAddition(val1, val2) {
  let money1 = val1*100
  let money2 = val2*100
  let result = Math.round(money1 + money2)/100
  return result.toFixed(2)
}

console.log(currencyAddition (0.20, 0.10))

// c)

function currencyOperation(float1, float2, operation) {
    
  let Intfloat1 = float1 * 100
  let Intfloat2 = float2 * 100
  
  switch (operation) {
    case '-':
      let subCalc = Math.round(Intfloat1 - Intfloat2)/100
      console.log(subCalc);
      break;
    case '/':
      let divCalc = Math.round(Intfloat1 / Intfloat2)/100
      console.log(divCalc);
      break;
    case '*':
      let mulCalc = Math.round(Intfloat1 * Intfloat2)/100
      console.log(mulCalc);
      break;
    default:
      let addCalc = Math.round(Intfloat1 + Intfloat2)/100
      console.log(addCalc);
  }
}
currencyOperation(0.20, 0.10, '/')


// d)
function currencyOperation2(float1, float2, operation, numDecimals) {
     
  let Intfloat1 = float1 * 10**numDecimals
  let Intfloat2 = float2 * 10**numDecimals

  
  switch (operation) {
    case '-':
      let subCalc = Math.round(Intfloat1 - Intfloat2)/10**numDecimals
      console.log(subCalc);
      break;
    case '/':
      let divCalc = Math.round(Intfloat1 / Intfloat2)/10**numDecimals
      console.log(divCalc);
      break;
    case '*':
      let mulCalc = Math.round(Intfloat1 * Intfloat2)/10**numDecimals
      console.log(mulCalc);
      break;
    default:
      let addCalc = Math.round(Intfloat1 + Intfloat2)/10**numDecimals
      console.log(addCalc);
  }
}
currencyOperation2(0.1, 0.123456789, '+', 9)

// 6

const colours = ['red', 'green', 'blue', 'yellow', 'orange', 'red', 'blue', 'yellow'] 
const testScores = [55, 84, 97, 63, 55, 32, 84, 91, 55, 43] 
const students =['Tom', 'Will', 'Mark', 'John', 'Mark', 'Tony', 'Tom' ]

function unique(duplicatesArray) {
  let newArray = Array.from(new Set(duplicatesArray))
  return newArray
}

console.log(unique(colours)) // [ 'red', 'green', 'blue', 'yellow', 'orange' ] 
console.log(unique(testScores)) //
console.log(unique(students))

// 7

const books = [ 
  { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', year: 1925 }, 
  { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960 }, 
  { id: 3, title: '1984', author: 'George Orwell', year: 1949 }, 
  { id: 4, title: 'Brave New World', author: 'Aldous Huxley', year: 1932 }, 
  { id: 5, title: 'The Catcher in the Rye', author: 'J.D. Salinger', year: 1951 }, 
];

/*a)*/
function getBookTitle(bookId) {
  let bookTitle = books.find(item => item.id == bookId)
  console.log(bookTitle.title)
}
getBookTitle(1)
getBookTitle(3)
getBookTitle(5)

/*b)*/
function getOldBooks() {
  let oldBooks = books.filter(item => item.year < 1950)
  console.log(oldBooks)
}

getOldBooks()

/*c)*/
function addGenre() {
  let bookWithGenre = books.map(item =>({...item, genre: item.genre='classic'}))
  console.log(bookWithGenre) 
}

addGenre()

/*d)*/

function getTitles(authorInitial) {
  let authors = books.filter(book => book.author.startsWith(authorInitial))
  let booksByAuthors = authors.map(book => book.title)
  console.log(booksByAuthors)
}

getTitles('H')

/*e)*/
// function latestBook() {
//   let booksClone = [...books].sort((item1, item2) => item1.year - item2.year)
//   let newestBook = booksClone[booksClone.length-1]
//   console.log(newestBook)
// }
// latestBook()

function latestBook() {

  let newestBook = books.find(book => book.year == 1960)
  console.log(newestBook)
}
latestBook()

// 8
const phoneBookABC = new Map() //an empty map to begin with 
phoneBookABC.set('Annabelle', '0412312343') 
phoneBookABC.set('Barry', '0433221117') 
phoneBookABC.set('Caroline', '0455221182')
console.log(phoneBookABC)

// a)
const phoneBookDEF = new Map()

// b)
phoneBookDEF.set('David', '0214544445')  
phoneBookDEF.set('Evan', '0223520521')
phoneBookDEF.set('Frank', '0238527411')
console.log(phoneBookDEF)

// c)
phoneBookABC.set('Caroline','0135823254')
console.log(phoneBookABC)

// d)
function printPhoneBook(contacts) {
 if(contacts.startsWith('A' ||' B' || 'C')) {
  phoneBookABC.set(contacts)
 } else
  phoneBookDEF.set(contacts)
}

// printPhoneBook('Avril')
console.log(phoneBookABC)

// e)
const objPhoneBookABC = Object.fromEntries(phoneBookABC)
const objPhoneBookDEF = Object.fromEntries(phoneBookDEF)
const mergeBooks = {...objPhoneBookABC, ...objPhoneBookDEF}
const phoneBook = new Map(Object.entries(mergeBooks))
console.log(phoneBook)

// f)
  for(let names of phoneBook.keys()) {
    console.log(names)
  }


// 9
let salaries = {
  "Timothy" : 35000, 
  "David" : 25000, 
  "Mary" : 55000, 
  "Christina" : 75000, 
  "James" : 43000 
};

// a)
function sumSalaries(salaries) {
  let Salary = Object.values(salaries)
  console.log(Salary)
  let sumSal = Salary.reduce((acc, init) => acc + init, 0)
  console.log(sumSal)
}
sumSalaries(salaries)

// b)

function topEarner(salaries) {
  let salAcc = ""
  
  for(let key in salaries) {
    salAcc += salaries[key] + ' '
  }

  let objArry = Object.entries(salaries)
  salaryArry = salAcc.split(' ').sort((a,b)=>a-b)
  let highestSalary = salaryArry[salaryArry.length-1]

  let findPerson = objArry.find(i => i[1] == highestSalary)
  let person = findPerson.map(item => findPerson[0]).pop()

  // console.log(salaryArry)
  // console.log(highestSalary)
  // console.log(findPerson)
  console.log(` A person earning the highest salary is ${person}`)
}

topEarner(salaries)

// 10
const today = new Date(); 
console.log('Current time is ' + today.toLocaleTimeString()) 
console.log(today.getHours() + ' hours have passed so far today')

// a)
let hours = today.getHours()
let minutes = hours * 60 + today.getMinutes()
console.log(minutes + ' minutes have passed so far today')

// b)
let seconds = minutes * 60 + today.getSeconds()
console.log(seconds + ' seconds have passed so far today')

// c)
let myAge = new Date('1985-10-03')
let now = new Date('2024-5-16')

let diffYears = now.getFullYear() - myAge.getFullYear()
let diffMonths = now.getMonth() - myAge.getMonth()
let countInDays = (now - myAge)/1000/60/60/24

if(diffMonths < 0) {
  diffYears -= 1
  diffMonths += 12 
}

let diffDays = Math.floor(countInDays - diffMonths*30 - diffYears*365)

console.log(`I am ${diffYears} years, ${diffMonths} months and ${diffDays} days old`)

// d)

function daysInBetween(date1, date2) {
  let startDate = new Date(date1)
  let endDate = new Date(date2)

  let diffMilsec = endDate - startDate
  let diffDays = Math.floor(diffMilsec/1000/60/60/24)
  console.log(diffDays)
}

daysInBetween('2024-5-15', '2025-6-15')