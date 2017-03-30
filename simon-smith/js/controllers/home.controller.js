function HomeController(){
  var controller = this;
  function init(){
    console.log('HomeController', controller);
  }
  init();
}

angular
  .module('SimonSmith')
  .controller('HomeController', HomeController);
