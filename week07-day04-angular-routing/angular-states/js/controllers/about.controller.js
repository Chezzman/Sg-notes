function AboutController() {
  var controller = this;

  function init(){
    console.log('About controller', controller);

  }
  init();
}

angular
  .module('angularstates')
  .controller('AboutController', AboutController);
