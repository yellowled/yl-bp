# My HTML5 boilerplate

This is what I usually use to start HTML5 projects.

## Build script

Uses [Grunt](http://gruntjs.com) build script (requires **at least** Grunt 0.4.0), so do `npm install` first to install required Grunt plugins locally.

## Bower

Uses [Bower](http://bower.io/) to manage Javascript helpers and jQuery plugins (including jQuery and Modernizr), so [install Bower](http://bower.io/#installing-bower) and do `bower install` to pull in all Javascript assets.

If a project doesn't require some of the JS assets, uncomment them in the `bower.json` before install and in the `Gruntfile.js` (in the `concat` section) before running `grunt`.

## Grunt plugins used

* [grunt-contrib-clean](https://npmjs.org/package/grunt-contrib-clean)
* [grunt-contrib-compass](https://npmjs.org/package/grunt-contrib-compass)
* [grunt-contrib-concat](https://npmjs.org/package/grunt-contrib-concat)
* [grunt-contrib-connect](https://npmjs.org/package/grunt-contrib-connect)
* [grunt-contrib-copy](https://npmjs.org/package/grunt-contrib-copy)
* [grunt-contrib-imagemin](https://npmjs.org/package/grunt-contrib-imagemin)
* [grunt-contrib-jshint](https://npmjs.org/package/grunt-contrib-jshint)
* [grunt-contrib-uglify](https://npmjs.org/package/grunt-contrib-uglify)
* [grunt-contrib-watch](https://github.com/gruntjs/grunt-contrib-watch)
* [grunt-hashres](https://npmjs.org/package/grunt-hashres)
* [grunt-htmlhint](https://npmjs.org/package/grunt-htmlhint)
* [grunt-modernizr](https://npmjs.org/package/grunt-modernizr)
* [connect-livereload](https://github.com/intesso/connect-livereload)

## jQuery plugins included

* [AccessibleTabs](https://github.com/ginader/Accessible-Tabs)
* [gmaps](https://github.com/hpneo/gmaps)
* [MagnificPopup](https://github.com/dimsemenov/Magnific-Popup)
* [Responsive Slides](https://github.com/viljamis/ResponsiveSlides.js)

## JS helpers included

* [AccessifyHTML5](https://github.com/yatil/accessifyhtml5.js)
* [box-sizing-Polyfill](https://github.com/Schepp/box-sizing-polyfill)
