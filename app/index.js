'use strict';

var Generator = require('yeoman-generator').Base,
    _ = Generator.prototype._;


var validate = {
  name: function (name) {
    if (!name) {
      return 'provide a name';
    }
    if (name != _.slugify(name)) {
      return 'provide a url-safe name';
    }
    return true;
  },
  year: function (year) {
    if (year === +year) {
      return 'invalid';
    }
    return true;
  },
};


// source name -> destination name
var destination = function (filename) {
  return filename.replace(/^_/, '.');
};


module.exports = Generator.extend({
  prompting: function () {
    this.prompt([
      {
        type: 'input',
        name: 'name',
        message: 'Project name',
        validate: validate.name
      },
      {
        type: 'input',
        name: 'year',
        message: 'Created in',
        default: new Date().getFullYear(),
        validate: validate.year
      },
      {
        type: 'confirm',
        name: 'global',
        message: 'Make this module global',
        default: false
      },
      {
        type: 'confirm',
        name: 'travis',
        message: 'Use Travis CI',
        default: false
      },
    ], function (options) {
      this.options = options;
      return done();
    }.bind(this));

    var done = this.async();
  },

  templating: function () {
    this.expand('*', { cwd: this.sourceRoot() })
      .filter(function (file) {
        if (file == '_travis.yml') {
          return this.options.travis;
        }
        return true;
      }.bind(this))
      .forEach(function (file) {
        this.template(file, destination(file), this.options);
      }.bind(this));
  }
});
