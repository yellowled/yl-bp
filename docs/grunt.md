[← Back to TOC](TOC.md)

# Grunt build script

## Plugins included

* [grunt-contrib-clean](https://npmjs.org/package/grunt-contrib-clean)
* [grunt-contrib-concat](https://npmjs.org/package/grunt-contrib-concat)
* [grunt-contrib-copy](https://npmjs.org/package/grunt-contrib-copy)
* [grunt-contrib-cssmin](https://www.npmjs.com/package/grunt-contrib-cssmin)
* [grunt-contrib-imagemin](https://npmjs.org/package/grunt-contrib-imagemin)
* [grunt-contrib-jshint](https://npmjs.org/package/grunt-contrib-jshint)
* [grunt-contrib-uglify](https://npmjs.org/package/grunt-contrib-uglify)
* [grunt-contrib-watch](https://npmjs.org/package/grunt-contrib-watch)
* [grunt-autoprefixer](https://npmjs.org/package/grunt-autoprefixer)
* [grunt-browser-sync](https://www.npmjs.com/package/grunt-browser-sync)
* [grunt-hashres](https://npmjs.org/package/grunt-hashres)
* [grunt-htmlhint](https://npmjs.org/package/grunt-htmlhint)
* [grunt-modernizr](https://npmjs.org/package/grunt-modernizr)
* [grunt-sass](https://npmjs.org/package/grunt-sass)
* [grunt-scss-lint](https://www.npmjs.org/package/grunt-scss-lint)
* [grunt-svgmin](https://www.npmjs.org/package/grunt-svgmin)
* [grunt-svgstore](https://www.npmjs.com/package/grunt-svgstore)
* [assemble](https://www.npmjs.org/package/assemble)
* [time-grunt](https://www.npmjs.com/package/time-grunt)

## Additional Grunt tasks

* `grunt stage` – build to `dist` directory for staging
* `grunt deploy` – build to `dist` directory for deployment
* `grunt test` – test HTML, SCSS and JS files

The only difference between `grunt stage` and `grunt deploy` is that the first one uses the `stage` target of the `assemble` task. In the `stage` target, the variable `production` is set to `false`, which makes it possible to use e.g. `{{#unless production}}{{/unless}}` in Handlebars templates (`.hbs`) to alter the generated HTML for staging or production environments. As an example, this can be used to exclude Google Analytics or Piwik snippets on staging servers.
