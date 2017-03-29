## setting up the Angualar app

```
var app = angular.module('myFirstApp', []);

```
This will only be needed once within the app, there an be other modules but there will be different strings.

on the html to add this in,
in the top html tag add the attribute

```
<html lang="en" ng-app="myFirstApp">


```


Any angular Js files should start with

```
angular.module('myFirstApp', []);

```

as it is also stated on the html





_________________________________________________________________________________________________


<body ng-controller="HomeController as home">
  <h1>{{ home.title }}</h1>

<p>Trainers: </p>
<ul>
  <li ng-repeat="trainer in home.trainers">{{ trainer }}</li>
</ul>

<img src="http://vignette1.wikia.nocookie.net/muppet/images/3/31/Gonzo-TheVoice-2012.jpg" height="200"  ng-if="home.canShowGonzo"/>
<img src="http://vignette1.wikia.nocookie.net/muppet/images/3/31/Gonzo-TheVoice-2012.jpg" height="200" class="ng-hide" ng-show="home.canShowGonzo"/>

</body>

_________________________________________________________________________________________________
console.log('home.controller.js');

function HomeController(){
  var controller = this;


  function init(){
    console.log('inside the HomeController');
    controller.trainers = ['Steve', 'Matt', 'Ollie', 'Niall'];
    controller.title = 'Home Page';
    controller.canShowGonzo = false;
  }
  init();
}

angular
  .module('myFirstApp', [])
  .controller('HomeController', HomeController);


_________________________________________________________________________________________________

LOGIC TO CHANGE THE html



<p>
  <a href="#" ng-click="home.canShowGonzo = true">Show me Gonzo!</a>
</p>

<img src="http://vignette1.wikia.nocookie.net/muppet/images/3/31/Gonzo-TheVoice-2012.jpg" height="200" class="ng-hide" ng-if="home.canShowGonzo"/>


________________________________________________________________________________________________

with the js being changed to

console.log('home.controller.js');

function HomeController(){
  var controller = this;
  var canShowGonzo = false

 controller.setGonzoVisibility = function(value) {
    controller.canShowGonzo =
  };

controller.getGonzoVisibility = function(){
  return canShowGonzo
};
  function init(){
    console.log('inside the HomeController');
    controller.trainers = ['Steve', 'Matt', 'Ollie', 'Niall'];
    controller.title = 'Home Page';
    controller.canShowGonzo = false;
  }
  init();
}

angular
  .module('myFirstApp', [])
  .controller('HomeController', HomeController);


AND HTML IS SET TO

<p>
  <a href="#" ng-click="home.setGonzoVisibility(true)">Show me Gonzo!</a>
</p>

<img src="http://vignette1.wikia.nocookie.net/muppet/images/3/31/Gonzo-TheVoice-2012.jpg" height="200" class="ng-hide" ng-if="home.getGonzoVisibility()"/>


___________________________________________________________


controller.toggleGonzo = function() {
  if (canShowGonzo) {
    canShowGonzo = false;
  } else {
    canShowGonzo = true;
  }

  OR

  controller.toggleGonzo = function() {
    canShowGonzo = !canShowGonzo

    }




___________________________________________________________

<!DOCTYPE html>
<html lang="en" ng-app="myFirstApp">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Angular intro</title>
  <script src="bower_components/angular/angular.min.js" type="text/javascript" charset="utf-8" ></script>
  <script src="app.js" charset="utf-8"></script>
  <script src="controllers/home.controller.js" charset="utf-8"></script>
  <style>
    .isVisible {
      color: blue;
    }
    .isNotVisible{
      color: lightGrey;
    }
  </style>
</head>
<body ng-controller="HomeController as home">
  <h1 ng-mouseover="home.showGonzo()">{{ home.title }}</h1>

<p>Trainers: </p>
<ul>
  <li ng-repeat="trainer in home.trainers">{{ trainer }}</li>
</ul>

<p>
  <a href="#" ng-click="home.showGonzo()">Show me Gonzo!</a>
  <a href="#" ng-click="home.hideGonzo()">hide Gonzo!</a>
  <a href="#" ng-click="home.toggleGonzo()">Toggle Gonzo!</a>
  <span ng-class="{'isVisible': home.getGonzoVisibility(), 'isNotVisible': !home.getGonzoVisibility()}">Gonzo on for show!</span>
</p>

<img
 src="http://vignette1.wikia.nocookie.net/muppet/images/3/31/Gonzo-TheVoice-2012.jpg"
 height="200"
 ng-if="home.getGonzoVisibility()"
 ng-mouseover="home.hideGonzo()"/>

</body>
</html>
&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&


console.log('home.controller.js');

function HomeController(){
  var controller = this;
  var canShowGonzo = false;

  controller.showGonzo = function() {
    canShowGonzo = true;
  };
  controller.hideGonzo = function() {
    canShowGonzo = false;
  };

  controller.toggleGonzo = function() {
    canShowGonzo = !canShowGonzo;
  };

  controller.getGonzoVisibility = function(){
    return canShowGonzo;
  };
  function init(){
    console.log('inside the HomeController');
    controller.trainers = ['Steve', 'Matt', 'Ollie', 'Niall'];
    controller.title = 'Home Page';
    controller.hideGonzo();
  }
  init();
}

angular
  .module('myFirstApp', [])
  .controller('HomeController', HomeController);
