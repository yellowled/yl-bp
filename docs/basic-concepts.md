[← Back to TOC](TOC.md)

# Basic concepts

## HTML

HTML is compiled from [Handlebars](http://handlebarsjs.com) templates using [assemble](http://assemble.io).

Layouts are in `src/layouts/`, partials in `src/partials/`. Pages should be kept in `src/pages/`, but *can* be in subdirectories; i.e. `src/pages/blog/index.hbs` will generate `blog/index.html`. Generated markup files (`.html`) are explicitly excluded from the repository in the `.gitignore`.

## SCSS

CSS is compiled from [Sass](http://sass-lang.com) using [libsass](http://libsass.org), [pixrem](https://github.com/robwierzbowski/node-pixrem) and [autoprefixer](https://github.com/nDmitry/grunt-autoprefixer) (no need to write `rem` fallbacks or vendor prefixes).

The main SCSS file `@import`s partials from the subdirectories of `src/scss/`. `@media` queries should be written [mobile first](http://bradfrostweb.com/blog/web/mobile-first-responsive-web-design/) based on [normalize.css](https://github.com/necolas/normalize.css/).

See [SCSS concepts](scss-concepts.md).

## JavaScript

JS and [jQuery](http://jquery.com) packages are (mostly) managed by [npm](https://www.npmjs.com/package/npm); jQuery is copied to the `src/scripts/` directory in the `postinstall` using the `copy:init` task (for backwards compatibility).

See [JS structure](javascript.md)

## Misc

To avoid CSS hacks, [conditional classes](http://www.paulirish.com/2008/conditional-stylesheets-vs-css-hacks-answer-neither/) are available; also, [Modernizr](http://modernizr.com) is included for feature detection. A customized build of Modernizr will be created by the build script.
