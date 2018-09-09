(function() {

  var app = angular.module('WebDevChallenge', []);
  
  app.controller('randomQuote', function(){
    this.info = quotes[Math.floor(Math.random()*quotes.length)];
    this.pick = function(){
      this.info = quotes[Math.floor(Math.random()*quotes.length)];
    };
  });
  
  var quotes = [
    {
      challenge: "Build a REST API to obtain information about movies, directors, and actors, as well as add their favorites of each, to a personal list.",
      skill: "API"
    },
    {
      challenge: "Build a SOAP API that would let you store someone's email - such as for allowing a newsletter signup.",
      skill: "API"
    },
    {
      challenge: "Add API authentication.",
      skill: "API"
    },
    {
      challenge: "Add API request throttling.",
      skill: "API"
    },
    { challenge: "Add API versioning.",
      skill: "API"
    },
    {
      challenge: "Document your API.",
      skill: "API"
    },
    { challenge: "Display a Facebook feed on a page through its API.",
      skill: "API"
    },
    { challenge: "Display a Twitter feed on a page through its API.",
      skill: "API"
    },
    { challenge: "Create a web app that lets authenticated users post tweets to your Twitter account.",
      skill: "API"
    },
    { challenge: "Build a Reddit bot that follows you around and gives you random compliments when you post.",
      skill: "API"
    },
    { challenge: "Display LinkedIn work experience on a page through its API.",
      skill: "API"
    },
    { challenge: "Create a webapp using a weather API and an image API like flickr to display images based on the weather.",
      skill: "API"
    },
    { challenge: "Use the Spotify API to search for a particular song or artist and create a webpage with details on that particular song/artist.",
      skill: "API"
    },
    { challenge: "Create a custom-styled map using the Google Maps API.",
      skill: "API"
    },
    {
      challenge: "Traditional form-based identifier/password.",
      skill: "Auth and Sessions"
    },
    {
      challenge: "Traditional form-based Identifier/password w/remember-me feature.",
      skill: "Auth and Sessions"
    },
    {
      challenge: "Implement JWT auth.",
      skill: "Auth and Sessions"
    },
    {
      challenge: "SSO.",
      skill: "Auth and Sessions"
    },
    {
      challenge: "Password-less auth.",
      skill: "Auth and Sessions"
    },
    {
      challenge: "Auth via social network accounts.",
      skill: "Auth and Sessions"
    },
    {
      challenge: "Implement an OAuth2 server and a fake service and a fake app to make use of it.",
      skill: "Auth and Sessions"
    },
    {
      challenge: "Adding user registration.",
      skill: "Auth and Sessions"
    },
    {
      challenge: "Incorporate email confirmation and forgotten password functionality.",
      skill: "Auth and Sessions"
    },
    {
      challenge: "Set up WordPress and create a custom theme ~ [Developing a WordPress Theme from Scratch](http://www.taniarascia.com/developing-a-wordpress-theme-from-scratch/)",
      skill: "CMS"
    },
    {
      challenge: "Set up Drupal and create a custom theme ~ [Drupal Theming Guide](https://www.drupal.org/documentation/theme)",
      skill: "CMS"
    },
    {
      challenge: "Draw Homer Simpson using nothing but CSS.",
      skill: "CSS"
    },
    {
      challenge: "Create a sprite sheet of Simpsons character components and create your own FrankenSimpson from it.",
      skill: "CSS"
    },
    {
      challenge: "Vertically center a div.",
      skill: "CSS"
    },
    {
      challenge: "Create a responsive three column equal height layout divided by 1px borders/dividers.",
      skill: "CSS"
    },
    {
      challenge: "Create a sticky header.",
      skill: "CSS"
    },
    {
      challenge: "Create a sticky footer.",
      skill: "CSS"
    },
    {
      challenge: "Collapse a navigation bar to a hamburger menu when you're using any mobile device ~ [Responsive Dropdown Navigation Bar](http://www.taniarascia.com/responsive-dropdown-navigation-bar/)",
      skill: "CSS"
    },
    {
      challenge: "Create a responsive website by using CSS media queries.",
      skill: "CSS"
    },
    {
      challenge: "Collapse a navigation bar to a hamburger menu when you're using any mobile device ~ [Tutorial](http://www.taniarascia.com/responsive-dropdown-navigation-bar/)",
      skill: "CSS"
    },
    {
      challenge: "Collapse a navigation bar to a hamburger menu, but only for the iPhone 6 Plus.",
      skill: "CSS"
    },
    {
      challenge: "Create a basic CSS3 animation which uses opacity, transform and keyframes.",
      skill: "CSS"
    },
    {
      challenge: "Try a preprocessor like LESS, SASS or Stylus.",
      skill: "CSS"
    },
    {
      challenge: "Create a responsive grid with flexbox ~ [Easiest Flex Grid Ever](http://www.taniarascia.com/easiest-flex-grid-ever/)",
      skill: "CSS"
    },
    {
      challenge: "Create a basic website using Bootstrap",
      skill: "CSS"
    },
    {
      challenge: "Create a basic website using Foundation",
      skill: "CSS"
    },
    {
      challenge: "Create a pure CSS parallax scrolling effect",
      skill: "CSS"
    },
    {
      challenge: "Create a normalized database for storing comments and authors. Using that database, display the comments with authors, without incurring N+1 queries to do it.",
      skill: "Databases"
    },
    {
      challenge: "Create an app that stores users, movies, lets users favorite movies, tag movies with common tags, and tag movies with their own user-created tags.",
      skill: "Databases"
    },
    {
      challenge: "Use the entity-attribute-value pattern to create an app that lets you define and store any arbitrary characteristics about any video game.",
      skill: "Databases"
    },
    {
      challenge: "Replicate Reddit's comment system in as much detail as possible using the adjacency list pattern.",
      skill: "Databases"
    },
    {
      challenge: "Replicate Reddit's comment system in as much detail as possible using the closure table pattern.",
      skill: "Databases"
    },
    {
      challenge: "Replicate Reddit's comment system in as much detail as possible using the nested set pattern.",
      skill: "Databases"
    },
    {
      challenge: "Write a SQL query that removes all duplicate records from a table.",
      skill: "Databases"
    },
    {
      challenge: "Create a Vagrant box that would let you host a new Rails site.",
      skill: "Environments and Servers"
    },
    {
      challenge: "Create a Vagrant box that would let you host a new WordPress site.",
      skill: "Environments and Servers"
    },
    {
      challenge: "Create a Vagrant box that would let you host a new Django site.",
      skill: "Environments and Servers"
    },
    {
      challenge: "Set up your own DigitalOcean server and provision it to host one of the three sites above.",
      skill: "Environments and Servers"
    },
    {
      challenge: "Set up public/private SSH keys for that server.",
      skill: "Environments and Servers"
    },
    {
      challenge: "Set up a local MAMP or WAMP environment ~ [MAMP Tutorial](http://www.taniarascia.com/local-environment/), [WAMP Tutorial](https://www.vultr.com/docs/setup-a-wamp-server-on-windows)",
      skill: "Environments and Servers"
    },
    {
      challenge: "Set up virtual hosts so each site can have its own local domain ~ [MAMP Tutorial](http://www.taniarascia.com/setting-up-virtual-hosts/), [WAMP Tutorial](https://john-dugan.com/wamp-vhost-setup/)",
      skill: "Environments and Servers"
    },
    {
      challenge: "Create a Bootstrap web application and link it to your server. http://getbootstrap.com/",
      skill: "Environments and Servers"
    },
    {
      challenge: "Create a simple Node.js application and host it on your server.",
      skill: "Environments and Servers"
    },
    {
      challenge: "Create and run a Docker image that would let you host a Django site.",
      skill: "Environments and Servers"
    },
    {
      challenge: "Deploy using a Docker image on services such as DigitalOcean or AWS ECS.",
      skill: "Environments and Servers"
    },
    {
      challenge: "Set up two different GitHub accounts, and learn how to SSH different projects with different accounts.",
      skill: "Git"
    },
    {
      challenge: "Use command line to push a Git repository from a local environment to a live server. ~ [Getting Started with Git](http://www.taniarascia.com/getting-started-with-git/)",
      skill: "Git"
    },
    {
      challenge: "Squash different Git commits together",
      skill: "Git"
    },
    {
      challenge: "Try creating a pull request on another repository at the command line. You never know what good stuff could happen...",
      skill: "Git"
    },
    {
      challenge: "Create an image slider that accepts any number of slides and changes them every 5 seconds.",
      skill: "Javascript"
    },
    {
      challenge: "Create a sticky element that doesn't attach to the top of the screen until you scroll to its position.",
      skill: "Javascript"
    },
    {
      challenge: "AJAX submit a form, validate it server-side, and display those validation errors.",
      skill: "Javascript"
    },
    {
      challenge: "Validate form data on the client-side.",
      skill: "Javascript"
    },
    {
      challenge: "Build a date-picker plugin.",
      skill: "Javascript"
    },
    {
      challenge: "Create a drag and drop functionality to upload files.",
      skill: "Javascript"
    },
    {
      challenge: "Build a tic tac toe game.",
      skill: "Javascript"
    },
    {
      challenge: "Build a simple multi-page app using Angular.js.",
      skill: "Javascript"
    },
    {
      challenge: "Build a select-box replacement plugin.",
      skill: "Javascript"
    },
    {
      challenge: "Build a plugin that provides a popup window functionality.",
      skill: "Javascript"
    },
    {
      challenge: "Redo the exercises using jQuery.",
      skill: "Javascript"
    },
    {
      challenge: "Create a navigation bar that tracks your scrolling activity and indicates which section of the page you're viewing.",
      skill: "Javascript"
    },
    {
      challenge: "Create a pomodoro timer with start/stop/reset functionality.",
      skill: "Javascript"
    },
    {
      challenge: "Build a chrome extension that contains a content script which modifies the Facebook appearance.",
      skill: "Misc."
    },
    {
      challenge: "Build a chrome extension which provides a possibility of adding bookmarks with a form on the newtab page.",
      skill: "Misc."
    },
    {
      challenge: "Build a chrome extension that shows WHOIS information about the domain you're on.",
      skill: "Misc."
    },
    {
      challenge: "Build a scraper that aggregates all the hash tags and their links from Twitter's home page. Hint - requires you to be authenticated.",
      skill: "Misc."
    },
    {
      challenge: "Build a link shortener.",
      skill: "Misc."
    },
    {
      challenge: "Create a link/URL lengthener (making it much longer) with funny/meme/themed words in the URL, ex. Star Wars, Space Jam, etc.",
      skill: "Misc."
    },
    {
      challenge: "Build a simple portfolio website to showcase your work.",
      skill: "Misc."
    },
    {
      challenge: "Create a Ionic project using http://www.ionicframework.com/",
      skill: "Mobile/Hybrid"
    },
    {
      challenge: "Build the hybrid app on the Android platform, resulting in a .APK file of your app.",
      skill: "Mobile/Hybrid"
    },
    {
      challenge: "Build the hybrid app on the iOS platform, resulting in a .IPA file of your app.",
      skill: "Mobile/Hybrid"
    },
    {
      challenge: "Try to create a project using Laravel.",
      skill: "PHP"
    },
    {
      challenge: "Use the PHP password API to safely generate a password hash, verify it, and check if it needs to be rehashed due to a stronger work-factor.",
      skill: "PHP"
    },
    {
      challenge: "Create basic login system.",
      skill: "PHP"
    },
    {
      challenge: "Create a custom form validation",
      skill: "PHP"
    },
    {
      challenge: "Create a small custom blog system that contains CRUD operations",
      skill: "PHP"
    },
    {
      challenge: "Implement a templating engine (smarty or twig)",
      skill: "PHP"
    },
    {
      challenge: "Use Grunt to compile Sass into CSS, minify, and autoprefix. ~ [Getting Started with Grunt and Sass](http://www.taniarascia.com/getting-started-with-grunt-and-sass/)",
      skill: "Task runners"
    },
    {
      challenge: "Use Gulp to compile Sass into CSS, minify, and autoprefix. ~ [Gulp for Beginners](https://css-tricks.com/gulp-for-beginners/)",
      skill: "Task runners"
    },
    {
      challenge: "Use [npm scripts](http://substack.net/task_automation_with_npm_run) to compile Sass into CSS, minify and autoprefix",
      skill: "Task runners"
    },
    {
      challenge: "Setup LiveReload with either Grunt or Grunt.",
      skill: "Task runners"
    },
    {
      challenge: "Write a shell script that copies files from one location to another.",
      skill: "Terminal/Shell"
    },
    {
      challenge: "Write a shell script that allows you to google a search term from the command line.",
      skill: "Terminal/Shell"
    },
    {
      challenge: "Write a shell script that prints a unicorn in ASCII characters.",
      skill: "Terminal/Shell"
    }
  ];
  
})();