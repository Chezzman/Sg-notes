
describe('TodosController', () => {
  let controllerToTest;
  let MockTodosFactory;

  beforeEach(() => {
    // naming the app
    module('todosApp');
    MockTodosFactory = {
      list: [],
      add: jasmine.createSpy(),
      clear: jasmine.createSpy()
    };


//creating the instance
    inject(($controller) => {
      controllerToTest = $controller('TodosController', {TodosFactory: MockTodosFactory});
      //calling the controller before using it
    });
  });

  describe('initialisation', () => {
    it('Should initialise a list correctly', () => {
      expect(controllerToTest.list).toEqual([]);
      //checking to see if ths work
    });

    it('Should initialise inputText correctly', () => {

      expect(controllerToTest.inputText).toEqual('');

    });
  });

  describe('add()', () => {
    it('should call todos factory.add()with correct parameter',  () => {
      const inputText = 'new todo';

      controllerToTest.inputText = inputText;
      controllerToTest.add();
      expect(MockTodosFactory.add).toHaveBeenCalledWith(inputText);

    });
    it('should clear inputText', () => {
      const inputText = 'new todo 2';

      controllerToTest.inputText = inputText;
      controllerToTest.add();
      expect(controllerToTest.inputText).toEqual('');
    });
  });
  describe('isSubmitButtonDisabled()', () => {
    it('should return false when inputText is not empty', () => {
    //returns false when there is text inside
      controllerToTest.inputText = 'task';
      expect(!controllerToTest.inputText).toBe(false);
    });
    it('should return true when inputText is empty', () => {
      controllerToTest.inputText = '';
      expect(!controllerToTest.inputText).toBe(true);
    });
    //returns true when there is no text inside

  });

  describe('isClearButtonDisabled()', () => {
    it('should return false when task list is empty', () => {
      controllerToTest.list = [];
      expect(controllerToTest.list).toEqual([]);

    });
    it('should return ture when task list is not empty', () => {
      controllerToTest.list = ['I have to many tasks', 'complete  all the tasks'];
      expect(controllerToTest.list).toEqual(controllerToTest.list);
    });
  });
  describe('clear()', () => {
    it('should call todo Factory.clear()', () => {
      controllerToTest.clear();
      expect(MockTodosFactory.clear).toHaveBeenCalledWith();

    });
  });
});
