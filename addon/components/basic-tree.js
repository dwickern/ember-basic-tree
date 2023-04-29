import Component from '@glimmer/component';
import ContentComponent from './basic-tree/tree-content';
import ExpanderComponent from './basic-tree/tree-expander';
import ChildrenComponent from './basic-tree/tree-children';
import NodeComponent from './basic-tree/tree-node';

/**
 * The main tree component
 * ```hbs
 * <BasicTree as |tree|>
 *   <tree.Node @content="hello world"/>
 * </BasicTree>
 * ```
 * @class {{basic-tree}}
 * @yield {Hash} tree The yielded block
 * @yield {Component} tree.Node Constructs a tree node
 * @public
 */
export default class BasicTreeComponent extends Component {
  /**
   * Component used to render the content
   * @argument contentComponent
   * @type {Component}
   */
  contentComponent = ContentComponent;

  /**
   * Component used to render the expander
   * @argument expanderComponent
   * @type {Component}
   */
  expanderComponent = ExpanderComponent;

  /**
   * Component used to render the children of a node
   * @argument childrenComponent
   * @type {Component}
   */
  childrenComponent = ChildrenComponent;

  /**
   * Component used to render the tree node
   * @argument nodeComponent
   * @type {Component}
   * @private
   */
  nodeComponent = NodeComponent;

  /**
   * The public tree API
   * @property publicAPI
   * @return {TreeAPI}
   * @hide
   */
  get publicAPI() {
    return {
      contentComponent: this.contentComponent,
      expanderComponent: this.expanderComponent,
      childrenComponent: this.childrenComponent,
      nodeComponent: this.nodeComponent,
      ...this.args,
    };
  }
}
