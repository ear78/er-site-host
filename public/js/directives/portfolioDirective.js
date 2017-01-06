angular.module('myApp')
    .directive('portfolioDirective', function(){
        return {
            restrict: 'E',
            templateUrl: '../../views/directives/portfolioDirective.html',
            controller: function($scope, mainService){
                $scope.portfolio = mainService.portfolio;
            },
            link: function(scope,element,attrs){
                $('.box1, .box2').hover(function(){
                    $(this).find('.project-info-container').toggleClass('info-active');
                    $(this).find('.img-thumb').toggleClass('img-thumb-fade');
                })

            }
        }
    })
