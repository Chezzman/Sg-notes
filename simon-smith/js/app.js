function mainRouter($stateProvider, $urlRouterProvider){
  $stateProvider
    .state(
      'home',
    {
      url: '/',
      templateUrl: '../states/home.html'
    })

    .state(
      'trumpcats',{
        url: '/trumpcats',
        templateUrl: '../states/trumpcat.html'
      }
    )
    .state('extremeFrisbee',
    {
      url: '/extremeFrisbee',
      templateUrl: '../states/extreme-frisbee.html'
    })

    .state('monsterTrucks',
    {
      url: '/monsterTrucks',
      templateUrl: '../states/monster-trucks.html'
    });

  $urlRouterProvider.otherwise('/');
}

angular
  .module('SimonSmith', ['ui.router'])
  .config(mainRouter);
