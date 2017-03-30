function ContactController() {
  var controller = this;

  function init(){
    console.log('Contact Controller', controller);

    controller.details = {
      number: '666-666',
      email: 'satan@spawn.grawl',
      name: 'Jane Doe'
    };
  }

  init();
}

angular
  .module('angularstates')
  .controller('ContactController', ContactController);
