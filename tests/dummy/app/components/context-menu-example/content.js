// BEGIN-SNIPPET context-menu-content.js
import Component from '@glimmer/component';

export default class ContentComponent extends Component {
  onOpen(dropdown, event) {
    // prevent the menu from opening with the left mouse button
    return event.type === 'contextmenu';
  }
}
// END-SNIPPET
