# A boilerplate for HTML5 projects

This is what I usually use to start projects. Derived from [H5BP](https://github.com/h5bp/html5-boilerplate), inspired by [init](https://github.com/drublic/init).

[![Build Status](https://travis-ci.org/yellowled/yl-bp.svg?branch=master)](https://travis-ci.org/yellowled/yl-bp)
[![Dependency Status](https://david-dm.org/yellowled/yl-bp.svg)](https://david-dm.org/yellowled/yl-bp)
[![devDependency Status](https://david-dm.org/yellowled/yl-bp/dev-status.svg)](https://david-dm.org/yellowled/yl-bp#info=devDependencies)

## Requirements

* [Grunt](http://gruntjs.com)
* [Bower](http://bower.io)

Grunt and Bower depend on [node.js](http://nodejs.org). Some of the [Grunt plugins](#grunt-plugins-used) depend on command line tools to be installed on your (build) system:

* grunt-favicons requires [ImageMagick](http://www.imagemagick.org)
* grunt-scss-lint requires [scss-lint](https://github.com/causes/scss-lint)

scss-lint depends on [Ruby](http://www.ruby-lang.org).

### Installation

Please refer to the documentation of your OS and/or the documentation of these requirements.

### Basic concepts

* HTML markup is generated from [Handlebars](http://handlebarsjs.com) templates using [assemble](http://assemble.io). Layouts are in `src/tpl/`, partials in `src/inc/`; pages in should be kept in `/`. Generated markup files (`.html`) are explicitly excluded from the repository in the `.gitignore`.
* CSS is generated from [Sass/SCSS](http://sass-lang.com) using [libsass](http://libsass.org) and [autoprefixer](https://github.com/nDmitry/grunt-autoprefixer) (so no need to write vendor prefixes). The main SCSS files are `scss/master.scss` and `scss/oldie.scss` (for IE < 9), which `@import` partials from the subdirectories of `scss/`. `@media` queries should be written [mobile first](http://bradfrostweb.com/blog/web/mobile-first-responsive-web-design/).
* JS/[jQuery](http://jquery.com) packages are (mostly) managed by Bower, which is configured to import them to the `scripts/` directory. Most of the JS assets are concatenated into a single file (`scripts/master.js`) by the build script. Any JS specific to the project should go into the `scripts/main.js` file.
* To avoid CSS hacks, [conditional classes](http://www.paulirish.com/2008/conditional-stylesheets-vs-css-hacks-answer-neither/) are available; also, [Modernizr](http://modernizr.com) is included for feature detection. A customized build of Modernizr will be created by the build script.

## Setting up

In the project directory:

1. `npm install` (install [Grunt plugins](#grunt-plugins-used) required for build script; also executes `bower install` to install [JS assets](#js-assets-included) included in this boilerplate automagically)
2. `grunt` (start build script with default task, which is starting a simple local webserver and running the `watch` task)

### Additional Grunt tasks

* `grunt stage` – build to `dist` directory for staging
* `grunt deploy` – build to `dist` directory for deployment
* `grunt test` – test HTML, SCSS and JS files

The only difference between `grunt stage` and `grunt deploy` is that the first one uses the `dev` target of the `assemble` task. In the `dev` target, the variable `production` is set to `false`, which makes it possible to use e.g. `{{#unless production}}{{/unless}}` in Handlebars templates (`.hbs`) to alter the generated HTML for staging or production environments. As an example, this can be used to exclude Google Analytics or Piwik snippets on staging servers.

### “I don't need …”

If a project doesn't require some of the [JS assets](#js-assets-included), uncomment them in `grunt/contrib-concat.js` before running `grunt`. Optionally, also remove them from `bower.json` before install.

## Grunt plugins used

* [grunt-contrib-clean](https://npmjs.org/package/grunt-contrib-clean)
* [grunt-contrib-concat](https://npmjs.org/package/grunt-contrib-concat)
* [grunt-contrib-connect](https://npmjs.org/package/grunt-contrib-connect)
* [grunt-contrib-copy](https://npmjs.org/package/grunt-contrib-copy)
* [grunt-contrib-imagemin](https://npmjs.org/package/grunt-contrib-imagemin)
* [grunt-contrib-jshint](https://npmjs.org/package/grunt-contrib-jshint)
* [grunt-contrib-uglify](https://npmjs.org/package/grunt-contrib-uglify)
* [grunt-contrib-watch](https://npmjs.org/package/grunt-contrib-watch)
* [grunt-autoprefixer](https://npmjs.org/package/grunt-autoprefixer)
* [grunt-favicons](https://npmjs.org/package/grunt-favicons)
* [grunt-fontello](https://npmjs.org/package/grunt-fontello)
* [grunt-hashres](https://npmjs.org/package/grunt-hashres)
* [grunt-htmlhint](https://npmjs.org/package/grunt-htmlhint)
* [grunt-modernizr](https://npmjs.org/package/grunt-modernizr)
* [grunt-sass](https://npmjs.org/package/grunt-sass)
* [grunt-scss-lint](https://www.npmjs.org/package/grunt-scss-lint)
* [grunt-svgmin](https://www.npmjs.org/package/grunt-svgmin)
* [assemble](https://www.npmjs.org/package/assemble)
* [connect-livereload](https://www.npmjs.org/package/connect-livereload)

## JS assets included

### jQuery plugins

* [AccessibleTabs](https://github.com/ginader/Accessible-Tabs)
* [Cycle 2](https://github.com/malsup/cycle2) ([Optional plugins](http://jquery.malsup.com/cycle2/download/#plugins))
* [FitVids](https://github.com/davatron5000/FitVids.js)
* [gmaps](https://github.com/hpneo/gmaps)
* [jQuery-Collapse](https://github.com/danielstocks/jQuery-Collapse/)
* [MagnificPopup](https://github.com/dimsemenov/Magnific-Popup)
* [tablesaw](https://github.com/filamentgroup/tablesaw)

### JS helpers

* [AccessifyHTML5](https://github.com/yatil/accessifyhtml5.js)
* [box-sizing-Polyfill](https://github.com/Schepp/box-sizing-polyfill)
* [H5BP log](https://github.com/h5bp/html5-boilerplate/blob/master/src/js/plugins.js)
