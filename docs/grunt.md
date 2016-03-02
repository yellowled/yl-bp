[← Back to TOC](TOC.md)

# Grunt

`grunt` starts a watch task which sets up a development environment that by default

* watches for changes to HTML, SCSS and JS files
* compiles
    * pages and includes to HTML
    * SCSS to CSS (including `pixrem` and `autoprefixer` through PostCSS)
    * multiple JS files into a single file
* serves the site on a local live-reloading webserver

## Additional Grunt tasks

* `grunt deploy` – build to `dist` directory for deployment
* `grunt test` – test HTML, SCSS and JS files

Note that the directory `grunt` also contains additional tasks not meant to be executed manually – `bs-init`, `bs-inject-css`, `bs-inject-js` and `init`. Those are helper tasks used internally to run [browser-sync](http://www.browsersync.io) properly.

`grunt deploy` generates and compresses an [XML sitemap](https://support.google.com/webmasters/answer/156184). You can set the domain for the live site in `config.js` or it will be retrieved from the `homepage` key in `package.json`.

## Testing a build locally

Note that due to the way that paths are specified in the HTML templates, a build (in `dist`) will not work on the local webserver. To test a build locally (on OS X or Linux), do

* `grunt deploy`
* `cd dist`
* start a local server, e.g.
    * `python -m SimpleHTTPServer 8000`
    * `php -S localhost:8000`
* point your webbrowser to `http://localhost:8000`

## Plugins included

* [autoprefixer](https://www.npmjs.com/package/autoprefixer)
* [browser-sync](https://www.npmjs.com/package/browser-sync)
* [css-mqpacker](https://www.npmjs.com/package/css-mqpacker)
* [grunt-cache-bust](https://www.npmjs.com/package/grunt-cache-bust)
* [grunt-contrib-clean](https://npmjs.org/package/grunt-contrib-clean)
* [grunt-contrib-compress](https://www.npmjs.com/package/grunt-contrib-compress)
* [grunt-contrib-concat](https://npmjs.org/package/grunt-contrib-concat)
* [grunt-contrib-copy](https://npmjs.org/package/grunt-contrib-copy)
* [grunt-contrib-cssmin](https://www.npmjs.com/package/grunt-contrib-cssmin)
* [grunt-contrib-imagemin](https://npmjs.org/package/grunt-contrib-imagemin)
* [grunt-contrib-jshint](https://npmjs.org/package/grunt-contrib-jshint)
* [grunt-contrib-uglify](https://npmjs.org/package/grunt-contrib-uglify)
* [grunt-contrib-watch](https://npmjs.org/package/grunt-contrib-watch)
* [grunt-htmlhint](https://npmjs.org/package/grunt-htmlhint)
* [grunt-modernizr](https://npmjs.org/package/grunt-modernizr)
* [grunt-postcss](https://npmjs.org/package/grunt-postcss)
* [grunt-processhtml](https://www.npmjs.com/package/grunt-processhtml)
* [grunt-sass](https://npmjs.org/package/grunt-sass)
* [grunt-sass-lint](https://www.npmjs.org/package/grunt-sass-lint)
* [grunt-sitemap](https://www.npmjs.com/package/grunt-sitemap)
* [grunt-svgmin](https://www.npmjs.org/package/grunt-svgmin)
* [grunt-svgstore](https://www.npmjs.com/package/grunt-svgstore)
* [jit-grunt](https://www.npmjs.com/package/jit-grunt)
* [pixrem](https://www.npmjs.com/package/pixrem)
* [time-grunt](https://www.npmjs.com/package/time-grunt)
