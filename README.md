# yl-bp

[![Dependency Status](https://david-dm.org/yellowled/yl-bp.svg)](https://david-dm.org/yellowled/yl-bp)
[![devDependency Status](https://david-dm.org/yellowled/yl-bp/dev-status.svg)](https://david-dm.org/yellowled/yl-bp#info=devDependencies)

## Getting started

-   Requirements: [node.js](http://nodejs.org)
-   `npm install` to install dependencies
-   `npm start` to start a watch task and a live-reloading local server
-   `npm test` to lint HTML, SCSS and JS
-   `npm run build` to create an optimized build

## CSS build

CSS is compiled from [Sass](http://sass-lang.com) (SCSS) using [node-sass](https://www.npmjs.com/package/node-sass), [postcss](https://www.npmjs.com/package/postcss-cli), [autoprefixer](https://www.npmjs.com/package/autoprefixer) and [postcss-flexbugs-fixes](https://www.npmjs.com/package/postcss-flexbugs-fixes), then minified and optimized using [cleancss](https://www.npmjs.com/package/clean-css). [normalize.css](https://www.npmjs.com/package/node-normalize-scss) is included as a Sass partial. Sass sourcemaps are generated.

### SCSS structure

-   `presets/`: predefined values for various things, some of them overridable (`!default`)
-   `project/`: project-based settings and variables
-   `mixins/`: mixins for various purposes, some of them used by the rest of the SCSS
-   `base/`: sensible base styles, mostly for things not covered by normalize
-   `layout/`: mixins and (optional) predefined classes for different types of (grid-based) layout
-   `modules/`: This is the part of the SCSS where “the actual work is done”, meaning it's where SCSS is actually being written using a modular approach. Apart from `modules/_global.scss` which is really just a placeholder, partials for every project-specific module are supposed to be created and included here.

## JS build

JS is transpiled using [Babel](https://babeljs.io) and combined and minified using [uglify-js](https://www.npmjs.com/package/uglify-js). The only JS dependency included is [easy-toggle-state](https://www.npmjs.com/package/easy-toggle-state). JS sourcemaps are generated.

## SVG build

An SVG sprite is generated from single icons using [svg-sprite-generator](https://www.npmjs.com/package/svg-sprite-generator) and [svgo](https://www.npmjs.com/package/svgo). [svg4everybody](https://www.npmjs.com/package/svg4everybody) polyfill is included in the JS build.

## License

Please note that this project includes components that all have their own licenses which may differ from the license of this project. Everything that was developed specifically for this project is under [MIT license](https://github.com/yellowled/yl-bp/blob/master/LICENSE.md).
