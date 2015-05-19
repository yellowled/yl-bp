[Back to TOC](TOC.md)

# Setting up

In the project directory:

1. `npm install` (install [Grunt plugins](#plugins-used) required for build script; also executes `bower install` to install [JS assets](#js) included in this boilerplate automagically)
2. `grunt` (start build script with default task, which is starting a simple local webserver and running the `watch` task)

[Additional Grunt tasks](#additional-grunt-tasks) are available for testing and deploying code to staging and live servers.

## “I don't need …”

If a project doesn't require some of the [JS assets](#js), comment them out in `grunt/contrib-concat.js` before running `grunt`. Optionally, also remove them from `bower.json` before install.
