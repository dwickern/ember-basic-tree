import Component from '@ember/component';
import { computed } from '@ember/object';
import layout from '../../templates/components/ember-basic-tree/tree-item';

function defaultTo(defaultValue) {
  return computed({
    get() { return defaultValue; },
    set(_, value) {
      return value === undefined ? defaultValue : value;
    }
  });
}

const TreeItemComponent = Component.extend({
  layout,

  classNames: 'ember-basic-tree-item',
  isExpandable: defaultTo(true),
  isExpanded: defaultTo(false),
  onExpanded() {},

  init() {
    this._super(...arguments);

    this.set('publicAPI', {
      isExpanded: this.get('isExpanded'),
      isExpandable: this.get('isExpandable'),
      actions: {
        expand: (...args) => this.send('expand', ...args),
        collapse: (...args) => this.send('collapse', ...args),
        toggle: (...args) => this.send('toggle', ...args)
      }
    });
  },

  didReceiveAttrs() {
    this._super(...arguments);

    const props = Object.keys(this.attrs);
    const state = this.getProperties(props);
    this.updateState(state);
  },

  updateState(changes) {
    let state = this.get('publicAPI');
    let changed = Object.keys(changes).some(key => state[key] !== changes[key]);
    if (changed) {
      return this.set('publicAPI', { ...state, ...changes });
    }
  },

  updateExpanded(isExpanded) {
    let state = this.get('publicAPI');
    if (state.isExpanded !== isExpanded) {
      this.updateState({ isExpanded });
      this.get('onExpanded')(isExpanded, state);
    }
  },

  actions: {
    expand() {
      this.updateExpanded(true);
    },

    collapse() {
      this.updateExpanded(false);
    },

    toggle() {
      this.updateExpanded(!this.get('publicAPI').isExpanded);
    }
  }
});

TreeItemComponent.reopenClass({
  positionalParams: [ 'content' ]
});

export default TreeItemComponent;
