angular.module('myApp')
    .directive('mobileMenuDirective', function(){
        return {
            restrict: 'E',
            templateUrl: '../../views/directives/mobileMenuDirective.html',
            link: function(scope, element, attrs){

                // CACHED VARIABLES
                var $closeMenu = $('.mobile-menu-modal, .close-menu, .mobile-menu-container a');
                var $menuSelect = $('.mobile-menu-modal, .mobile-menu-container');
                var $menuItems = $('.main-logo-container, .mobile-menu-container nav');

                //HAMBURGER CLICK MENU OPEN
                $('.hamburger').on('click', function(){
                    $menuSelect.addClass('open-mobile-menu');
                    $menuItems.addClass('slide-up');
                })

                //CLOSE MENU AND LINK CLOSE MENU
                $closeMenu.on('click', function(){
                    $menuSelect.removeClass('open-mobile-menu');
                    $menuItems.removeClass('slide-up');
                })

            }
        }
    })
