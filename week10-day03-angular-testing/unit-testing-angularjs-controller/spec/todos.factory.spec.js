describe('TodosFactory', () => {
  let factoryToTest;

  beforeEach(module('todosApp'));

  beforeEach(inject((TodosFactory) => {
    factoryToTest = TodosFactory;
  }));

  describe('list', () => {
    it('Should show a list of an emply array', () => {
      expect(factoryToTest.list.length).toEqual(0);
    });
  });

  describe('add()', () => {
    it('Should add a new todo to the list', () => {
      const newTodo = 'Wash cloths';
      factoryToTest.add(newTodo);
      expect(factoryToTest.list).toContain(newTodo);
    });
    it('Should add a new todo item to an empty todo list', () => {
      const newTodo = 'Do shopping';
      factoryToTest.add(newTodo);
      var arrayList = 0;
      expect(factoryToTest.list[arrayList]).toEqual(newTodo);
    });
  });

  describe('clear()', () => {
    it('Should clear the todo list', () => {
      factoryToTest.list.push('Wash cloths', 'Do shopping');
      factoryToTest.clear();
      expect(factoryToTest.list.length).toEqual(0);
    });
  });
});
