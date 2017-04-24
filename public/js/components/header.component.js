angular.module('myApp')
    .component('headerComponent', {
        templateUrl: './views/components/headerComponent.template.html',
        controller: function($route){
            this.$route = $route;
        }
    })
