angular.module('starter.services', [])

.factory('OpenTabsFactory', function() {

  var openTabs = [];

  return {
    all: function() {
      return openTabs;
    },
    add: function(openTab) {
      openTabs.push(openTab);
    },
    remove: function(openTab) {
      openTabs.splice(openTabs.indexOf(openTab), 1);
    },
    get: function(tabID) {
      for (var i = 0; i < openTabs.length; i++) {
        if (openTabs[i].id === parseInt(tabID)) {
          return openTabs[i];
        }
      }
      return null;
    }
  };
})

.factory('SMoKEAPIservice', function($http) {
    var SMoKEAPI = {};
    SMoKEAPI.getItemDetails = function(id) {
      return $http({
        method: 'jsonp',
        url: '192.168.1.189:8080/id?id=54'
      });
    }

  //   var settings = {
  //   "async": true,
  //   "crossDomain": true,
  //   "url": "http://192.168.1.189:8080/id?id=54",
  //   "method": "GET",
  //   "headers": {
  //     "cache-control": "no-cache",
  //     "postman-token": "203f1816-6653-b04a-17f2-a67c77de6331"
  //   }
  // }
  //
  // $.ajax(settings).done(function (response) {
  //   console.log(response);
  // });
    return SMoKEAPI;


  });
