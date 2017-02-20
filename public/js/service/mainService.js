angular.module('myApp')
    .service('mainService', function(){

        // IMAGES FOR THE PORTFOLIO SECTIONS///////////////////////////
        //////////////////////////////////////////////////////////////
        this.portfolio = [
            {
                img: './img/ersite802x694.jpg',
                name: 'Elliot Richardson Site',
                tech: 'HTML, CSS, Javascript, Angular, Jquery, Gulp, Sass, Node.js',
                images: ['./img/ersite802x694.jpg', './img/ersitefooterthumb.jpg', './img/ersitemobilethumb2.jpg', './img/ersiteaboutmobilethumb.jpg'],
                text: 'This site was built and designed from the ground up using HTML, CSS, Javascript, Angular, Jquery, Gulp, Sass, Node.js, Affinity Suite, Heroku'
            },
            {
                img: './img/rodesk802x694.jpg',
                name: 'Rodesk Site Clone',
                tech: 'HTML, CSS, Javascript, Angular, Jquery, Sketch',
                images: ['./img/rodeskweb1.jpg', './img/rodesk802x694.jpg', './img/rodeskmobile.jpg', './img/rodeskweb3.jpg'],
                text: 'This site was built from the ground up for demonstration of my coding skills using HTML, CSS, Javascript, Angular, Jquery, Sketch'
            },
            {
                img: './img/beoplayweb1.jpg',
                name: 'Beoplay Site Clone',
                tech: 'HTML, CSS, Javascript, Angular, Jquery, Gulp, Sass, Node.js',
                images: ['./img/beoplayweb1.jpg', './img/beoplayweb2.jpg', './img/beoplayweb3.jpg', './img/beoplayweb4.jpg'],
                text: 'This site was built from the ground up for demonstration of my coding skills using HTML, CSS, Javascript, Angular, Jquery, Gulp, Sass, Node.js, Affinity Suite, Heroku'
            },
            {
                img: './img/optimalins802x694.jpg',
                name: 'Optimal Insurance Site',
                tech: 'HTML, CSS, SquareSpace CMS, Affinity Designer',
                images: ['./img/optimalweb1.jpg', './img/optimalweb2.jpg', './img/optimalweb3.jpg', './img/optimalweb4.jpg'],
                text: 'This site was built and designed for Optimal Insurance Choice using HTML, CSS, SquareSpace, Affinity Suite'
            },
            {
                img: './img/futureweb1.jpg',
                name: 'Future App Mockup',
                tech: 'HTML, CSS, Javascript, PHP, Apache, Wordpress, Affinity Suite',
                images: ['./img/futureweb1.jpg', './img/futureweb2.jpg', './img/futureweb3.jpg', './img/futureweb4.jpg'],
                text: 'This site was built from the ground up utilizing HTML, CSS, Javascript, Apache, PHP, Wordpress, Affinity Suite'
            },
            {
                img: './img/slice8.jpg',
                name: 'Lyft Site Clone',
                tech: 'HTML, CSS, Javascript, React, Webpack, Bootstrap',
                images: ['./img/lyftweb1.jpg', './img/lyftweb2.jpg', './img/lyftweb3.jpg', './img/lyftweb4.jpg'],
                text: 'This site was built from the ground for demonstration of my coding skills using HTML, CSS, Javascript, React, Jquery, Webpack, Bootstrap, Node.js, Google Maps'
            }
        ];

        //IMAGES FOR SLIDER AND DESIGN DIRECTIVE/////////////////////////////////
        /////////////////////////////////////////////////////////////
        this.images = [{
            img: 'aporcheddusite.jpg',
            details: 'column 1',
            name: 'Anthondy Porcheddu Site',
            tech: 'HTML, CSS, Affinity Designer'
        },
        {
            img: 'devmtnmockup.jpg',
            details: 'column 1',
            name: 'Lyft Site Clone',
            tech: 'HTML, CSS, Javascript, Jquery, Angular, Gulp, Sass, Node.js'
        },
        {
            img: 'provolakeweb.jpg',
            details: 'column 1',
            name: 'Lyft Site Clone',
            tech: 'HTML, CSS, Javascript, Jquery, Angular, Gulp, Sass, Node.js'
        },
        {
            img: 'gofanbasemockupgreen.jpg',
            details: 'column 1',
            name: 'Lyft Site Clone',
            tech: 'HTML, CSS, Javascript, Jquery, Angular, Gulp, Sass, Node.js'
        },
        {
            img: 'exploretheair.jpg',
            details: 'column 1',
            name: 'Lyft Site Clone',
            tech: 'HTML, CSS, Javascript, Jquery, Angular, Gulp, Sass, Node.js'
        },
        {
            img: 'elliotpark.jpg',
            details: 'column 2',
            name: 'Lyft Site Clone',
            tech: 'HTML, CSS, Javascript, Jquery, Angular, Gulp, Sass, Node.js'
        },
        {
            img: 'ersiteoldermockup.jpg',
            details: 'column 2',
            name: 'Lyft Site Clone',
            tech: 'HTML, CSS, Javascript, Jquery, Angular, Gulp, Sass, Node.js'
        },
        {
            img: 'gofanbaseMockup.jpg',
            details: 'column 2',
            name: 'Lyft Site Clone',
            tech: 'HTML, CSS, Javascript, Jquery, Angular, Gulp, Sass, Node.js'
        },
        {
            img: 'outdoorweb.jpg',
            details: 'column 2',
            name: 'Lyft Site Clone',
            tech: 'HTML, CSS, Javascript, Jquery, Angular, Gulp, Sass, Node.js'
        },
        {
            img: 'earsiteicons.jpg',
            details: 'column 3',
            name: 'Lyft Site Clone',
            tech: 'HTML, CSS, Javascript, Jquery, Angular, Gulp, Sass, Node.js'
        },
        {
            img: 'devmtnsurveymockup.jpg',
            details: 'column 3',
            name: 'Fade Into The West',
            tech: 'Affinity Designer'
        },
        {
            img: 'draxemockup.jpg',
            details: 'column 3',
            name: 'Fade Into The West',
            tech: 'Affinity Designer'
        },
        {
            img: 'fadetowestmockup.jpg',
            details: 'column 3',
            name: 'Fade Into The West',
            tech: 'Affinity Designer'
        } ]

    })
