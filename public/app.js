
angular.module('myApp', ['ngAnimate', 'ngRoute'])

    // .config(function($stateProvider, $urlRouterProvider){
    //
    //
    //     $stateProvider
    //         .state('home', {
    //             url: '/home',
    //             templateUrl: '../views/home.html',
    //         })
    //         .state('about', {
    //             url: '/about',
    //             templateUrl: '../views/about.html',
    //         })
    //         .state('resume', {
    //             url: '/resume',
    //             templateUrl: '../views/resume.html',
    //         })
    //         .state('design', {
    //             url: '/design',
    //             templateUrl: '../views/design.html',
    //         })
    //         .state('contact', {
    //             url: '/contact',
    //             templateUrl: '../views/contact.html',
    //         })
    //
    //         $urlRouterProvider.otherwise('/home');
    // });

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider
            .when('/', {
                controller: 'homeCtrl',
                controllerAs: 'home',
                templateUrl: '../views/home.html'
            })
            .when('/about', {
                controller: 'aboutCtrl',
                controllerAs: 'about',
                templateUrl: '../views/about.html'
            })
            .when('/design', {
                controller: 'designCtrl',
                controllerAs: 'design',
                templateUrl: '../views/design.html'
            })
            .when('/resume', {
                controller: 'resumeCtrl',
                controllerAs: 'resume',
                templateUrl: '../views/resume.html'
            })
            .when('/contact', {
                controller: 'contactCtrl',
                controllerAs: 'contact',
                templateUrl: '../views/contact.html'
            })
            .otherwise('/');
    }])
