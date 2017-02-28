console.log('in main.js');

// <_______This is an object___________>
var person2 = {
  firstName: 'Bob',
  lastName: 'Le Plant',
  email: 'bob@spartaglobal.co',
  age: 12.5
};

var person1 = {
  firstName: 'Aretha',
  lastName:'Franklin',
  email: 'ms.legend@example.com',
  age: 29
};
var person3 ={
  fristName: 'Joe',
  age: 4,
  hobbies: ['boxing', 'hitting']
};

var people = [ person1, person2, person3 ];
// <-- Loop attempt

for (var i = 0; i < people.length ; i ++) {
  console.log(people[i].firstName, people[i].age);
}

 if ({} === {}){
   console.log('they are the same');
 }
   else{
     alert('Wait they are not the same');
   }

if ({} == {}){
  console.log('wow its the same');
}else{
  console.log('This is not equal too');
}

console.log('----functions:');//function section...

function createPerson(firstNameParam, lastName, email, age){
  var newPerson = {
    firstName: firstNameParam,
    lastName: lastName,
    email: email,
    age: age

  };

  return newPerson;

}

createPerson('Harald' , 'Kumara' , 'Jame@example.com' , 12);

// console.log('New Person' , newPerson);
//
// function createPerson(firstNameParam, lastName, email, age){
//   var newPerson = {
//     firstName: firstNameParam,
//     lastName: lastName,
//     email: email,
//     age: age
//
//   };
//
//   console.log('New person:' , newPerson);
//
// }
// var harald = createPerson('Harald' , 'Kumara' , 'Jame@example.com' , 12);
// console.log('newPerson' , harald)

function isOldEnough(age){
  return (age >= 18);
}

if (isOldEnough(17)){
  console.log('Come in');
}else {
  console.log('come back when you are old enough...');
}


//Bellow attempt at a for loop.
// var txt = "";
// var x;
// for (x in people) {
//     console.print(firstName, age);
// }

// <<_______And this is an Array_______>>





var ages = [
  24,
  25,
  29,
  42
];
