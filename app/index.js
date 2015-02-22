'use strict';

var Generator = require('yeoman-generator').Base,
    _ = Generator.prototype._;

var path = require('path');


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
    if (year != +year || year <= 0) {
      return 'invalid';
    }
    return true;
  },
};


var extractKeywords = function (string) {
  return string.split(',')
    .map(Function.call.bind(''.trim))
    .filter(Boolean);
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
        default: path.basename(this.destinationRoot()),
        validate: validate.name
      },
      {
        type: 'input',
        name: 'description',
        message: 'Description'
      },
      {
        type: 'input',
        name: 'keywords',
        message: 'Keywords',
        filter: extractKeywords
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
      {
        type: 'confirm',
        name: 'test',
        message: 'Plan some tests',
        default: true
      },
      {
        type: 'input',
        name: 'test',
        message: 'Test command',
        default: 'tape test/*.js',
        when: function (options) {
          return options.test;
        }
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
