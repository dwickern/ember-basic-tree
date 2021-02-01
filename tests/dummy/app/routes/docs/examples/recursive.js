import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class DocsExamplesDynamicRoute extends Route {
  @service directories;

  model() {
    return this.directories.root;
  }
}
