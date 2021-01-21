import Component from '@glimmer/component';

export default class BasicTreeComponent extends Component {
  get publicAPI() {
    return {
      nodeComponent: 'ember-basic-tree/tree-item',
      expanderComponent: 'ember-basic-tree/tree-item-expander',
      contentComponent: 'ember-basic-tree/tree-item-content',
      childrenComponent: 'ember-basic-tree/tree-item-children',
      ...this.args,
    };
  }
}
