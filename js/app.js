// Creatinig a module
var myApp = angular.module("myApp", ['ngRoute', 'ngAnimate']);


//Creating configuration for routes
myApp.config(function($routeProvider){

	$routeProvider
	.when('/books',{
		templateUrl: 'partials/book-list.html',
		controller: 'booklistController'
	})
	.when('/cart',{
		templateUrl: 'partials/cart-list.html',
		controller: 'cartlistController'
	})
	.otherwise({
		redirectTo: '/books'
	});
});


//Creating the BookList Service
myApp.factory('bookService', function(){

	var books = [
  {
    "index": 0,
    "imgURL": "img/great-reset.png",
    "bookName": "Geekwagon",
    "author": "Victoria Guerra",
    "price": "153.70",
    "rating": 5,
    "binding": "Paperback",
    "publisher": "Zilladyne Qaboos",
    "releaseDate": "July 22, 2014",
    "details": "Elit nisi commodo minim eiusmod est adipisicing."
  },
  {
    "index": 1,
    "imgURL": "img/responsive-design.png",
    "bookName": "Pyramia",
    "author": "Rivers Rutledge",
    "price": "105.50",
    "rating": 5,
    "binding": "Paperback",
    "publisher": "Strezzo Qot",
    "releaseDate": "May 02, 2015",
    "details": "Esse mollit reprehenderit aliquip reprehenderit sunt in tempor labore ex reprehenderit."
  },
  {
    "index": 2,
    "imgURL": "img/responsive-design.png",
    "bookName": "Zilch",
    "author": "Kelsey Moon",
    "price": "155.98",
    "rating": 5,
    "binding": "Electronic",
    "publisher": "Flumbo Exoplode",
    "releaseDate": "November 13, 2015",
    "details": "Aute veniam labore fugiat ea."
  },
  {
    "index": 3,
    "imgURL": "img/great-reset.png",
    "bookName": "Geekfarm",
    "author": "Mendoza Mendoza",
    "price": "82.03",
    "rating": 4,
    "binding": "Hardcover",
    "publisher": "Proflex Baluba",
    "releaseDate": "August 26, 2014",
    "details": "Laboris culpa ex laboris quis minim incididunt nostrud proident ullamco officia ad reprehenderit."
  },
  {
    "index": 4,
    "imgURL": "img/responsive-design.png",
    "bookName": "Musanpoly",
    "author": "Mona Diaz",
    "price": "98.19",
    "rating": 2,
    "binding": "Hardcover",
    "publisher": "Parleynet Tourmania",
    "releaseDate": "May 18, 2015",
    "details": "Eiusmod quis velit voluptate labore Lorem consectetur commodo sunt nisi enim."
  },
  {
    "index": 5,
    "imgURL": "img/great-reset.png",
    "bookName": "Bostonic",
    "author": "Bishop Morgan",
    "price": "90.34",
    "rating": 3,
    "binding": "Hardcover",
    "publisher": "Dentrex Deviltoe",
    "releaseDate": "April 15, 2014",
    "details": "Lorem ad anim laborum excepteur."
  },
  {
    "index": 6,
    "imgURL": "img/responsive-design.png",
    "bookName": "Geofarm",
    "author": "Cindy Bradshaw",
    "price": "168.39",
    "rating": 5,
    "binding": "Hardcover",
    "publisher": "Maineland Kidgrease",
    "releaseDate": "December 11, 2015",
    "details": "Cupidatat commodo ullamco eu est."
  }
];
	return {
		getBooks: function(){
			return books;
		}
	 }
});

// Creating Cart Service
myApp.factory('cartService', function(){

	var cart = [];

	return{
		getCart: function(){
			return cart;
		},
		addToCart: function(book){
			cart.push(book);
            alert(book.bookName+' has been added to the cart.');
		}, 
		buy: function(book){
			alert('Thank you for buying: '+book.bookName+' by '+book.author);
		}
	}

});






// Creating headerController
myApp.controller('headerController', function($scope, $location){
	$scope.message = {
		title: "BookArt",
		tagline: "We have 1 million books for you"
	};

    $scope.nav = [];
    $scope.nav.isActive = function(path){
        if(path === $location.path()){
            return true;
        }
            return false;
    }
});

// Creating headerController
myApp.controller('cartlistController', function($scope, cartService){

	$scope.cart = cartService.getCart();

	$scope.buy = function(book){
		
		cartService.buy(book);
	}
});

//Creating booklistController
myApp.controller('booklistController', function($scope, bookService, cartService){

	$scope.books = bookService.getBooks();

	$scope.addToCart = function(book){

		cartService.addToCart(book);
	}




});


