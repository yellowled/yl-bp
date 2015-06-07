[← Back to TOC](TOC.md)

# SCSS partials

Apart from the main SCSS files (`master.scss` and `oldie.scss`), the `scss` directory contains partials which are currently organized in four directories. Please also see [SCSS concepts](scss-concepts.md).

## `base`

`_normalize.scss` contains [normalize.css](github.com/necolas/normalize.css). `_elements.scss` contains some useful base styles not covered by normalize – styles that are not set there because they are “too design-related”, yet used very often. `_helpers.scss` contains helpers classes for iconfonts as well as styles needed for the [Browse Happy](http://browsehappy.com) and [Enable JS](http://www.enable-javascript.com) hints.

All partials in `base` should *always* be included in `master.scss` and `oldie.scss`. The content emitted by `_helpers.scss` can be tweaked in `main/init/_settings.scss`.

## `ext`

`_colors.scss` contains constants for a [better color palette](http://clrs.cc/). `plugins` contains mixins for JS/jQuery plugins included in the boilerplate:

* [AccessibleTabs](https://github.com/ginader/Accessible-Tabs)
* [Cycle 2](https://github.com/malsup/cycle2)
* [gmaps](https://github.com/hpneo/gmaps)
* a modal window in [MagnificPopup](https://github.com/dimsemenov/Magnific-Popup).

All partials in `ext` should *always* be included in `master.scss` and `oldie.scss`. Since they only contain constants or mixins, they don't emit CSS unless explicity used.

## `lib`

`_extends.scss` contains [placeholder selectors](http://thesassway.com/intermediate/understanding-placeholder-selectors) for use with `@extend` to replace helper classes adopted from [H5BP](https://html5boilerplate.com).

`parts` contains styles and classes for common parts of web sites – forms, images, messages and navigation. The form (base) styles are heavily inspired by [Formalize](http://formalize.me/), images mainly contains image classes used with [ProcessWire](http://processwire.com), and the navigation styles are required by [reponsive-nav.js](http://responsive-nav.com/).

`mixins` is a collection of mixins for various purposes:

* `_buttons.scss` – buttons (gradient, flat, bordered)
* `_grid.scss` – flexible grid system
* `_icon.scss` – CSS-only animated hamburger icon
* `_img.scss` – responsive images + SVGs, figures (simple, fancy, animated caption)
* `_position.scss` – horizontal/vertical centering
* `_shapes.scss` – CSS-only folded corner, speech bubble, ribbon, triangle
* `_tables.scss` – tables (simple, striped)
* `_typography.scss` – ligatures, smart blockquotes
* `_unit.scss` – `rem` and `calc`

All partials in `lib` should *always* be included in `master.scss` and `oldie.scss`. Most of them contain SCSS that does not emit CSS unless explicity used (extends, mixins and functions). The content emitted by partials in `lib/parts` can be tweaked in `main/init/_settings.scss`.

## `main`

`_common.scss`, `_legacy.scss`, `_tablet.scss`, `_laptop.scss`, and `_desktop.scss` are the proposed files to write project styles in. In this order, they reflect sensible, provisional breakpoints for mobile-first responsive web design. Apart from `_common.scss`, which is supposed to contain the common generic styles, all of them are `@imported` in the scaffolding process (see below).

`scaffold` contains `_print.scss` for print styles, `_ie.scss` for styles specific to IE < 9, and `_media.scss` for styles assigned to the various breakpoints via `@media` queries as well as the actual code for those `@media` queries.

`init` contains `_settings.scss` which is used to enable or disable parts of the partials included in the boilerplate by setting certain variables to `true` or `false`, depending on whether that part of the SCSS is being used. `_variables.scss` is supposed to contain project-specific constants or to override existing variables.

This is the part of the SCSS where “actual work is done”, meaning it's where SCSS is actually being written and scaffolded. Apart from `_print.scss`, which is just a “solid starting point” for print styles, all of the partials in `main` either initially contain no SCSS, contain configurable SCSS or are vital for the boilerplate's SCSS structure. Therefore, they all should *always* be included, *especially* is the project scope includes IE < 9.