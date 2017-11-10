import Component from '@ember/component';
import layout from '../templates/components/ember-basic-tree';

export default Component.extend({
  layout,

  classNames: 'ember-basic-tree',
  nodeComponent: 'ember-basic-tree/tree-item',
  expanderComponent: 'ember-basic-tree/tree-item-expander',
  contentComponent: 'ember-basic-tree/tree-item-content',
  childrenComponent: 'ember-basic-tree/tree-item-children',
  onExpanded() {},

  init() {
    this._super(...arguments);

    this.set('publicAPI', {
      actions: {
      }
    });
  },

  didReceiveAttrs() {
    this._super(...arguments);

    this.updateState({
      ...this.attrs
    });
  },

  updateState(changes) {
    let state = this.get('publicAPI');
    let changed = Object.keys(changes).some(key => state[key] !== changes[key]);
    if (changed) {
      return this.set('publicAPI', { ...state, ...changes });
    }
  },
});
