import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.get('store').findAll('favorite');
  },

  actions: {
    remove: function(book) {
      let favorite = this.get('store').peekRecord('favorite', book.id );
      favorite.destroyRecord().then(() => {
        this.refresh();
      });
    }
  }
});
