angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('OpenTabCtrl', function($scope, OpenTabsFactory) {

  var openTabID = 0;
  $scope.openTab = {
      id: openTabID,
      name: '',
      bill: []
    };
    $scope.openTabs = OpenTabsFactory.all();
    $scope.add = function(){
      OpenTabsFactory.add($scope.openTab);
      openTabID++;
      $scope.openTab = {
        id: openTabID,
        name: '',
        bill: []
      };
    };
    $scope.remove = function(openTab){
      OpenTabsFactory.remove(openTab);
    };
})

.controller('BillCtrl', function($scope, $stateParams, OpenTabsFactory, $http) {
  $scope.openTab = OpenTabsFactory.get($stateParams.tabID);

  $scope.inventory = [];
  $http.get('/inventory.json').then(function(response) {
      $scope.inventory = response.data;
    });


})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
