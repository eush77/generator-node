'use strict';

var Generator = require('yeoman-generator').Base,
    _ = Generator.prototype._;

var path = require('path');


module.exports = Generator.extend({
  templating: function () {
    var options = {
      name: _.slugify(path.basename(this.destinationRoot())),
      timestamp: new Date().toISOString(),
      path: this.destinationRoot()
    };

    this.template('package.json', 'package.json', options);
  }
});
