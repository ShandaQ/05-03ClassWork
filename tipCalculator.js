/* Given the amount of a bill as a number, and a level of service - which can be "good", "fair", or "bad", print the total bill with the tip included. The amount of tip given for each level of service is defined by:
```
"good" -> 20%
"fail" -> 15%
"bad"  -> 10%
```*/

var bill = 37;
var tip = 0;
var servive = "fail";
var totalBill = 0;

if(servive == "good"){
  totalBill = (bill * .20) + bill;
  console.log("Your total plus tip is $" + totalBill);
}else if (servive == "fail") {
  totalBill = (bill * .15) + bill;
  console.log("Your total plus tip is $" + totalBill);
}else {
  totalBill = (bill * .10) + bill;
  console.log("Your total plus tip is $" + totalBill);
}
