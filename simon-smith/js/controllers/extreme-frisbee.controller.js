function FrisbeeController(){
  var controller = this;
  controller.images = [
    'images/extreme-frisbee/dentchcatch1.jpg',
    'images/extreme-frisbee/dentchcatch2.jpg',
    'images/extreme-frisbee/dentchcatch3.jpg'
  ];
  
  function init(){
    console.log('HomeController', controller);
  }
  init();
}

angular
  .module('SimonSmith')
  .controller('FrisbeeController', FrisbeeController);
