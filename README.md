# yl-bp

## Getting started

-   Requirements: [node.js](http://nodejs.org)
-   `npm install` to install dependencies
-   `npm start` to start a watch task and a live-reloading local server
-   `npm test` to lint HTML, SCSS and JS
-   `npm run build` to create an optimized build

## CSS build

CSS is compiled from [Sass](http://sass-lang.com) (SCSS) using [node-sass](https://www.npmjs.com/package/node-sass), [postcss](https://www.npmjs.com/package/postcss-cli), [autoprefixer](https://www.npmjs.com/package/autoprefixer) and [postcss-flexbugs-fixes](https://www.npmjs.com/package/postcss-flexbugs-fixes), then minified and optimized using [cleancss](https://www.npmjs.com/package/clean-css). [normalize.css](https://www.npmjs.com/package/node-normalize-scss) is included; sourcemaps are generated.

### SCSS structure

-   `_settings.scss`: predefined values for various things, most of them overridable (`!default`)
-   `_variables.scss`: designated placed to override settings
-   `_mixins.scss`: mixins for various purposes, some of them used by the rest of the SCSS
-   `_base.scss`: sensible base styles, mostly for things not covered by normalize
-   `modules/`: This is the part of the SCSS where “the actual work is done”, meaning it's where SCSS is actually being written using a modular approach. Apart from `modules/_global.scss` which is really just a placeholder, partials for every project-specific module are supposed to be created and included here.

## JS build

JS is transpiled using [Babel](https://babeljs.io) and combined and minified using [uglify-js](https://www.npmjs.com/package/uglify-js); sourcemaps are generated.

## SVG build

An SVG sprite is generated from single icons using [svgstore-cli](https://github.com/svgstore/svgstore-cli) and [svgo](https://www.npmjs.com/package/svgo). [svg4everybody](https://www.npmjs.com/package/svg4everybody) is included in the JS build.

## License

Please note that this project includes components that all have their own licenses which may differ from the license of this project. Everything that was developed specifically for this project is under [MIT license](https://github.com/yellowled/yl-bp/blob/master/LICENSE.md).
