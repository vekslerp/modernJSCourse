let re;
// Literal Characters
re = /hello/;
re = /hello/i;

// Metacharacter symbols
re = /^h/i; // Must start with
re = /d$/i; // Must end with
re = /^hello$/i; // Must begin and end with
re = /h.llo/i; // Matches any ONE character
re = /h*llo/i; // Matches any character 0 or more time
re = /gre?a?y/i; // Optional character
re = /gre?a?y\?/i; // Escape character (can be EMPTY, what is bad)

// Brackets [] - Character Sets
re = /gr[ae]y/i // Must be an a or e
re = /[GF]ray/i // Must be a G or F
re = /[^GF]ray/ // Match anything except a G of F.
re = /[A-Z]ray/ // Match any uppercase letter
re = /[a-z]ray/ // Match any lowercase letter
re = /[A-Za-z]ray/ // Match any letter
re = /[A-Za-z]ray/ // Match any letter
re = /[0-9][0-9]ray/ // Match any digit

// Bracer {} - Quantifiers
re = /Hel{2}o/i // Must occur exactly {a} amount of times.
re = /Hel{2,4}o/i // Must occur between {a-b} amount of times.
re = /Hel{2,}o/i // Must occur at least {a} amount of times.

// Parenthesis () - Grouping
re = /^([0-9]x){3}$/

// Shorthand Character Classes
re = /\w/; // Word character - alphanumeric or _ 
re = /\w+/; // + equals to one or more
re = /\W/; // Non-Word character
re = /\d/; // Match any digit
re = /\d+/; // Match any digit 0 or more times
re = /\D/; // Match any non-digit
re = /\s/; // Match whitespace char
re = /\S/; // Match non-whitespace char
re = /Hell\b /i; // Word boundary

// Assertions
re = /x(?=y)/; // Match x only if it's followed by y
re = /x(?!y)/; // Match x only if it's NOT followed by y

// String to match
const str = '2ebvxfvq';

// Log result
const result = re.exec(str);
console.log(result);

function reTest(re, str) {
  if(re.test(str)){
    console.log(`${str} matched ${re.source}`);
  } else {
    console.log(`${str} does NOT match ${re.source}`)
  }
}

reTest(re, str);