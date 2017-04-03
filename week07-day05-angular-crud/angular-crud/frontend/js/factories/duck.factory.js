function DuckFactory(API_URL, $http){
  return{
    getAll: function () {
      return $http({
        method: 'GET',
        url: `${API_URL}/ducks`
      });
    },
    getOne: function (duckId){
      return $http({
        method: 'GET',
        url: `${API_URL}/ducks/${duckId}`
      });
    },
    createOne: function (newDuck) {
      return $http({
        method: 'POST',
        url: `${API_URL}/ducks`,
        data: newDuck
      });
    },
    deleteOne: function (duckId) {
      return $http({
        method: 'DELETE',
        url: `${API_URL}/ducks/${duckId}`
      });
    },
    updateOne: function (editedDuck) {
      return $http({
        method: 'PATCH',
        url: `${API_URL}/ducks/${editedDuck._id}`,
        data: editedDuck
      });
    }
  };
}




angular
  .module('DuckApp')
  .factory('DuckFactory', DuckFactory);

//there is only one of each type of factory and there for a singalton
