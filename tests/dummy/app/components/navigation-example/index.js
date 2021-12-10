// BEGIN-SNIPPET navigation-example.js
import Component from '@glimmer/component';
import { inject as service } from '@ember/service';

export default class extends Component {
  @service router;
}
// END-SNIPPET
