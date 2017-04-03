angular
  .module('angularDirectives')
  .directive('profile', function (){
    return {
      restrict: 'E',
      // E for element, so becomes a tag in HTML. that has to be implemented as an Element.
      replace: true,
      templateUrl: 'directives/profile/profile.directive.html',
      scope: {
        person: '='
      }
    };
  });
