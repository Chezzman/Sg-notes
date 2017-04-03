function AuthController($state, AuthFactory) {
  var controller = this;

  controller.createUser = () => {
    controller.error = null;
    AuthFactory.$createUserWithEmailAndPassword(controller.email, controller.password).then(
      (firebaseUser) => {
        console.log('Firebase user:', firebaseUser);
        resetCredentials();
        $state.go('secret');
      },
      // the "() => {}" is called the arrow function which is used for annoyimous function used in ejs6
      (error) => {
        controller.error = error;
        console.warn('could not create user with email and password: ', error);
        resetCredentials();
      }
    );
  };
  controller.signIn = () => {
    controller.error = null;
    AuthFactory.$signInWithEmailAndPassword(controller.email, controller.password).then(
      () => {
        resetCredentials();
        $state.go('secret');
      },
      (error) => {
        controller.error = error;
        console.warn('could not login to user with email and password: ', error);
        resetCredentials();
      }
    );

  };
  controller.signOut = () => {
    AuthFactory.$signOut();
    $state.go('home');
  };

  function resetCredentials(){
    controller.email = null;
    controller.password = null;
  }

  function init(){
    controller.user = null;
    controller.error = null;
    controller.email = '';
    controller.password = '';
    AuthFactory.$onAuthStateChanged((user) => {
      console.log('auth state changed : user : ', user);
      controller.user = user;
    });
  }
  init();
}
AuthController.$inject = ['$state', 'AuthFactory'];

angular
  .module('myApp')
  .controller('AuthController', AuthController);
