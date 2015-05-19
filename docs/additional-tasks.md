[← Back to TOC](TOC.md)

# Additional Grunt tasks

* `grunt stage` – build to `dist` directory for staging
* `grunt deploy` – build to `dist` directory for deployment
* `grunt test` – test HTML, SCSS and JS files

The only difference between `grunt stage` and `grunt deploy` is that the first one uses the `stage` target of the `assemble` task. In the `stage` target, the variable `production` is set to `false`, which makes it possible to use e.g. `{{#unless production}}{{/unless}}` in Handlebars templates (`.hbs`) to alter the generated HTML for staging or production environments. As an example, this can be used to exclude Google Analytics or Piwik snippets on staging servers.
