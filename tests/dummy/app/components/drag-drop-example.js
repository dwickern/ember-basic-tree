import Component from '@ember/component';
import { computed } from '@ember/object';
import layout from '../templates/components/drag-drop-example';
import sampleData from '../models/directory-structure';

export default Component.extend({
  layout,
  classNames: 'drag-drop-example',

  root: sampleData(),

  inspect: computed(function() {
    return JSON.stringify(this.get('root'), null, 2);
  }),

  actions: {
    handleDrop(obj, ops) {
      let dragged = obj.content;
      let draggedParent = obj.parent.content;
      let dropTarget = ops.target.node;

      draggedParent.children.removeObject(dragged);
      dropTarget.children.pushObject(dragged);
      this.notifyPropertyChange('inspect');
    }
  }
});
