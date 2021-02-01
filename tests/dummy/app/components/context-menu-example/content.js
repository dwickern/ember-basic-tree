// BEGIN-SNIPPET context-menu-content.js
import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class extends Component {
  @action
  openContextMenu(dropdown, event) {
    event.preventDefault();
    dropdown.actions.open();
  }
}
// END-SNIPPET
