/*## Print a Box

Given a height and width, print a box consisting of * characters as its border. For example, given the height of 4 and the width of 6, you should print:

```
******
*    *
*    *
******
```
*/
var n = 10;
for(var i = 0; i < n; i++){
  var row = "";
  if(i > 0 && i < n-1){
    row = row + '*';
    for(var k = 0; k < n-2; k++){
      row = row + ' ';
    }
    row = row + '*';
  }else {
    for(var j = 0; j < n; j++){
      row = row + "*";
    }
  }
   console.log(row);
}
