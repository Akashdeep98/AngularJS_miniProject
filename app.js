var myModule=angular.module('myModule',['ngAnimate']);

myModule.controller('MyController',function($scope) {
	// body...
	$scope.tasks=['Cook Food','Meeting with Boss','Take dog for walk'];

	$scope.add=function(argument) {
		// body...
		if($scope.newTask!=null){
		$scope.tasks.push($scope.newTask);
		$scope.newTask=null;
	}
	};
	$scope.remove=function (task) {
		// body...
		var i=$scope.tasks.indexOf(task);
		$scope.tasks.splice(i,1)
	};

	$scope.removeAll=function () 
	{
		$scope.tasks=[];
	}
})