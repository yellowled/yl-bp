# My HTML boilerplate

This is what I usually use to start projects. Derived from [H5BP](https://github.com/h5bp/html5-boilerplate) and [init](https://github.com/drublic/init).

## Requirements

* [Sass](http://sass-lang.com)
* [Grunt](http://gruntjs.com)
* [Bower](http://bower.io)

Sass depends on [Ruby](http://www.ruby-lang.org), Grunt and Bower depend on [node.js](http://nodejs.org). Some of the [Grunt plugins](#grunt-plugins-used) depend on command line tools to be installed on your (build) system.

### Installation

Please refer to the documentation of your OS and/or the documentation of these requirements.

## Setting up

In the project directory:

1. `npm install` (install [Grunt plugins](#grunt-plugins-used) required for build script)
2. `bower install` (install [JS assets](#js-assets-included) included in this boilerplate)
3. `grunt watch` (start build script)

### “I don't need …”

If a project doesn't require some of the [JS assets](#js-assets-included), uncomment them in the `bower.json` before install and in the `Gruntfile.js` (in the `concat` section) before running `grunt`.

## Grunt plugins used

* [grunt-contrib-clean](https://npmjs.org/package/grunt-contrib-clean)
* [grunt-contrib-concat](https://npmjs.org/package/grunt-contrib-concat)
* [grunt-contrib-connect](https://npmjs.org/package/grunt-contrib-connect)
* [grunt-contrib-copy](https://npmjs.org/package/grunt-contrib-copy)
* [grunt-contrib-imagemin](https://npmjs.org/package/grunt-contrib-imagemin)
* [grunt-contrib-jshint](https://npmjs.org/package/grunt-contrib-jshint)
* [grunt-contrib-sass](https://npmjs.org/package/grunt-contrib-sass)
* [grunt-contrib-uglify](https://npmjs.org/package/grunt-contrib-uglify)
* [grunt-contrib-watch](https://npmjs.org/package/grunt-contrib-watch)
* [grunt-favicons](https://npmjs.org/package/grunt-favicons)
* [grunt-hashres](https://npmjs.org/package/grunt-hashres)
* [grunt-htmlhint](https://npmjs.org/package/grunt-htmlhint)
* [grunt-modernizr](https://npmjs.org/package/grunt-modernizr)
* [grunt-notify](https://npmjs.org/package/grunt-notify)
* [grunt-targethtml](https://npmjs.org/package/grunt-targethtml)
* [connect-livereload](https://github.com/intesso/connect-livereload)

## JS assets included

### jQuery plugins

* [AccessibleTabs](https://github.com/ginader/Accessible-Tabs)
* [Cycle 2](https://github.com/malsup/cycle2) ([Optional plugins](http://jquery.malsup.com/cycle2/download/#plugins))
* [gmaps](https://github.com/hpneo/gmaps)
* [MagnificPopup](https://github.com/dimsemenov/Magnific-Popup)

### JS helpers

* [AccessifyHTML5](https://github.com/yatil/accessifyhtml5.js)
* [box-sizing-Polyfill](https://github.com/Schepp/box-sizing-polyfill)
* [H5BP log](https://github.com/h5bp/html5-boilerplate/blob/master/js/plugins.js)
* [main-shiv](http://drublic.de/blog/add-main-element-modernizr/)
