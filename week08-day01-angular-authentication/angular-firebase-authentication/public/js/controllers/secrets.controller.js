
function SecretsController () {
  var controller = this;

  controller.secrets = [
    'Pineapples are red',
    'carrots are gold',
    'oranges are blue',
    'bannanas are purple',
    'pears are black',
    'avacardos are yellow',
    'potatos are teal',
    'sweat Potato are white',
    'Im colour blind'
  ];

}

angular
  .module('myApp')
  .controller('SecretsController', SecretsController);
