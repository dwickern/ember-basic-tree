import Component from '@ember/component';
import { computed } from '@ember/object';
import layout from '../../templates/components/ember-basic-tree/tree-item-expander';

export default Component.extend({
  layout,
  classNameBindings: [ 'expandClass' ],

  expandClass: computed('node.isExpanded', function() {
    return this.get('node.isExpanded') ? 'ember-basic-tree-expander--expanded' : 'ember-basic-tree-expander--collapsed';
  }),

  click(e) {
    this.get('node').actions.toggle(e);
  }
});
