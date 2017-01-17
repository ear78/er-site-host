angular.module('myApp')
    .directive('sliderDirective', function(){
        return {
            restrict: 'A',
            link: function(scope,element,attrs){
                $('.slider').each(function(){
                    var $this = $(this);
                    var $group = $this.find('.slide-group');
                    var $slides = $this.find('.slide');
                    var $buttonArray = [];
                    var currentIndex = 0;
                    var timeout;

                    //move() function for animating slides
                    function move(newIndex){
                        var animateLeft, slideLeft;

                        advance();

                        // If current slide is doing something or animating, do nothing
                        if($group.is(':animated') || currentIndex === newIndex){
                            return;
                        }

                        buttonArray[currentIndex].removeClass('active');
                        buttonArray[newIndex].addClass('active');

                        if(newIndex > currentIndex){
                            slideLeft = '100%';
                            animateLeft = '100%';
                        } else {
                            slideLeft = '-100%';
                            animateLeft = '100%';
                        }

                        $slides.eq(newIndex).css( {left: slideLeft, display: 'block'});
                        $group.animate( {left: animateLeft}, function(){
                            $slides.eq(currentIndex).css( {display: 'none'});
                            $slides.eq(newIndex).css( {left: 0});
                            $group.css( {left: 0});
                            currentIndex = newIndex;
                        })

                        // function advance() {
                        //     clearTimeout(timeout);
                        //     //START TIMER FOR SLIDES AND ANONOMOUS FUNCTION 4 SECONDS
                        //     timeout = setTimeout(function(){
                        //         if(currentIndex < ($slides.length - 1)){
                        //             move(currentIndex + 1);
                        //         } else {
                        //             move(0);
                        //         }
                        //     }, 4000);
                        // }

                        // $.each($slides, function(index){
                        //     // CREATE BUTTON ELEMENT FOR THE BUTTON
                        //     var $button = $('<button type="button" class="slide-btn">&bull;</button>');
                        //     if (index === currentIndex){
                        //         $button.addClass('active');
                        //     }
                        //     $button.on('click', function(){
                        //         move(index);
                        //     }).appendTo($this.find('.slide-buttons'));
                        //     buttonArray.push($button);
                        // });

                        // function call to advance slides
                        // advance();

                    } // END OF MOVE FUNCTION
                })// CLOSE OF ENTIRE FUNCTION
            }// LINK FUNCTION
        } // RETURN
})// MODULE
