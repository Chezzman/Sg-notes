angular
  .module('angularDirectives')
  .controller('mainController', mainController);

function mainController () {
  var controller = this;

  controller.people = [
    {
      name: 'Niall',
      level: 12,
      gender: 'male',
      position: 'Instructor',
      skills: ['eating', 'being awesome', 'sleeping']
    },
    {
      name: 'Matt',
      level: 'OVER 9000',
      gender: 'male',
      position: 'Instructor',
      skills: ['Extreme Ping Pong', 'Angular', 'Kawaii Photographer']
    },
    {
      name: 'Lexie',
      level: 13,
      gender: 'female',
      position: 'Academy Manager',
      skills: ['keeping the wheel spinning', 'life', 'knitting', 'danceing']
    },
    {
      name: 'Steve',
      level: 6,
      gender: 'male',
      position: 'Instructor/Education Author',
      skills: ['Banter', 'life', 'keeping people motivated']
    }
  ];
}
