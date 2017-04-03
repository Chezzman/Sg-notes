function MainRouter ($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('home', {
      url: '/ducks',
      templateUrl: '/states/home.html'
    })
    .state('new',{
      url: '/ducks/new',
      templateUrl: '/states/new.html'
    })

    .state('show',{
      url: '/ducks/:duckId',
      templateUrl: '/states/show.html'
    })
    .state('edit',{
      url: '/ducks/:duckId/edit',
      templateUrl: '/states/edit.html'
    });

  $urlRouterProvider.otherwise('/ducks');

}

angular
  .module('DuckApp', ['ui.router'])
  .constant('API_URL', 'http://localhost:3000')
  .config(MainRouter);


//constant or where we are getting the api, as this project has nodemon for the back end it will be on port 3000,
//but front end is running of a one line command python server on localhost 9000,
// as this constant shows where the front end will find the api we put 3000
