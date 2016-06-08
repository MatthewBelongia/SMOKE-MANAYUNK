angular.module('starter.billController', [])

.controller('BillCtrl', function($scope, $stateParams, OpenTabsFactory, $ionicPopover, $http, SMoKEAPIservice) {
  $scope.openTab = OpenTabsFactory.get($stateParams.tabID);
  $scope.id = '';
  $scope.item = null;


  $scope.addItem = function() {
    console.log("id is "+ $scope.id);

    SMoKEAPIservice.getItemDetails($scope.id).then(function successCallback(response) {
      //Digging into the response to get the relevant data
      $scope.item = response;
      console.log(response)
    }, function errorCallback(response) {})
    $scope.openTab.bill.push($scope.item);
    console.log($scope.openTab);
    $scope.id = '';
  };

  $ionicPopover.fromTemplateUrl('templates/popover.html', {
    scope: $scope
  }).then(function(popover) {
    $scope.popover = popover;
  });
  $scope.openPopover = function($event) {
    $scope.popover.show($event);
  };
  $scope.voidItem = function(item) {
    $scope.openTab.bill.splice($scope.openTab.bill.indexOf(item), 1);
    $scope.openTab.subtotal -= item.price;
  };
  $scope.reOrderItem = function(item) {};
})
