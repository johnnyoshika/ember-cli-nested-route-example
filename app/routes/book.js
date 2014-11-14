import Ember from 'ember';

export default Ember.Route.extend({

    model: function(params) {
        return Ember.Object.create({
            id: params.book_id,
            description: 'Book with ID ' + params.book_id
        });
    }

});
