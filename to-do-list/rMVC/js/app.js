function mainRouter($stateProvider, $urlRouterProvider){
  $stateProvider
    .state(
      'home',
    {
      url: '/',
      templateUrl: '../states/home.html'
    })
      .state('edit',
    {
      ulr: '/edit',
      templateUrl: '../states/edit.html'
    })
      .state('addTodo',
    {
      url: '/addTado',
      templateUrl: '../states/add-todo.html'

    });

  $urlRouterProvider.otherwise('/');

}

angular
  .module('todolist', ['ui.router'])
  .config(mainRouter);
