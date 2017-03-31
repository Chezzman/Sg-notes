function NewController() {
  var controller = this;

  function init(){
    console.log('New controller', controller);

  }
  init();
}

angular
  .module('angularstates')
  .controller('NewController', NewController);
