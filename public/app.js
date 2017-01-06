
angular.module('myApp', ['ui.router', 'ngAnimate'])

    .config(function($stateProvider, $urlRouterProvider){

        $stateProvider
            .state('home', {
                url: '/home',
                templateUrl: '../views/home.html',
            })
            .state('about', {
                url: '/about',
                templateUrl: '../views/about.html',
            })
            .state('resume', {
                url: '/resume',
                templateUrl: '../views/resume.html',
            })
            .state('contact', {
                url: '/contact',
                templateUrl: '../views/contact.html',
            })

            $urlRouterProvider.otherwise('/home');
    });
