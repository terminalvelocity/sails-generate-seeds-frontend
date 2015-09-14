import Ember from 'ember';

export default Ember.Mixin.create({
  deactivate() {
    this.currentModel.get('isNew') ? this.currentModel.deleteRecord() : this.currentModel.rollback();
  },
  actions: {
    save() {
      this.currentModel.save().then(() => {
        this.transitionTo(this.routeName.split('.')[0]);
      }, () => {
        console.log('Failed to save the model');
      });
    }
  }
});
