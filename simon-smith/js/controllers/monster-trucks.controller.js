function TrucksController(){
  var controller = this;

  controller.images = [
    'images/monster-trucks/monstar-truck1.jpg',
    'images/monster-trucks/monstar-truck2.jpg',
    'images/monster-trucks/monstar-truck3.jpg'

  ];

  function init(){


    console.log('TrucksController', controller);
  }
  init();
}

angular
  .module('SimonSmith')
  .controller('TrucksController', TrucksController);
