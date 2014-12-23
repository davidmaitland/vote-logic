import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {

  this.resource('suggestions', function() {});

  this.resource('suggestion', { path: 'suggestions/:suggestion_id' }, function() {});

  this.route('create', { path: 'suggestions/create' });

  this.route('admin/tags');

  this.route('not-found', { path: '/*path' });

});

export default Router;
