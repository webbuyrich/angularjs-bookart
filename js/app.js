// Creatinig a module
var myApp = angular.module("myApp", ['ngRoute']);


//Creating configuration for routes
myApp.config(function($routeProvider){

	$routeProvider
	.when('/books',{
		templateUrl: 'partials/book-list.html',
		controller: 'booklistController'
	})
	.when('/cart',{
		templateUrl: 'partials/cart-list.html'
	})
	.otherwise({
		redirectTo: '/books'
	});
});

// Creating headerController
myApp.controller('headerController', function($scope){
	$scope.message = {
		title: "BookArt",
		tagline: "We have 1 million books for you"
	};
});


//Creating booklistController
myApp.controller('booklistController', function($scope){

	$scope.books = [
  {
    "index": 0,
    "imgURL": "img/responsive-design.png",
    "bookName": "Frolix",
    "price": "$124.91",
    "rating": 4,
    "binding": "Electronic",
    "publisher": "Memora Lyria",
    "releaseDate": "May 22, 2015",
    "details": "Ipsum tempor nostrud commodo dolore dolor laborum fugiat amet ad duis quis sit."
  },
  {
    "index": 1,
    "imgURL": "img/great-reset.png",
    "bookName": "Extro",
    "price": "$29.40",
    "rating": 4,
    "binding": "Electronic",
    "publisher": "Comvey Neteria",
    "releaseDate": "November 02, 2015",
    "details": "Incididunt excepteur pariatur in eu exercitation labore pariatur labore et id incididunt ullamco ea."
  },
  {
    "index": 2,
    "imgURL": "img/great-reset.png",
    "bookName": "Opticon",
    "price": "$98.98",
    "rating": 2,
    "binding": "Electronic",
    "publisher": "Supportal Lunchpad",
    "releaseDate": "April 24, 2015",
    "details": "Nulla nisi enim quis dolor."
  },
  {
    "index": 3,
    "imgURL": "img/responsive-design.png",
    "bookName": "Musaphics",
    "price": "$147.67",
    "rating": 1,
    "binding": "Hardcover",
    "publisher": "Kangle Supremia",
    "releaseDate": "May 04, 2014",
    "details": "Elit qui ullamco ad cupidatat veniam ut ut exercitation laborum et."
  },
  {
    "index": 4,
    "imgURL": "img/responsive-design.png",
    "bookName": "Farmage",
    "price": "$168.99",
    "rating": 3,
    "binding": "Hardcover",
    "publisher": "Rodemco Pearlesex",
    "releaseDate": "November 13, 2015",
    "details": "Voluptate do ipsum labore officia aliqua est exercitation."
  },
  {
    "index": 5,
    "imgURL": "img/great-reset.png",
    "bookName": "Satiance",
    "price": "$111.58",
    "rating": 5,
    "binding": "Paperback",
    "publisher": "Uneeq Furnigeer",
    "releaseDate": "April 17, 2015",
    "details": "Pariatur sit nulla aliquip id enim tempor pariatur occaecat ipsum aute quis eiusmod eiusmod."
  },
  {
    "index": 6,
    "imgURL": "img/great-reset.png",
    "bookName": "Matrixity",
    "price": "$150.06",
    "rating": 2,
    "binding": "Hardcover",
    "publisher": "Aquazure Kiggle",
    "releaseDate": "July 15, 2015",
    "details": "Aute deserunt laboris qui ullamco cillum voluptate ea ad amet elit sunt dolor dolore nisi."
  }
];

$scope.addToCart = function(book){

	console.log("add to cart: ", book.bookName);
}




});


