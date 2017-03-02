console.log('In Main.js');

$(function (){
  console.log('DOM Loaded (jQuery)');
  console.log('---USing Jquery');

//  var listcontainer = document.getElementById('item-list');
//  var listContainer2 = $('#item-list');

  var $listContainer2 = $('#item-list');
  var listContainer1 = document.getElementById('item-list');
  var $listItems = $('#item-list li');

  console.log('ListItems (JQuery): ', $listItems);
  console.log('JQ getting ID of ul' , listContainer1);
  console.log('JS Getting ID of ul' , $listContainer2);

  var $newListItem1 = $('<li>new item prepened by jquery</li>').addClass('dull');
  var $newListItem2 = $('<li></li>').addClass('garish').html('New item Prepended by jQuery');
  console.log('newListItem2.html(): ' , $newListItem2.html());
  listContainer1.prepend($newListItem1);
  $listContainer2.append($newListItem2);

  //JS... With out JQ
  // var listItems2 = document.getElementsByIdTagName('li');
  // for (var i = 0 ; i < listItems2.length ; i++){
  //   listItems2[i].classList.add('emphasised');
  // }

//with JQuery you spend 1/3 of the time crying at how much faster it is..........
  $listContainer2.children().addClass('emphasised');
  //
  // $('#touch').click(function (){
  //   alert('Are you kidding me!!!!')
  // });

  $('#touch').on('click', function(){
    alert('Eat my shorts');
  });
});



$(document).ready(function(){
  console.log('DOM LOADED.READY');
});

document.addEventListener('DOMContentLoaded' , function () {
  console.log('DOM Loaded (what DOMContentLoaded)');

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


console.log('_____JQuery');
