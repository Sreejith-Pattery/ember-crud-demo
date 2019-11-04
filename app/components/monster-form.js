import Ember from 'ember';

export default Ember.Component.extend({
    isHighLevel:Ember.computed.gte('model.level',10),
    actions:{
        save(){
            this.attrs.save();
        }
    }
});
