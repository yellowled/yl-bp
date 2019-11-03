# yl-bp

## Getting started

-   Requirements: [node.js](http://nodejs.org)
-   `npm install` to install dependencies
-   `npm start` to start a live-reloading local development server
-   `npm run build` to create an optimized build

## Build

The local development server as well as the build are handled by [parcel](https://parceljs.org), including transpiling ES6 with babel and compiling SCSS to CSS as well as minifying both. Files in `static` are copied to the build directory (`dist`) as well.

### SCSS structure

-   `_settings.scss`: predefined values for various things, most of them overridable (`!default`)
-   `_variables.scss`: designated placed to override settings
-   `_mixins.scss`: mixins for various purposes, some of them used by the rest of the SCSS
-   `_base.scss`: sensible base styles, mostly for things not covered by normalize
-   `modules/`: This is the part of the SCSS where “the actual work is done”, meaning it's where SCSS is actually being written using a modular approach. Apart from `modules/_global.scss` which is really just a placeholder, partials for every project-specific module are supposed to be created and included here.

## License

Please note that this project includes components that all have their own licenses which may differ from the license of this project. Everything that was developed specifically for this project is under [MIT license](https://github.com/yellowled/yl-bp/blob/master/LICENSE.md).
