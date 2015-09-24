[← Back to TOC](TOC.md)

# SCSS concepts

This boilerplate uses Sass/SCSS to generate the CSS file, `src/styles/master.css`. SCSS is supposed to be written mobile-first based on [normalize.css](https://github.com/necolas/normalize.css/). As a workaround for IE < 9 which do not support media queries, `respond.js` is included in the `<head>` (from a CDN).

Most of the partials in `src/scss` and its subdirectories are **not** meant to be edited (in order to make it easier to update projects). You should not (need to) edit files in `src/scss` other than:

* `src/scss/master.scss` – see [Compiled CSS](#compiled-css)
* partials in `src/scss/main/init` – project-based settings, variables and `@media` queries
* partials in `src/scss/main` – common styles, styles for resolutions corresponding to breakpoints as well as print

## Overriding defaults

Some of the variables defined in partials use Sass's `!default` flag. These variables can be easily overridden by setting them in `src/scss/main/init/_variables.scss`. If a given variable with the `!default` flag is **not** set in the settings partial, it will fall back to the default value.

## Compiled CSS

The only SCSS partial you might want to exclude if you don't use it (by commenting them out in `src/scss/master.scss`) is the following line in the Vendor section:

* `../scripts/magnific-popup/src/css/main`

All other SCSS any given project might not require is either encapsulated in mixins or placeholder selectors or can be excluded in `src/scss/main/init/_settings.scss`.
