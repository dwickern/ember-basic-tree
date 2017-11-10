import Component from '@ember/component';
import layout from '../templates/components/ember-basic-tree';

export default Component.extend({
  layout,

  classNames: 'ember-basic-tree',
  nodeComponent: 'ember-basic-tree/tree-item',
  expanderComponent: 'ember-basic-tree/tree-item-expander',
  contentComponent: 'ember-basic-tree/tree-item-content',
  childrenComponent: 'ember-basic-tree/tree-item-children',

  onExpanded() {}
});
