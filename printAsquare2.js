/*Given a positive number n, print a square of nxn of * characters. n = 5

```
*****
*****
*****
*****
*****
```*/
/*STING OF * USE CONCAT*/

var n = 10;

for(var i = 0; i < n; i++){
  var row = "";
  for(var j = 0; j < n; j++){
    row = row + "*";
  }
   console.log(row);
}

console.log();
