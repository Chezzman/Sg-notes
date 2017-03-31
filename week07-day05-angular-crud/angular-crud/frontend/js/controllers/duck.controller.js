function DuckController($stateParams, DuckFactory){

  var controller = this;

  controller.getDuck = function () {
    var duckId = $stateParams.duckId;

    DuckFactory.getOne(duckId).then(
      function success(response){
        console.log('duck: ', response);
        controller.selectedDuck = response.data;
      },
      function error(error) {
        console.warn('Error getting duck: ', error);
      }
    );
  };

  function init(){
    console.log(controller);
    controller.selectedDuck = undefined;
    controller.allDucks = [];
    DuckFactory.getAll().then(
      function success(response){
        controller.allDucks = response.data;
        console.log('Console all duck', controller.allDucks);
      },
      function(error) {
        console.warn('error getting ducks:', error);
      }
    );
  }
  init();
}

//DuckController.$inject = ['DuckFactory'];

angular
  .module('DuckApp')
  .controller('DuckController', DuckController);


//controllers are more of a constracta function rather than a singalton
