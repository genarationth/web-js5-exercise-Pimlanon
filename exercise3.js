//PART 1
const decreaseValue = (xValue) => {
    for (let i = 2; i <= xValue;) {  //start with 2+0.5 ... 10 
        console.log(xValue);
        xValue -= 0.5; 
    }
}
decreaseValue(10); 
console.log('----------------------')

//PART 2

function oddNumber(number) {
  let i = 0
  while (i <= number) {         //stopping condition
      if (i % 2 !== 0) {
          console.log(i)
      }
      i++                      //increments
  }
}
oddNumber(100);
console.log('----------------------')

//PART 3
//Ex1
let numberFirst = 1;             //start with 1
while (numberFirst < 7) {       //stopping condition
  console.log(`[${numberFirst}]`);
  numberFirst++;
}

console.log('--------Part3-Ex2---------')
//Ex2
const loopSquare = (n) => {
  let number = 1;
  while (number <= n) {
    console.log(`[${number}]`); 
    number++;
  }
}
loopSquare(6);
console.log('----------------------')

//PART 4
const sumLoop = (n) => {
  let i = 1;
  let sum = 0;
  while (i <= n) {
      sum += i;
      i++; 
  }
  console.log(sum); 
}

sumLoop(19);