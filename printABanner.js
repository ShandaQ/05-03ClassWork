/*Given a string, print that string with a box around it. The box should stretch to the length of the string. For example, given the string "Welcome to Digital Crafts", you should print:

```
┏━━━━━━━━━━━━━━━━━━━━━━━━━┓
┃Welcome to Digital Crafts┃
┗━━━━━━━━━━━━━━━━━━━━━━━━━┛
```*/

var str = "Welcome to Digital Crafts";
var strLenght = str.length;

for(var i = 0; i < strLenght; i++){
  var row = '';
  for(var j = 0; j < strLenght; j++){
console.log()
