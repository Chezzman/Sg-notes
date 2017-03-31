function EditController() {
  var controller = this;

  function init(){
    console.log('Edit Controller', controller);
    controller.title = 'Edit ToDo';

  }

  init();
}

angular
  .module('angularstates')
  .controller('EditController', EditController);
