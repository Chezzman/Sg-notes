function completeStatus(){
  return function(inputArray, isComplete){
    return inputArray.filter(function (element){
      return element.isComplete === isComplete;
    });
  };
}


angular
  .module('TodoApp')
  .filter('completeStatus', completeStatus);
