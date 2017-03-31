function DuckFactory(API_URL, $http){
  return{
    getAll: function () {
      return $http({
        method: 'GET',
        url: `${API_URL}/ducks`
      });
    },
    getOne: function (id){
      return $http({
        method: 'GET',
        url: `${API_URL}/ducks/${id}`
      });
    }
  };
}




angular
  .module('DuckApp')
  .factory('DuckFactory', DuckFactory);

//there is only one of each type of factory and there for a singalton
