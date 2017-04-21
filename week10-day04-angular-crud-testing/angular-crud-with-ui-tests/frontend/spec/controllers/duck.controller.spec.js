describe('DuckController', () => {
  let controllerToTest;
  let httpBackend;
  let mock$state;
  let mock$stateParams;
  const testDuckId = 'Daphney';
  const testDucks = ['Donald', 'Daffy'];
  let API_URL;

  beforeEach(() => {
    module('DuckApp');
    inject(($controller, $httpBackend, _API_URL_) => {
      API_URL = _API_URL_;
      httpBackend = $httpBackend;
      mock$state = {
        go: jasmine.createSpy()
      };
      mock$stateParams = {
        duckId: testDuckId
      };
      controllerToTest = $controller('DuckController', {
        $stateParams: mock$stateParams,
        $state: mock$state
      });
      httpBackend
        .when('GET', `${API_URL}/ducks`)
        .respond(testDucks);
    });
  });

  describe('initialisation', () => {
    it('should populate allDucks with correct data', () => {
      const testDucks = ['duck one', 'duck two'];

      httpBackend
        .expect('GET', `${API_URL}/ducks`)
        .respond(testDucks);
      httpBackend.flush();
      expect(controllerToTest.allDucks).toEqual(testDucks);
      httpBackend.verifyNoOutstandingExpectation();
    });
  });

  describe('getDuck()', () => {
    it('should get one duck', () =>{
      controllerToTest.selectedDuck = testDuckId;
      httpBackend
      .expect('GET', `${API_URL}/ducks/${testDuckId}`)
      .respond(controllerToTest.selectedDuck);

      controllerToTest.getDuck(testDuckId);
      httpBackend.flush();

      httpBackend.verifyNoOutstandingExpectation();


    });
  });

  describe('editDuck()', () => {
    it('should go to "edit" state with specified duckID', () => {
      const testDuckId = 'quark';

      controllerToTest.editDuck(testDuckId);
      expect(mock$state.go).toHaveBeenCalledWith('edit', {duckId: testDuckId});
    });
  });

  describe('updateDuck()', () => {
    it('should make API call to update duck with correct data', () => {
      const testUpdatedDuck = {
        _id: testDuckId
      };

      httpBackend
        .expect('PATCH', `${API_URL}/ducks/${testDuckId}`, testUpdatedDuck)
        .respond({});
      controllerToTest.selectedDuck = {
        duck: testUpdatedDuck
      };
      controllerToTest.updateDuck();
      httpBackend.flush();
      httpBackend.verifyNoOutstandingExpectation();
    });
  });

  describe('deleteDuck()', () => {
    it('should make API call to delete specified duck', () => {

      httpBackend
        .expect('DELETE', `${API_URL}/ducks/${testDuckId}`)
        .respond({});
      controllerToTest.deleteDuck(testDuckId);
      httpBackend.flush();
      httpBackend.verifyNoOutstandingExpectation();
    });
  });


  describe('addDuck()', () => {
    it('should make API call to add duck with correct data', () => {
      const testDuckToAdd = {
        name: 'Daisy'
      };
      httpBackend
         .expect('POST', `${API_URL}/ducks`, testDuckToAdd)
         .respond({});
      controllerToTest.newDuck = testDuckToAdd;
         //as the httpBackend is expecting testDuckToAdd you have to then send testDuckToAdd to the function.
      controllerToTest.addDuck();
      httpBackend.flush();
      httpBackend.verifyNoOutstandingExpectation();
    });
    it('should go to "home" state on success', () => {
      httpBackend
       .when('POST', `${API_URL}/ducks`)
       .respond({});
      controllerToTest.addDuck();
      httpBackend.flush();
      expect(mock$state.go).toHaveBeenCalledWith('home');

    });
  });
});



      // creating an instance using the controllerToTest

    //need an it statement and at least a console log to promt the tests. and in this case get the error message up.
