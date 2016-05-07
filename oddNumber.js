/*Print the odd numbers between 1 and 100 inclusive. #loop #if.*/

var number = 0;

while (number <= 100) {
  if (number % 2 !== 0){
    console.log(number);
  }
  number++;
}
