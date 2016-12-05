angular.module('appCtrl', [])
.controller('HomeCtrl', ['$scope', '$document', function ($scope, $document) {
  $scope.navCollapsed = true;

//handle scroll home and scroll to contact
  var duration = 1000;

    //scroll home
    $scope.toTheTop = function() { 
      $document.scrollTopAnimated(0, duration)
    };

    //scroll to contact info
    $scope.toContact = function(){ 
    var contact = angular.element(document.getElementById('Contact'));
      $document.scrollToElement(contact, 0, duration);
    };
}])
.controller('CarouselDemoCtrl', function ($scope) {
  $scope.myInterval = 5000;
  $scope.noWrapSlides = false;
  $scope.active = 0;
  var slides = $scope.slides = [];
  var currIndex = 0;

  $scope.addSlide = function() {
    var newWidth = 600 + slides.length + 1;
    slides.push({
      image: ['public/css/images/fbpic.jpg', 'public/css/images/pack-that.png','public/css/images/pokemon-phaser.jpg', 'public/css/images/portfolio.png'][slides.length % 4],
      text: ['FACEBOOK COMMENT GENERATOR','BASE WEIGHT','POKEMON PHASER','PORTFOLIO'][slides.length % 4],
      content: ['Facebook Comment Generator is a app that utilizes Facebook’s graph API. The app uses a Markov chain algorithm to generate a random post you might say, based on post you have made through Facebook.',
      'Base Weight is a virtual backpack that will calculate the current weight of your pack, so you can focus on planning for your next backpacking trip, not math.',
      'Pokemon Phaser is a fun game that was built with the phaser framework. The goal of the game is to pop the jiggly puffs in the game until there are no more left. ',
      'I built this portfolio as a single page angular app. The portfolio is a place where I can showcase some of my work and let people see some of the projects I have developed.'][slides.length % 4],
      code:["https://github.com/hayes9321/facebook2","https://github.com/hayes9321/mean_hackathon","https://github.com/hayes9321/project-1","https://github.com/hayes9321/portfolioV1"][slides.length % 4],
      demo:["http://fb-site.herokuapp.com/","#","#","#"][slides.length % 4],
      id: currIndex++
    });
  };

  $scope.randomize = function() {
    var indexes = generateIndexesArray();
    assignNewIndexesToSlides(indexes);
  };

  for (var i = 0; i < 4; i++) {
    $scope.addSlide();
  }

  // Randomize logic below

  function assignNewIndexesToSlides(indexes) {
    for (var i = 0, l = slides.length; i < l; i++) {
      slides[i].id = indexes.pop();
    }
  }

  function generateIndexesArray() {
    var indexes = [];
    for (var i = 0; i < currIndex; ++i) {
      indexes[i] = i;
    }
    return shuffle(indexes);
  }


  function shuffle(array) {
    var tmp, current, top = array.length;

    if (top) {
      while (--top) {
        current = Math.floor(Math.random() * (top + 1));
        tmp = array[current];
        array[current] = array[top];
        array[top] = tmp;
      }
    }

    return array;
  }
});
