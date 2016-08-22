
var myApp = angular.module("gallApp",['ngRoute']);
myApp.config(function($routeProvider){

	$routeProvider.when("/pic1",
			{templateUrl: "Templates/pic1.html",controller : "appCtrl"});

});

myApp.controller("appCtrl", function($scope){

	$scope.images = [
		{
			src:"/Users/HeLL/Documents/Practice/Images/guitar1.jpeg",
			thumb:"/Users/HeLL/Documents/Practice/Images/guitar1.thumb.jpg", 
			desc: "Gibson USA SR series limited edition models feature a timeless original Gibson neck width and a vintage-style set of tuning machines. Take advantage . ",
			name:"Gibson 2015 Les Paul Studio SR ",
			price: "MSRP: $2,048.00 "	
		},
		{	
			src:"/Users/HeLL/Documents/Practice/Images/guitar2.jpg", 
			thumb:"/Users/HeLL/Documents/Practice/Images/guitar2.thumb.jpg", 
			desc: "Gibson USA SR series limited edition models feature a timeless original Gibson neck width and a vintage-style set of tuning machines. Take advantage ",
			name:"Gibson 2015 Les Paul Studio SR ",
			price: "MSRP: $2,048.00 "
		},
		{
			src:"/Users/HeLL/Documents/Practice/Images/guitar3.jpg", 
			thumb:"/Users/HeLL/Documents/Practice/Images/guitar3.thumb.jpg", 
			desc: "Taking design and visual cues from the Les Paul models of the '80s and '90s, the Les Paul Traditional Pro III features powerful pickups with push/pus ",
			name:"Gibson 2015 Les Paul Studio SR ",
			price: "MSRP: $2,048.00 "
		},
		{
			src:"/Users/HeLL/Documents/Practice/Images/guitar4.jpg", 
			thumb:"/Users/HeLL/Documents/Practice/Images/guitar4.thumb.jpg", 
			desc: "Steeped in tradition, the 2016 Les Paul Standard T has all the ingredients that have made the Les Paul such a desirable guitar, and one of the most l ",
			name:"Gibson 2015 Les Paul Studio SR ",
			price: "MSRP: $2,048.00 "
		},
		{
			src:"/Users/HeLL/Documents/Practice/Images/guitar5.jpeg", 
			thumb:"/Users/HeLL/Documents/Practice/Images/guitar5.thumb.jpg", 
			desc: "Gibson USA SR series limited edition models feature a timeless original Gibson neck width and a vintage-style set of tuning machines. Take advantage ",
			name:"Gibson 2015 Les Paul Studio SR ",
			price: "MSRP: $2,048.00 "
		},
		{	src:"/Users/HeLL/Documents/Practice/Images/guitar6.jpeg", 
			thumb:"/Users/HeLL/Documents/Practice/Images/guitar6.thumb.jpg", 
			desc: "In celebration of Rush's 40th Anniversary, Gibson Custom presents the Limited Edition Alex Lifeson R40 Les Paul Axcess offered in a run of 200 guitar.",
			name:"Gibson 2015 Les Paul Studio SR ",
			price: "MSRP: $2,048.00 "
		}

	];

	$scope.currentImage = ($scope.images[0]);
	
	$scope.setCurrentImage = function(image){
		$scope.currentImage = image;
	}

	

});















