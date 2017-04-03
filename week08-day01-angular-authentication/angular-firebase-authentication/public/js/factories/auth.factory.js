/* global firebase */

function AuthRun(){
  var config = {
    apiKey: 'AIzaSyDIRr4ZHpTciqvkCSTHMvagUr0TEVacSZA',
    authDomain: 'angularauth-65e03.firebaseapp.com',
    databaseURL: 'https://angularauth-65e03.firebaseio.com',
    projectId: 'angularauth-65e03',
    storageBucket: 'angularauth-65e03.appspot.com',
    messagingSenderId: '955858884574'
  };
  firebase.initializeApp(config);

}
function AuthFactory($firebaseAuth){
  return $firebaseAuth();
}
//AuthFactory.$inject = ['$firebaseAuth'];


angular
  .module('myApp')
  .run(AuthRun)
  .factory('AuthFactory', ['$firebaseAuth', AuthFactory]);
