describe('DuckController', () => {
  let controllerToTest;

  beforeEach(() => {
    module('DuckApp');
    inject(($controller) => {
      controllerToTest = $controller('DucksController');
    });
  });

  describe('initialisation', () => {
    //need an it statement and at least a console log to promt the tests. and in this case get the error message up.

  });
});
