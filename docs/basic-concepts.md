[Back to TOC](TOC.md)

# Basic concepts

## HTML

HTML is compiled from [Handlebars](http://handlebarsjs.com) templates using [assemble](http://assemble.io). Layouts are in `src/tpl/`, partials in `src/inc/`; pages should be kept in `/`. Markup files (`.html`) are explicitly excluded from the repository in the `.gitignore`.

## (S)CSS

CSS is compiled from [Sass](http://sass-lang.com) using [libsass](http://libsass.org) and [autoprefixer](https://github.com/nDmitry/grunt-autoprefixer) (no need to write vendor prefixes). The main SCSS files `@import` partials from the subdirectories of `scss/`. `@media` queries should be written [mobile first](http://bradfrostweb.com/blog/web/mobile-first-responsive-web-design/). See [(S)CSS structure](#css).

## JavaScript

JS and [jQuery](http://jquery.com) packages are (mostly) managed by Bower, which is configured to import them to the `scripts/` directory. See [JS structure](#js)

## Misc

To avoid CSS hacks, [conditional classes](http://www.paulirish.com/2008/conditional-stylesheets-vs-css-hacks-answer-neither/) are available; also, [Modernizr](http://modernizr.com) is included for feature detection. A customized build of Modernizr will be created by the build script.