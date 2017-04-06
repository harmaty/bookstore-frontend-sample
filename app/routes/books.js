import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return {
      books: this.get('store').findAll('book'),
      favorites: this.get('store').findAll('favorite')
    };
  },

  actions: {
    add: function(book) {
      let favorite = this.get('store').createRecord('favorite', {id: book.id });
      favorite.save().then(() => {
        this.refresh();
      });
    },

    remove: function(book) {
      let favorite = this.get('store').peekRecord('favorite', book.id );
      favorite.destroyRecord().then(() => {
        this.refresh();
      });
    }
  }
});
