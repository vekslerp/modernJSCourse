// Person constructor
function Person(name, dob) {
  this.name = name;
  // this.age = age;
  this.birthday = new Date(dob);
  this.calculateAge = function(){
    const diff = Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }
}
 

// const brad = new Person('Brad', 36);
// const john = new Person('John', 30);

// console.log(john);

const brad = new Person('brad', '9-10-1980');
console.log(brad.calculateAge());