function MainRouter ($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('home', {
      url: '/todos',
      templateUrl: '/states/home.html'
    })
    .state('new', {
      url: '/todos/new',
      templateUrl: '/states/todo-new.html'
    })
    .state('show', {
      url: '/todos/:todoId',
      templateUrl: '/states/todo-show.html'
    })
    .state('edit', {
      url: '/todos/:todoId/edit',
      templateUrl: '/states/todo-edit.html'
    });

  $urlRouterProvider.otherwise('/todos');

}

angular
  .module('TodoApp', ['ui.router'])
  .constant('API_URL', 'http://localhost:3000')
  .config(MainRouter);
