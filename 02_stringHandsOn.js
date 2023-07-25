//1

console.log(`"     Hey you are doing Good, Keep it up        "`);
var string = "     Hey you are doing Good, Keep it up        ";
console.log(`============================================================================>`);


//2
var lenstr = string.length;
 console.log(`The String is:- ${string} The length of the string is:- ${lenstr}`);
 console.log(`============================================================================>`);


 //3
 var trimmedstring = string.trim();
 console.log(`The trimmed string is :- ${ trimmedstring } `);
 var getlenstr = trimmedstring.length
 console.log(`The length of the trimmed string is:- ${trimmedstring.length}`); 
 console.log(`============================================================================>`);


 //4

 console.log(`Extra spaces removed from the strings are:- ${lenstr - getlenstr}`);
 console.log(`============================================================================>`);

 //5
 console.log(`First Character of string is:- ${trimmedstring.charAt(0)} Last character of the string is:- ${trimmedstring.charAt(getlenstr-1)}`);
 console.log(`============================================================================>`);


 //6
 var splt = trimmedstring.split(` `)
 var spltlen = splt.length
 console.log(`Total words in the string are:- ${spltlen}`);
 console.log(`============================================================================>`);



 //7
 var ind = trimmedstring.indexOf("Good")
 console.log(`Index of "Good" in first is:- ${ind}`);
 console.log(`============================================================================>`);



 //8
 console.log(`Substring from index 22 using "substring()" is :-  ${trimmedstring.substring(22)}`);
 console.log(`Substring from index 22 using "slice()" is :- ${trimmedstring.slice(22)}`);
 console.log(`============================================================================>`);


 //9
 console.log(`Is string end with up? :- ${trimmedstring.endsWith('up')}`);
 console.log(`============================================================================>`);

 //10
 console.log(`Is string start with Hey? :- ${trimmedstring.startsWith('Hey')}`);
 console.log(`============================================================================>`);
 