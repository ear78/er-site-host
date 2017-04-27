angular.module('myApp')
    .directive('descriptionHover', function(){
        return {
            restrict: 'A',
            link: function(scope, element, attrs){
                element.on('mouseenter', function(){
                    $('.img-desc').addClass('img-desc-active');
                })
                element.on('mouseout', function(){
                    $('.img-desc').removeClass('img-desc-active');
                })

            }
        }
    })
