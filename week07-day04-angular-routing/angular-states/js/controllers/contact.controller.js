function ContactController() {
  var controller = this;

  function init(){
    console.log('Contact Controller', controller);
  }
  init();
}

angular
  .module('angularstates')
  .controller('ContactController', ContactController);
