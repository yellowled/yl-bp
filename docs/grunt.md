[← Back to TOC](TOC.md)

# Grunt

`grunt` starts a watch task which sets up a development environment that by default

* watches for changes to Handlebars, SCSS and JS files
* compiles
    * Handlebars to HTML
    * SCSS to CSS (including pixrem and autoprefixer through PostCSS)
    * multiple JS files into a single file
* serves the site on a local live-reloading webserver

## Additional Grunt tasks

* `grunt stage` – build to `dist` directory for staging
* `grunt deploy` – build to `dist` directory for deployment
* `grunt test` – test HTML, SCSS and JS files

Note that the directory `grunt` also contains additional tasks not meant to be executed manually – `bs-init`, `bs-inject` and `init`. Those are helper tasks used internally to run [browser-sync](http://www.browsersync.io) properly.

The major difference between `grunt stage` and `grunt deploy` is that the first one uses the `stage` target of the `assemble` task. In the `stage` target, the variable `production` is set to `false`, which makes it possible to use e.g. `{{#unless production}}{{/unless}}` in Handlebars templates (`.hbs`) to alter the generated HTML for staging or production environments. As an example, this can be used to exclude Google Analytics or Piwik snippets on staging servers.

Also, `grunt deploy` generates and compresses an [XML sitemap](https://support.google.com/webmasters/answer/156184). You can set the domain for the live site in `config.js` or it will be retrieved from the `homepage` key in `package.json`.

## Plugins included

* [assemble](https://www.npmjs.org/package/assemble)
* [autoprefixer](https://www.npmjs.com/package/autoprefixer)
* [browser-sync](https://www.npmjs.com/package/browser-sync)
* [grunt-contrib-clean](https://npmjs.org/package/grunt-contrib-clean)
* [grunt-contrib-compress](https://www.npmjs.com/package/grunt-contrib-compress)
* [grunt-contrib-concat](https://npmjs.org/package/grunt-contrib-concat)
* [grunt-contrib-copy](https://npmjs.org/package/grunt-contrib-copy)
* [grunt-contrib-cssmin](https://www.npmjs.com/package/grunt-contrib-cssmin)
* [grunt-contrib-imagemin](https://npmjs.org/package/grunt-contrib-imagemin)
* [grunt-contrib-jshint](https://npmjs.org/package/grunt-contrib-jshint)
* [grunt-contrib-uglify](https://npmjs.org/package/grunt-contrib-uglify)
* [grunt-contrib-watch](https://npmjs.org/package/grunt-contrib-watch)
* [grunt-hashres](https://npmjs.org/package/grunt-hashres)
* [grunt-htmlhint](https://npmjs.org/package/grunt-htmlhint)
* [grunt-modernizr](https://npmjs.org/package/grunt-modernizr)
* [grunt-postcss](https://npmjs.org/package/grunt-postcss)
* [grunt-sass](https://npmjs.org/package/grunt-sass)
* [grunt-scss-lint](https://www.npmjs.org/package/grunt-scss-lint)
* [grunt-sitemap](https://www.npmjs.com/package/grunt-sitemap)
* [grunt-svgmin](https://www.npmjs.org/package/grunt-svgmin)
* [grunt-svgstore](https://www.npmjs.com/package/grunt-svgstore)
* [jit-grunt](https://www.npmjs.com/package/jit-grunt)
* [pixrem](https://www.npmjs.com/package/pixrem)
* [time-grunt](https://www.npmjs.com/package/time-grunt)
