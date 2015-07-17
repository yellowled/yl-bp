[← Back to TOC](TOC.md)

# Setting up

## Requirements

* [Grunt](http://gruntjs.com)
* [Bower](http://bower.io)

Grunt and Bower depend on [node.js](http://nodejs.org). grunt-scss-lint requires [scss-lint](https://github.com/causes/scss-lint), scss-lint depends on [Ruby](http://www.ruby-lang.org).

### Installation

Please refer to the documentation of your OS and/or the documentation of these requirements.

## Get started

In the project directory:

1. `npm install` (install [Grunt plugins](grunt.md#plugins-included) required for build script; also executes `bower install` to install [JS assets](javascript.md) included in this boilerplate automagically)
2. `grunt` (start build script with default task, which is starting a simple local webserver and running the `watch` task)

[Additional Grunt tasks](grunt.md#additional-grunt-tasks) are available for testing and deploying code to staging and live servers.

## “I don't need …”

If a project doesn't require some of the [JS assets](javascript.md), comment them out in `grunt/contrib-concat.js` before running `grunt`. Optionally, also remove them from `bower.json` before install.
