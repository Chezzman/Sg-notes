function AddTadoController(){
  var controller = this;

  controller.addTado = function(){
    controller.todos.push(controller.newTado);
    controller.newTado = '';
  };
  function init(){
    console.log('Add-TADO list controller: ', controller);
    controller.newTado = '';

  }
  init();
}

angular
  .module('todolist')
  .controller('AddTadoController', AddTadoController);
