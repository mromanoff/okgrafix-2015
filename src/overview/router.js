/**
 * Overview Router
 * @type {exports}
 */

var Router = require('../common/router');
var Radio = require('backbone.radio');

var LayoutView = require('./layout-view');
var IndexRoute = require('./route');

var heroCollection = require('./hero/collection');
var WorkCollection = require('../work/collection');
var PhotographyCollection = require('../photography/collection');
var CodeCollection = require('./code/collection');

module.exports = Router.extend({
  initialize: function (options) {
    this.container = options.container;
    this.heroCollection = heroCollection;
    this.workCollection = new WorkCollection();
    this.photographyCollection = new PhotographyCollection();
    this.codeCollection = new CodeCollection();
  },

  onBeforeEnter: function () {
    this.layout = new LayoutView();
    this.container.show(this.layout);
    Radio.command('footer', 'activate', {path: ''});
  },

  routes: {
    '': 'index'
  },

  index: function () {
    return new IndexRoute({
      layout: this.layout,
      heroCollection: this.heroCollection,
      workCollection: this.workCollection,
      photographyCollection: this.photographyCollection,
      codeCollection: this.codeCollection
    });
  }
});
