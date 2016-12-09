# SCSS

[← Back to TOC](index.md)

Apart from the main SCSS file (`master.scss`), the `src/scss` directory contains partials which are currently organized in three directories. Please also see [SCSS concepts](scss-concepts.md).

## `project`

* `_settings.scss` – enable or disable parts of the partials included in the boilerplate by setting certain variables to `true` or `false`, depending on whether that part of the SCSS is being used
* `_variables.scss` – project-specific constants or overrides for existing variables
* `_fonts.scss` – project-specific SCSS for (self-hosted) [webfonts](https://github.com/yellowled/yl-bp/blob/master/src/scss/mixins/_webfonts.scss) should be added here to make sure it is included as early as possible in the compiled CSS

## `mixins/_mixins.scss`

* `_accordion.scss` – [accordion](http://frend.co/components/accordion/)
* `_buttons.scss` – button (gradient, flat, bordered, unstyled) mixins
* `_embed.scss` – responsive media embeds
* `_figure.scss` – `<figure>` (simple, fancy, with animated caption)
* `_grid.scss` – flexible grid system
* `_helpers.scss` – helper classes (mostly) adopted from [H5BP](https://html5boilerplate.com)
* `_img.scss` – responsive and retina images and SVGs
* `_modal.scss` – a modal window in [MagnificPopup](https://github.com/dimsemenov/Magnific-Popup).
* `_position.scss` – horizontal and vertical centering
* `_shapes.scss` – CSS-only folded corner, speech bubble, ribbon, triangle
* `_tables.scss` – tables (simple, striped, responsive)
* `_tabs.scss` – [tabs](http://frend.co/components/tabs/)
* `_typography.scss` – ligatures, smart blockquotes
* `_webfonts.scss` – self-hosted webfonts

## `base/_base.scss`

* `defaults.scss` – useful base styles not covered by normalize – styles that are not set there because they are “too design-related”, yet used very often – as well as styles needed for the [Enable JS](http://www.enable-javascript.com) hint
* `_forms.scss` – styles are heavily inspired by [Formalize](http://formalize.me/)
* `_images.scss` – image positioning classes usually used by CMS/WYSIWYG editors
* `_messages.scss` – message classes
* `_navigation.scss` – required by [reponsive-nav.js](http://responsive-nav.com/)
* `_print.scss` – basic print styles

In `base`, there's also `_constants.scss`, which contains overrideable constants for  `@media` queries, typography and colors. It has been placed in `base` to keep it in a directory with files that are not meant to be edited.

All partials in `mixins/_mixins.scss` and `base/_base.scss` should *always* be included in `master.scss`. Most of them contain SCSS that does not emit CSS unless explicity used (extends, mixins and functions). The code emitted by some partials in `base` can be tweaked in `settings/_settings.scss`. The exceptions are `_normalize.scss`, `_base.scss` and `_print.scss` which contain CSS which will *always* be useful.

## `modules`

This is the part of the SCSS where “actual work is done”, meaning it's where SCSS is actually being written using a modular approach. Apart from `modules/_global.scss` which is really just a placeholder, partials for every project-specific module are supposed to be created and included here.