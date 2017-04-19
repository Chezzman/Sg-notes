
describe('TodosController', () => {
  let controllerToTest;

  beforeEach(() => {
    // naming the app
    module('todosApp');

    inject(($controller) => {
      controllerToTest = $controller('TodosController');
      //calling the controller before using it
    });
  });

  describe('initialisation', () => {
    it('Sahould set inputText correctl', () => {
      expect(controllerToTest.inputText).toEqual('');
      //checking to see if ths work
    });

    it('Should set inputText correctly', () => {

      expect(controllerToTest.list).toEqual([]);

    });
  });
});
