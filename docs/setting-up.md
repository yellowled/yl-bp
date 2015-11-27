[← Back to TOC](TOC.md)

# Setting up

## Requirements

* [Grunt](http://gruntjs.com)
* [node.js](http://nodejs.org)
* [Ruby](http://www.ruby-lang.org).
* [scss-lint](https://github.com/causes/scss-lint)

### Installation

Please refer to the documentation of your OS and/or the documentation of these requirements.

## Get started

In the project directory:

1. `npm install` (install [Grunt plugins](grunt.md#plugins-included) required for build script and [JS assets](javascript.md) included in this boilerplate)
2. `grunt` (start build script with default task, which is starting a simple local webserver and running the `watch` task)

[Additional Grunt tasks](grunt.md#additional-grunt-tasks) are available for testing and deploying code to staging and live servers.

## Removing stuff

If a project doesn't require some of the [JS assets](javascript.md), comment them out in the `concat` section of `config.js` before running `grunt`. Optionally, also remove them from `package.json` before install.
