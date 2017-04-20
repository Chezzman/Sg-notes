function DuckController($state, $stateParams, DuckFactory) {
  const controller = this;

  controller.getDuck = () => {
    const duckId = $stateParams.duckId;

    DuckFactory.getOne(duckId).then(
      (success) => {
        controller.selectedDuck = success.data;
      },
      (error) => {
        console.warn('Error getting duck:', error);
      }
    );
  };

  controller.addDuck = () => {
    console.log('addDuck()');
    DuckFactory.createOne(controller.newDuck).then(
      (success) => {
        console.log('Created new duck:', success);
        $state.go('home');
      },
      (error) => {
        console.warn('Error creating duck:', error);
      }
    );
  };

  controller.deleteDuck = (duckId) => {
    DuckFactory.deleteOne(duckId).then(
      (success) => {
        console.log('duck deleted:', success);
      },
      (error) => {
        console.warn('Error deleting duck:', error);
      }
    );
  };

  controller.editDuck = (duckId) => {
    $state.go('edit', { duckId });
  };

  controller.updateDuck =  () => {
    DuckFactory.editOne(controller.selectedDuck.duck).then(
      (success) => {
        console.log('duck updated:', success);
      },
      (error) => {
        console.warn('Error updating duck:', error);
      }
    );
  };

  function init() {
    console.log(controller);
    controller.selectedDuck = undefined;
    controller.allDucks = [];
    controller.newDuck = {};
    controller.colors = ['red', 'green', 'blue'];
    DuckFactory.getAll().then(
      (success) => {
        controller.allDucks = success.data;
      },
      (error) => {
        console.warn('Error getting ducks:', error);
      }
    );
  }

  init();
}

DuckController.$inject = ['$state', '$stateParams', 'DuckFactory'];
angular
  .module('DuckApp')
  .controller('DuckController', DuckController);
