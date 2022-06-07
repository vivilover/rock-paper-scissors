const demo = document.querySelector(".demo");

function calculate() {
  for(let i = 0; i < 10; i++) {
    let newResult = `${i} * ${i} = ${i * i}`;
    demo.textContent += `${newResult}`;
  }
  demo.textContent += `\nCalculation is finished...\n`;
}
const calculateBtn = document.querySelector(".calculate");
const clearBtn = document.querySelector(".clear");

calculateBtn.addEventListener('click', calculate);
clearBtn.addEventListener('click', () => demo.textContent = '');

// const reverseString = function(str) {

//   let strArr = str.split("");
//   let strLength = strArr.length;
//   console.log(strArr);
//   let newStrArr = [];
//   let newStr = "";

//   for(let i = 0; i < strLength; i++) {
//     newStrArr.push(strArr.pop());
//     console.log(strArr);
//     // console.log(strArr.pop());
//   }
//   newStr = newStrArr.join("");
//   return newStr;
// };
// console.log(reverseString('hello'));

// const removeFromArray = function(array, ...remove) {
//   let copyArray = array;

//   // iterate over the items we want to remove
//   for(let i = 0; i < remove.length; i++) {
//     // console.log(remove[i]);
//     // using for loop, if the item is found in the array, we splice it.
//     for(let j = 0; j < copyArray.length; j++) {
//       if((copyArray[j] === remove[i]) && (typeof copyArray[j] === typeof remove[i])) {
//         copyArray.splice(j, 1);
//       }

//     }
//   }
//   return copyArray;
// };
// removeFromArray([1, 2, 3, 4, 5], "hello", "3", 4, 5);

function sumAll(start, end) {
  // Negative number cannot be the starting number
  if(start < 0) {
    return "ERROR";
  }
  if(typeof start === 'string' || typeof end === 'string') {
    return "ERROR";
  }
  if(Array.isArray(start) || Array.isArray(end)) {
    return "ERROR";
  }
  let sum = 0;
  if(start > end) { // start number bigger than end number. EX) 100, 10
    let index = start;
    for( ; index >= end; index--) {
      sum += index;
    }
  } else {
    let index = start;
    for( ; index <= end; index++) {
      sum += index;
    }
  }
  return sum;

  function leapYear(year) {
    return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
  }
}

const removeFromArray = function (...args) {
  const array = args[0];
  const newArray = [];
  array.forEach((item) => {
    if(!args.include(item)) {
      newArray.push(item);
    }
  })
  return newArray;
}
console.log("Check");

for(let i = 0; i < 10; i++) {
  if(i === 5) {
    break;
  } else {
    console.log(i);
  }
}