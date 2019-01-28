angular.module('app', ['ui.router'])
  .config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/home');

    //this is what are going to call the home state
    $stateProvider.state('home', {
        templateUrl: 'js/templates/home.html',
        url: '/home'
      })
      .state('about', {
        templateUrl: 'js/templates/about.html',
        url: '/about'
      })
      .state('services', {
        templateUrl: 'js/templates/services.html',
        url: '/services'
      })
      .state('ownership', {
        templateUrl: 'js/templates/ownership.html',
        url: '/ownership'
      })
      .state('contact', {
        templateUrl: 'js/templates/contact.html',
        url: '/contact'
      })
    //things as they are at this given time.
  });
//lcd soundsystem

function openNav() {
  document.querySelector('.sidenav').style.width = '250px';
  // document.getElementById("sidenav").style.height = "";
}
/* Set the width of the side navigation to 0 */
function closeNav() {
  document.querySelector('.sidenav').style.width = '0';
}

const openNavv = document.querySelector('.open-nav');
const closeNavv = document.querySelector('.close-nav');

openNavv.addEventListener('click', () => {
  openNav();
});

closeNavv.addEventListener('click', () => {
  closeNav();
});
