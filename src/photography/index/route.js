/**
 * Photography Index Route
 * @type {exports}
 */

var Route = require('../../common/route');
var View = require('./composite-view');

module.exports = Route.extend({
  initialize: function (options) {
    this.container = options.container;
    this.collection = options.collection;
  },

  fetch: function () {
    return this.collection.fetch();
  },

  render: function () {
    this.view = new View({
      collection: this.collection
    });

    this.container.show(this.view);
  }
});
