[← Back to TOC](TOC.md)

# SCSS concepts

This boilerplate uses Sass (SCSS) to generate two CSS files. `styles/master.css` is the main stylesheet, `styles/oldie.css` is a fallback stylesheet for IE < 9 which is necessary because the SCSS is supposed to be written mobile-first. IE < 9 needs this workaround because it doesn't support media queries.

Most of the partials in `scss` and its subdirectories are **not** meant to be edited (in order to make it easier to update projects). You should not (need to) edit files in `scss` other than:

* `scss/master.scss` and `scss/oldie.scss` – see [Compiled CSS](#compiled-css)
* partials in `scss/main/init` – project-based settings and variables
* partials in `scss/main/scaffold` – styles for IE < 9, `@media` queries and print styles
* partials in `scss/main` – common styles and styles for resolutions corresponding to breakpoints

## Overriding defaults

Some of the variables defined in partials use Sass's `!default` flag. These variables can be easily overridden by setting them in `scss/main/init/_variables.scss`. If a given variable with the `!default` flag is **not** set in the settings partial, it will fall back to the default value.

## Compiled CSS

The only SCSS partials you might want to exclude if you don't use them (by commenting them out in `scss/master.scss` and `scss/oldie.scss`) are the following lines in the Vendor section:

* `ext/iconfont/fontello`
* `../scripts/magnific-popup/src/css/main`

All other SCSS any given project might not require is either encapsulated in mixins or placeholder selectors or can be excluded in `scss/main/init/_settings.scss`.
