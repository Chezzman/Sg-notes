function TrumpController(){
  var controller = this;
  controller.images = [
    'images/trump-cats/trumpcat1.jpg',
    'images/trump-cats/trumpcat2.jpg',
    'images/trump-cats/trumpcat3.jpg'

  ];
  function init(){
    console.log('HomeController', controller);
  }
  init();
}

angular
  .module('SimonSmith')
  .controller('TrumpController', TrumpController);
