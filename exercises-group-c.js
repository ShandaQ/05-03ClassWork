/*Given a string, print the string uppercased. #string #easy*/
console.log("Given a string, print the string uppercased");
var str = "today is tuesday";

var upperStr = str.toUpperCase();
console.log("Original string" + str);
console.log(upperStr);

/*Given a string, print the string reversed. #string #loop #easy*/
console.log("Given a string, print the string reversed");

var reverseStr = str.split(" ").reverse();
console.log(reverseStr.toString());

/*Given a string, print "<string> is a palindrome" if it is a palindrome, or "<string> is not a palindrome" if it is not. What is a palindrome? <https://en.wikipedia.org/wiki/Palindrome>*/
console.log("Given a string, print <string> is a palindrome if it is a palindrome, or <string> is not a palindrome if it is not");

var testStr = "noon";
var revStr = testStr.split(" ").reverse().toString();
//console.log(revStr);

if(testStr === revStr){
  console.log(testStr + " is a palindrome.");
}
else {
  console.log(testStr + " is not a palindrome.")
}

/*Given a paragraph of text, for each word present in the paragraph, print the number of time the word was used in the paragraph. Example: for the sentence: "The Caesar cipher is one of the earliest known and simplest ciphers." The output should be:

```
the: 2
caesar: 1
cipher: 2
is: 1
one: 1
of: 1
earliest: 1
known: 1
and: 1
simplest: 1
```

The order in which the words are printed doesn't matter. #loop #string #medium #object #math*/
console.log("Given a paragraph of text, for each word present in the paragraph, print the number of time the word was used in the paragraph");

var para = "The Caesar cipher is one of the earliest known and simplest ciphers";
var wordCount = 0;
var paraArray = para.toLowerCase().split(" ");

for(var i =0; i < paraArray.length; i++){
  for(var j =0; j < paraArray.length; j++){
  if(paraArray[i] === paraArray[j]){
    wordCount++;
    //paraArray.splice(j,1);
  }

  }
  console.log(paraArray[i] + ": " + wordCount);
  wordCount = 0;
}
