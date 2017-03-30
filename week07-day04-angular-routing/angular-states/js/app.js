function mainRouter($stateProvider, $urlRouterProvider){
  $stateProvider
    .state(
      'home',
    {
      url: '/',
      templateUrl: '../states/home.html'
    })

    .state('about',
    {
      url: '/about',
      templateUrl: '../states/about.html'
    })

    .state('contact',
    {
      url: '/contact',
      templateUrl: '../states/contact.html'
    });
  $urlRouterProvider.otherwise('/');
}
// Route: '#/users'  is the part in the url
// State: 'show-users'  angular will see what state you want to use and it will fill in the url


angular
  .module('angularstates', ['ui.router'])
  .config(mainRouter);
