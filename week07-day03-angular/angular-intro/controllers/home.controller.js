console.log('home.controller.js');

function HomeController(){
  var controller = this;
  var canShowGonzo = false;

  // Shows example of sending the click event to this handler –
  // see the markup, where the variable `$event` is passed to this method.
  controller.showGonzo = function(event) {
    console.log('showGonzo: event:', event);
    canShowGonzo = true;
  };
  controller.hideGonzo = function() {
    canShowGonzo = false;
  };

  controller.toggleGonzo = function() {
    canShowGonzo = !canShowGonzo;
  };

  controller.getGonzoVisibility = function(){
    return canShowGonzo;
  };

  controller.getGonzoVisibilityClass = function() {
    var className = 'isVisible';
    if(!canShowGonzo){
      className = 'isNotVisible';
    }
    return className;
  };
  controller.clearTrainerList = function() {
    controller.trainers = [];
  };
  controller.deleteOneTrainer = function(index) {
    controller.trainers.splice(index, 1);
  };
  controller.newName = function (index){
    controller.trainers[index] = controller.updateTrainerNames[index];
  };
  controller.canDisplayTrainerList = function (){
    return controller.trainers.length > 0;
  };
  controller.isAddButtonDisabled = function () {
    return !controller.newTrainerName;
    //doing !(not) it will change it in to a bollean value, and !!(not not ) will change it to true
    //as this is a disabled directive in the html it will only need to be !(not) as this will accept it

  };

  controller.addTrainer = function(){
    console.log('addTrainer: Form:', controller.newTrainerName);
    controller.trainers.push(controller.newTrainerName);
    controller.newTrainerName = '';

  };

  function init(){
    console.log('inside the HomeController');
    controller.newTrainerName = '';
    controller.updateTrainerNames = [];
    controller.trainers = ['Steve', 'Matt', 'Ollie', 'Niall'];
    controller.title = 'Home Page';
    controller.hideGonzo();
  }
  init();
}

angular
  .module('myFirstApp', [])
  .controller('HomeController', HomeController);
