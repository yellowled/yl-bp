[← Back to TOC](TOC.md)

# SCSS

Apart from the main SCSS file (`master.scss`), the `src/scss` directory contains partials which are currently organized in three directories. Please also see [SCSS concepts](scss-concepts.md).

## `ext`

`_normalize.scss` contains [normalize.css](github.com/necolas/normalize.css). `_base.scss` contains some useful base styles not covered by normalize – styles that are not set there because they are “too design-related”, yet used very often – as well as styles needed for the [Enable JS](http://www.enable-javascript.com) hint. `_colors.scss` contains constants for a [better color palette](http://clrs.cc/). `plugins` contains mixins for JS/jQuery plugins included in the boilerplate:

* [AccessibleTabs](https://github.com/ginader/Accessible-Tabs)
* [Cycle 2](https://github.com/malsup/cycle2)
* [gmaps](https://github.com/hpneo/gmaps)
* a modal window in [MagnificPopup](https://github.com/dimsemenov/Magnific-Popup).

All partials in `ext` should *always* be included in `master.scss`. Since they only contain constants or mixins, they don't emit CSS unless explicity used. The exception are `_normalize.scss` and `_base.scss`, which contain  CSS which will *always* be useful.

## `lib`

`parts` contains styles and classes for common parts of web sites – forms, images, messages and navigation. The form (base) styles are heavily inspired by [Formalize](http://formalize.me/), images mainly contains image classes used with [ProcessWire](http://processwire.com), and the navigation styles are required by [reponsive-nav.js](http://responsive-nav.com/).

`mixins` is a collection of mixins for various purposes:

* `_buttons.scss` – buttons (gradient, flat, bordered)mixins
* `_figure.scss` – `<figure> (fancy, simple, w/ animated caption)
* `_grid.scss` – flexible grid system
* `_helpers.scss` – helper classes adopted from [H5BP](https://html5boilerplate.com)
* `_icon.scss` – CSS-only animated hamburger icon
* `_img.scss` – responsive images + SVGs, figures (simple, fancy, animated caption)
* `_position.scss` – horizontal/vertical centering
* `_shapes.scss` – CSS-only folded corner, speech bubble, ribbon, triangle
* `_tables.scss` – tables (simple, striped, responsive)
* `_typography.scss` – ligatures, smart blockquotes
* `_units.scss` – `rem` and `calc`

All partials in `lib` should *always* be included in `master.scss`. Most of them contain SCSS that does not emit CSS unless explicity used (extends, mixins and functions). The content emitted by partials in `lib/parts` can be tweaked in `main/init/_settings.scss`.

## `main`

`_common.scss`, `_legacy.scss`, `_tablet.scss`, `_laptop.scss`, and `_desktop.scss` are the proposed files to write project styles in. In this order, they reflect sensible, provisional breakpoints for mobile-first responsive web design. Apart from `_common.scss`, which is supposed to contain the common generic styles, all of them are `@imported` in the scaffolding process (see below). In addition, there's `_print.scss` for print styles.

`init` contains

* `_settings.scss` which is used to enable or disable parts of the partials included in the boilerplate by setting certain variables to `true` or `false`, depending on whether that part of the SCSS is being used
* `_variables.scss` which is supposed to contain project-specific constants or to override existing variables
* `_media.scss` which assigns partials to the various breakpoints via `@media` queries as well setting the breakpoints for those `@media` queries through variables which can be overridden

This is the part of the SCSS where “actual work is done”, meaning it's where SCSS is actually being written and scaffolded. Apart from `_print.scss`, which is just a “solid starting point” for print styles, all of the partials in `main` either initially contain no SCSS, contain configurable SCSS or are vital for the boilerplate's SCSS structure. Therefore, they all should *always* be included.
