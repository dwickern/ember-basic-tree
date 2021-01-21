import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class TreeItemComponent extends Component {
  #actions = {
    expand: this.expand,
    collapse: this.collapse,
    toggle: this.toggle,
  };

  /** Track expanded state on the component if `onExpanded` is not being used */
  @tracked _isExpanded;

  get isExpanded() {
    if (this.args.onExpanded && this.args.isExpanded !== undefined) {
      return this.args.isExpanded;
    }
    if (this._isExpanded !== undefined) {
      return this._isExpanded;
    }
    return this.args.isExpanded || false;
  }

  get isExpandable() {
    return this.args.isExpandable !== undefined ? this.args.isExpandable : true;
  }

  get publicAPI() {
    return {
      ...this.args,
      isExpanded: this.isExpanded,
      isExpandable: this.isExpandable,
      actions: this.#actions,
    };
  }

  setExpanded(isExpanded) {
    if (this.args.onExpanded) {
      this.args.onExpanded(isExpanded, this.publicAPI);
    }
    this._isExpanded = isExpanded;
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
