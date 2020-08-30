(function(){
  'use strict';
  
  angular.module('shoppingListApp', [])
  .controller('shoppingListController', shoppingListController);
  
  shoppingListController.$inject = ['$scope'];
  
  function shoppingListController($scope) {
    $scope.toBuyItems = [
      { name: "cookies", quantity: 10 }, 
      { name: "watermelons", quantity: 2 }, 
      { name: "Toilet Papers", quantity: 100 }, 
      { name: "Mask", quantity: 50 }, 
      { name: "Hand soaps", quantity: 5 }, 
      { name: "Apples", quantity: 8 }, 
      { name: "Bananas", quantity: 12 }, 
      { name: "Bottled waters", quantity: 24 }, 
      { name: "PlayStation 5", quantity: 1 }, 
      { name: "Ghost of Tsushima", quantity: 1 }
    ];

    $scope.alreadyBoughtItems = [];

    $scope.numToBuy = 10; 
    $scope.numBought = 0;

    $scope.removeFromList = function (index) {
      $scope.toBuyItems.splice(index, 1);
      --$scope.numToBuy;
    }

    $scope.addToBought = function(item) {
      $scope.alreadyBoughtItems.push(item);
      ++$scope.numBought;
    }

  }
  
  })();