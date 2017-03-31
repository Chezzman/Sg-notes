function HomeController() {
  var controller = this;
  controller.showWhenDone = function(todos){
    controller.todosDone.push(todos);

  };
  function init(){
    controller.title = 'Todo';
    controller.todos = ['Remove ComicSans', 'Tidy Up Code', 'Loose your self in the music'];
    controller.todosDone = [];
  }

  init();
}


angular
  .module('angularstates')
  .controller('HomeController', HomeController);
