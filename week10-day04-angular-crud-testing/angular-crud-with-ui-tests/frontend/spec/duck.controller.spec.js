describe('DuckController', () => {
  let controllerToTest;
  let mockDucksFactory;

  beforeEach(() => {
    module('DuckApp');


    inject(($controller) => {
      controllerToTest = $controller('DucksController', {DuckFactory: mockDucksFactory});
      //calling the controller before using it
    });
  });



});
