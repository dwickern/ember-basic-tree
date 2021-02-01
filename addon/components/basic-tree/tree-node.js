import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

/**
 * An node in the tree, constructed with the `{{tree.Node}}` API:
 * ```hbs
 * <BasicTree as |tree|>
 *   <tree.Node @content="test"/>
 * </BasicTree>
 * ```
 *
 * Or in a `childrenComponent` using the `tree` argument:
 * ```hbs
 * <@tree.Node @content="test"/>
 * ```
 * @class {{basic-tree/tree-node}}
 * @public
 */
export default class BasicTreeNodeComponent extends Component {
  #actions = {
    expand: this.expand,
    collapse: this.collapse,
    toggle: this.toggle,
  };

  /**
   * Track expanded state on the component if `onExpanded` is not being used
   * @field _isExpanded
   * @hide
   */
  @tracked _isExpanded;

  _hasBlock;

  /**
   * Whether the node is expanded
   * @argument isExpanded
   * @type boolean
   */
  get isExpanded() {
    if ('onExpanded' in this.args && 'isExpanded' in this.args) {
      return !!this.args.isExpanded;
    }
    if (this._isExpanded !== undefined) {
      return this._isExpanded;
    }
    return this.args.isExpanded || false;
  }

  get ariaExpanded() {
    if (!this.isExpandable) {
      return false;
    }
    return String(this.isExpanded);
  }

  /**
   * Whether the node can be expanded and collapsed
   *
   * Defaults to `true` if the tree node was created in block form:
   * ```hbs
   * <tree.Node>
   *   ...
   * </tree.Node>
   * ```
   *
   * Defaults to `false` if the tree node was created inline:
   * ```hbs
   * <tree.Node/>
   * ```
   * @argument isExpandable
   * @type {boolean}
   */
  get isExpandable() {
    return 'isExpandable' in this.args ? !!this.args.isExpandable : this._hasBlock;
  }

  /**
   * The public tree node API
   * @property publicAPI
   * @return {TreeNodeAPI}
   * @hide
   */
  get publicAPI() {
    return {
      ...this.args,
      isExpanded: this.isExpanded,
      isExpandable: this.isExpandable,
      actions: this.#actions,
    };
  }

  /**
   * Action called when the tree node is expanded or collapsed
   * @action onExpanded
   * @param {boolean} isExpanded true if the node was expanded, false if collapsed
   * @param {TreeNodeAPI} node the tree node API
   * @return {void}
   * @public
   */
  setExpanded(isExpanded) {
    if (this.args.onExpanded) {
      this.args.onExpanded(isExpanded, this.publicAPI);
    }
    this._isExpanded = isExpanded;
  }

  @action
  setHasBlock(hasBlock) {
    this._hasBlock = hasBlock;
  }

  @action
  expand() {
    this.setExpanded(true);
  }

  @action
  collapse() {
    this.setExpanded(false);
  }

  @action
  toggle() {
    this.setExpanded(!this.isExpanded);
  }
}
