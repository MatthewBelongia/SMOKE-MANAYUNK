angular.module('starter.controllers', [])



.controller('InventoryCtrl', function($scope, $stateParams, OpenTabsFactory, $http, SMoKEAPIservice) {

  // $scope.id = $stateParams.id;
  //   $scope.items = [];
  //   $scope.item = null;
  //   console.log("test" + $scope.id);
  //   SMoKEAPIservice.getItemDetails($scope.id).success(function (response) {
  //       $scope.item = response.data;
  //       console.log("other test");
  //   });

})

.controller('OpenTabCtrl', function($scope, OpenTabsFactory, $ionicPopup, $http) {

  var openTabID = 0;
  $scope.openTab = {
    id: openTabID,
    name: '',
    bill: [],
    subtotal: 0.00,
    time: ''
  };
  $scope.openTabs = OpenTabsFactory.all();

  $scope.showPopup = function() {
    var alertPopup = $ionicPopup.alert({
      title: 'Enter New Tab Name',
      template: '<input type="text" ng-model="openTab.name">',
      scope: $scope,
      buttons: [{
        text: 'Cancel'
      }, {
        text: '<b>Open</b>',
        type: 'button-positive',
        onTap: function(e) {
          if (!$scope.openTab.name) {
            e.preventDefault();
          } else {
            $scope.openTab.time = new Date();
            OpenTabsFactory.add($scope.openTab);
            openTabID++;
            $scope.openTab = {
              id: openTabID,
              name: '',
              bill: [],
              subtotal: 0.00,
              time: ''
            };
          }
        }
      }]
    });

  };
  $scope.remove = function(openTab) {
    OpenTabsFactory.remove(openTab);
    console.log(ingredients);
  };
})

.controller('BillCtrl', function($scope, $stateParams, OpenTabsFactory, $ionicPopover, $http, SMoKEAPIservice) {
  $scope.openTab = OpenTabsFactory.get($stateParams.tabID);

  //
  //
  // $scope.id = $stateParams.id;
  //   $scope.items = [];
  //   $scope.item = null;
  //   console.log("test" + $scope.id);
  //   SMoKEAPIservice.getItemDetails($scope.id).success(function (response) {
  //       $scope.item = response;
  //   });
  //

  $scope.item = {
    id: '',
    name: 'Cigar',
    price: 5.25,
    quantity: '1'
  };



  $scope.addItem = function() {
    $scope.openTab.subtotal+=$scope.item.price;
    $scope.openTab.bill.push($scope.item);
    $scope.item = {
      id: '',
      name: 'Cigar',
      price: 5.25,
      quantity: '1'
    };
  };

  $ionicPopover.fromTemplateUrl('templates/popover.html', {
    scope: $scope
  }).then(function(popover) {
    $scope.popover = popover;
  });
  $scope.openPopover = function($event) {
    $scope.popover.show($event);
  };
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
