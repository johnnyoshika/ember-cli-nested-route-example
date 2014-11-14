import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
    this.resource('library', function() {
        this.resource('books', function() {
            this.route('add');
            this.resource('book', {path: ':book_id'}, function() {
                this.route('edit');
            });
        });
    });

});

export default Router;
