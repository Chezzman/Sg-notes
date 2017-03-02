

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
  lastName: 'Franklin',
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
  }else{
    console.log('Wait they are not the same');
  }

if ({} == {}){
  console.log('wow its the same');
}else{
  console.log('This is not equal too');
}

console.log('----functions:');//function section...

var capitalCity = 'london';

function createPerson(firstName, lastName, email, age){
  var newPerson = {
    firstName: firstName,
    lastName: lastName,
    email: email,
    age: age,
    capitalCity: capitalCity,
    fullName: function(){
      return firstName + ' ' + lastName + ' from ' + capitalCity;
    }

  };

  return newPerson;

}

//createPerson('Harald' , 'Kumara' , 'Jame@example.com' , 12);

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
var asma = createPerson('Asma', 'Chaima', 'achaima@spartaglobal.co', 23);
var tola = createPerson('Tola' , 'Olaoke', 'tolaoke@spartaglobal.co', 24);
var harald = createPerson('Harald' , 'Kumara' , 'Jame@example.com' , 12);
console.log('new person\'s full name: ' , harald.fullName());

people = [];
people.push(tola, harald, asma);


function isOldEnough(age){
  return (age >= 18);
}

if (isOldEnough(harald.age)){
  console.log('Come in');
}else {
  console.log('come back when you are old enough...');
}

//one way of doing multiple objects in a array
for(i = 0; i < people.length ; i++){
  if (isOldEnough(people[i].age)) {
    console.log(people[i].fullName(), 'is old enough!');
  } else{
    console.log(people[i].fullName(), 'is Not old enough...');

  }

}

//ternary way

// for(i = 0; i < people.length ; i++){
//   console.log(people[i].fullName(), (isOldEnough(people{i}.age)) ? 'is onld enough' : 'is not old enough');
//
// }



//<-----BREAK TIME----->


console.log('--- 00 Javascript');


function Circle(radius){
  //this.PI = 3.14;
  this.radius = radius;
  //one way to write and instance method
  this.circumference = function (){
    return 2 * Circle.PI * this.radius;
  };

}
//static (or class) property/varible:
Circle.PI = 22/7;

//another way to write an instance method:
//add it to the prototype
Circle.prototype.area = function () {
  return Circle.PI * this.radius * this.radius;
};




var plate = new Circle(7);
var coin = new Circle(1.2);
var circles = [coin, plate];
//class should have a capital letter 'Circle'
for (i = 0; i < circles.length ; i++){
  console.log('Radius is:', coin.radius);
  console.log('Circumference is;' , coin.circumference());
  console.log('Area is;' , coin.area());
}














// _____________________________________
