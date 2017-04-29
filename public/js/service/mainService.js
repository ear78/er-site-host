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
                text: 'This site was built and designed from the ground up utilizing HTML, CSS, Javascript, Apache, PHP, Wordpress, Affinity Suite'
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
            id: 0,
            img: 'aporcheddusite.jpg',
            details: 'column 1',
            name: 'Anthony Porcheddu Site',
            tech: 'Affinity Designer'
        },
        {
            id: 1,
            img: 'aporcheddusite2.jpg',
            details: 'column 1',
            name: 'Anthony Porcheddu Site',
            tech: 'Affinity Designer'
        },
        {
            id: 2,
            img: 'devmtnmockup.jpg',
            details: 'column 1',
            name: 'Dev Mountain Internal App design',
            tech: 'Affinity Designer'
        },
        {
            id: 3,
            img: 'provolakeweb.jpg',
            details: 'column 1',
            name: 'Elliot Richardson Poster',
            tech: 'Affinity Designer'
        },
        {
            id: 4,
            img: 'socdetoxmockup.jpg',
            details: 'column 1',
            name: 'Socdetox Site',
            tech: 'Affinity Designer, HTML, CSS, Custom Squarespace Developer Platform, Json-T'
        },
        {
            id: 5,
            img: 'gofanbasemockupgreen.jpg',
            details: 'column 1',
            name: 'Go Fan Base Test Mockup',
            tech: 'HTML, CSS, Bootstrap, Affinity Designer'
        },
        {
            id: 6,
            img: 'exploretheair.jpg',
            details: 'column 1',
            name: 'Explore The Air',
            tech: 'Affinity Designer, HTML, CSS, Javascript, React, Webpack'
        },
        {
            id: 7,
            img: 'elliotpark.jpg',
            details: 'column 2',
            name: 'Elliot Richardson Poster',
            tech: 'Affinity Designer'
        },
        {
            id: 8,
            img: 'ersiteoldermockup.jpg',
            details: 'column 2',
            name: 'Site Mockup',
            tech: 'Affinity Designer'
        },
        {
            id: 9,
            img: 'gofanbaseMockup.jpg',
            details: 'column 2',
            name: 'Go Fan Base Mockup',
            tech: 'Affinity Designer, Bootstrap, HTML, CSS'
        },
        {
            id: 10,
            img: 'outdoorweb.jpg',
            details: 'column 2',
            name: 'Outdoor Graphic Design',
            tech: 'Affinity Designer'
        },
        {
            id: 11,
            img: 'erichmockup.jpg',
            details: 'column 2',
            name: 'Elliot Richardson Mockup',
            tech: 'Affinity Designer'
        },
        {
            id: 12,
            img: 'earsiteicons.jpg',
            details: 'column 3',
            name: 'Icon Design',
            tech: 'Affinity Designer'
        },
        {
            id: 13,
            img: 'devmtnsurveymockup.jpg',
            details: 'column 3',
            name: 'Dev Mountain Survey Mockup',
            tech: 'Affinity Designer'
        },
        {
            id: 14,
            img: 'futureweb.jpg',
            details: 'column 3',
            name: 'Future Site Design',
            tech: 'Affinity Designer'
        },
        {
            id: 15,
            img: 'draxemockup.jpg',
            details: 'column 3',
            name: 'Dr. Axe Mockup',
            tech: 'Affinity Designer'
        },
        {
            id: 16,
            img: 'fadetowestmockup.jpg',
            details: 'column 3',
            name: 'Fade Into The West Design',
            tech: 'Affinity Designer'
        } ]



//// RESUME PAGE DATA /////////////////////////////////

    this.resumes = [

        {
            sectionTitle: 'Front End Web Developer/Web Designer',
            jobTitle: 'Front End Developer 2015 - Present',
            jobList: ['Experience with HTML,CSS,Javascript,Jquery, Angular, React, Node.js, Gulp, Sass, Bootstrap, Wordpress, Git to build interactive websites', 'Experience with responsive design using media queries, Css, Bootstrap, and fluid grid systems', 'Experience with CMS systems, Wordpress, Squarespace, Go Daddy site builder', 'Experience with Affinity Photo/Designer, Pixelmator, Sketch, Adobe', 'Able to translate PSD mockups using HTML,CSS,Javascript with a keen eye for design']
        },
        {
            sectionTitle: 'Apple',
            jobTitle: 'Tech Support 2015 - Present',
            jobList: ['Troubleshooting iOS devices and personal Macintosh computers', 'Handle both software and hardware technical support', 'Systematic diagnosis and documentation of all services', 'Provided Teamwork and leadership of my technical team', 'Excellent composure in high stress situations, always aiming to align and assure all of my customers', 'World class customer service, ensuring each customer has a great experience with Apple\'s in store tech support']
        },
        {
            sectionTitle: 'Projects',
            jobTitle: 'Current Projects',
            jobList: ['Konsumer(E-Commerce) - Designed and built from the ground up with Angular, HTML, CSS, Javascript, Jquery, Node.js, NPM, Gulp, Sass, Affinity Designer', 'Explore The Air(ETA) - Designed and built from the ground up with React, HTML, CSS, Javascript, WebPack, Affinity Designer', 'Future Custom Wordpress Template - Built from the ground up using HTML, CSS, Javascript, Wordpress, Php', 'Redesign and Build of Elliot Richardson.com - Built from the ground up using Angular, HTML, CSS, Javascript, Jquery, Gulp, Sass, Node.js, NPM', 'Lyft Website Clone - Built from the ground up as a group project for school using React, HTML, CSS, Javascript, Jquery, Webpack, Bootstrap, Node.js, SQL']
        },
        {
            sectionTitle: 'Education',
            jobTitle: 'Current Education',
            jobList: ['Bachelor of Arts in Music, 2005, California State University of Fullerton', 'Dev Mountain 2016 Full Stack Web Development Program']
        }
    ]


}); // end of service function
