const user = {
  email: 'joe@gmail.com'
}

try {
  // Produce a ReferenceError
  // myFunction();

  // Produce a type error
 //  null.myFunction();

  // Will produce syntax error
  // eval('Hello World');

  // Will produce URIError
  // decodeURIComponent('%');

  if (!user.name){
    // throw 'User has no name'
    throw new SyntaxError('User has no name')
  }

} catch(e) {
  console.log(`User error: ${e.message}`)
  // console.log(e);
  // console.log(e.message);
  // console.log(e.name);
  // console.log(e instanceof ReferenceError)
} finally {
  console.log('Finally runs regardless of result...');
}


console.log('Program continues...');