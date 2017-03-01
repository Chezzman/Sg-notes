console.log('In Main.js');
document.addEventListener('DOMContentLoaded' , function () { 
  console.log(document); //to get the HTML with in console, layout like the element tab

//document.body
//document.body.children

//document.head.children[3].innerHTML = 'Merry Hunaka Title';
//
// document.getElementsByIdTagName('title');
//
// document.getElementsByTagName('title')
// [title]0: titlelength: 1__proto__: HTMLCollection
//  document.getElementsByTagName('title')[0]
// <title>Dom, events and Jquery</title>
// document.getElementsByTagName('title')[0].innerHTML = "Yo Im yo title now....";


//document.getElementsByTagName('li')[2].innerHTML = 'Yo mumma better not make me those cookies with raisens again...';

//document.getElementsByTagName('li');

//document.getElementsByTagName('title')[0].innerHTML = 'Front end doesnt choose the title...';

//
// var selected = document.querySelectorAll('.selected');
//
// console.log('selected' , selected);
//




  console.log('_____creating a new li, giving it a class, and putting style on the select class');
  console.log('selected List Items' , selectedListItems);
  var newListItem = document.createElement('li');


  newListItem.innerHTML = 'Im New!';
  newListItem.className = 'selected';
// newListItem.className = 'selected';



//we are going to call .appendChild() on the parent <ul> element.
//that <ul> eleent has an id attribute.
  var listContainer = document.getElementById('item-list');

  listContainer.appendChild(newListItem);



  var spaceDense = document.createElement('li');
  spaceDense.innerHTML = 'Wow Space things In DOM';
  listContainer.appendChild(spaceDense);

  var selectedListItems = document.querySelectorAll('li.selected');


  for(var i = 0 ; i < selectedListItems.length ; i++) {
    console.log('selected list item:', selectedListItems[i].stlye);
    selectedListItems[i].style.color = 'red';
  }
  console.log(newListItem);


  console.log('____Dom events... css');

  var touchme = document.getElementById('touch');

  touchme.addEventListener('click' , function () {
    touchme.innerHTML = 'something PG';
    alert('Something also pg....');

  });



});
//function handleButtonClick(){
// alert('Clicked!')
// document.getElementById('touch').innerHTML = 'Something PG';
//}
//touchme.addEventListener('click', handleButtonClick)
