[← Back to TOC](TOC.md)

# SCSS concepts

This boilerplate uses Sass/SCSS to generate the CSS file, `src/styles/master.css`. SCSS is supposed to be written mobile-first based on [normalize.css](https://github.com/necolas/normalize.css/). As a workaround for IE < 9 which does not support media queries, `respond.js` can optionally be included in the `<head>` (from a CDN) using `src/includes/legacy/head.html`.

Most of the partials in `src/scss` and its subdirectories are **not** meant to be edited (in order to make it easier to update projects). You should not (need to) edit files in `src/scss` other than:

* `src/scss/master.scss` – see [Compiled CSS](#compiled-css)
* `src/scss/settings/_settings.scss` – see [Settings](#settings)
* `src/scss/settings/_variables.scss` – see [Overriding defaults](#overriding-defaults)
* partials in `src/scss/modules` – add project-specific global styles to `_global.scss`, create new partials for project-specific modules

## Overriding defaults

Some of the variables defined in partials use Sass's `!default` flag. These variables can be easily overridden by setting them in `src/scss/settings/_variables.scss`. If a given variable with the `!default` flag is **not** set (i.e. in the settings partial), it will fall back to the default value.

## Compiled CSS

The only SCSS partials you might want to exclude if you don't use it (by commenting them out in `src/scss/master.scss`) are the following lines in the Vendor section:

* `@import '../../node_modules/magnific-popup/src/css/main';`
* `@import '../../node_modules/slick-carousel/slick/slick.scss';`

(Also, [normalize.css](https://github.com/necolas/normalize.css/) is included as a vendor partial (using [node-normalize.scss](https://www.npmjs.com/package/node-normalize-scss)), but you most likely do not want to remove that.)

## Settings

All other SCSS any given project might not require is either encapsulated in mixins or placeholder selectors or can be excluded in `src/scss/settings/_settings.scss` by setting boolean variables accordingly.
