
function MainRouter ($stateProvider, $urlRouterProvider, $locationProvider) {

  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: '/states/home.html'
    })
    .state('signup', {
      url: '/signup',
      templateUrl: '/states/signup.html'
    })
    .state('login', {
      url: '/login',
      templateUrl: '/states/login.html'
    })
    .state('auth-required', {
      url: '/authrequired',
      templateUrl: '/states/auth-required.html'
    })
    .state('secret', {
      url: '/secret',
      templateUrl: '/states/secret.html',
      // before you go to this sate you must resolve the AUTH_REQUIRED
      resolve: {

        //injecting AuthFactory into this object with an array, stating each one you want to add
        currentAuth: [
          'AuthFactory',
          (AuthFactory) => {
            return AuthFactory.$requireSignIn();
          }
        ]
      }
    });

  $urlRouterProvider.otherwise('/');

}
MainRouter.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];

function AuthCatcher($rootScope, $state) {
  $rootScope.$on('$stateChangeError', (event, toState, toParams, fromState, fromParams, error) => {
    if (error === 'AUTH_REQUIRED'){
      $state.go('auth-required');
    }
  });
}

// old way of injecting these dependentcies, now we add it to the main function at the bottom
//AuthCatcher.$inject = ['$rootScope', '$state'];

angular
  .module('myApp', ['ui.router', 'firebase'])
  .config(MainRouter)
  .run(AuthCatcher);
