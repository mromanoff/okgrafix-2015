/**
 * Photography Show View
 * @type {exports}
 */

var View = require('../../common/view');
var template = require('./template.hbs');

module.exports = View.extend({
  template: template,
  className: 'gallery'
});
