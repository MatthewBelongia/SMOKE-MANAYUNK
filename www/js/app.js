
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services','angularMoment'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
    .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })

  // Each tab has its own nav history stack:

  .state('tab.inventory', {
    url: '/inventory',
    views: {
      'tab-inventory': {
        templateUrl: '/templates/tab-inventory.html',
        controller: 'InventoryCtrl'
      }
    }
  })

  .state('tab.opentabs', {
      url: '/opentabs',
      views: {
        'tab-opentabs': {
          templateUrl: 'templates/tab-opentabs.html',
          controller: 'OpenTabCtrl'
        }
      }
    })
    .state('tab.opentab-bill', {
      url: '/opentabs/:tabID',
      views: {
        'tab-opentabs': {
          templateUrl: 'templates/opentabs-bill.html',
          controller: 'BillCtrl'
        }
      }
    })

  .state('tab.account', {
    url: '/account',
    views: {
      'tab-account': {
        templateUrl: 'templates/tab-account.html',
        controller: 'AccountCtrl'
      }
    }
  });

  $urlRouterProvider.otherwise('/tab/inventory');

});
