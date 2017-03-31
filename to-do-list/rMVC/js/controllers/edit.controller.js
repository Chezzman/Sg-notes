function EditController(){
  var controller = this;
  function init(){
    console.log('Add-TADO list controller: ', controller);

  }
  init();
}

angular
  .module('todolist')
  .controller('EditController', EditController);
