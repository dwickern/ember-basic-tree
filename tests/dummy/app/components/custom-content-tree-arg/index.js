// BEGIN-SNIPPET custom-content-tree-arg-index.js
import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';

export default class extends Component {
  @service notify;

  @action
  handleClick(label, event) {
    event.preventDefault();
    this.notify.info(`Clicked ${label}!`);
  }
}
// END-SNIPPET
