import Service from '@ember/service';
import { inject as service } from '@ember/service';

const ROOT_ID = 'ROOT';

export default class DirectoriesService extends Service {
  @service store;

  get root() {
    const found = this.store.peekRecord('directory', ROOT_ID);
    if (found) {
      return found;
    }
    return this.store.createRecord('directory', {
      id: ROOT_ID,
      name: 'ember-basic-tree',
      isExpanded: true,
      subdirectories: [
        this.store.createRecord('directory', {
          name: 'app',
          subdirectories: [
            this.store.createRecord('directory', { name: 'components' }),
            this.store.createRecord('directory', { name: 'controllers' }),
            this.store.createRecord('directory', { name: 'helpers' }),
            this.store.createRecord('directory', { name: 'models' }),
            this.store.createRecord('directory', { name: 'routes' }),
            this.store.createRecord('directory', {
              name: 'styles',
              files: [this.store.createRecord('file', { name: 'app.css' })],
            }),
            this.store.createRecord('directory', {
              name: 'templates',
              subdirectories: [this.store.createRecord('directory', { name: 'components' })],
              files: [this.store.createRecord('file', { name: 'application.hbs' })],
            }),
          ],
        }),
        this.store.createRecord('directory', {
          name: 'config',
          files: [
            this.store.createRecord('file', { name: 'environment.js' }),
            this.store.createRecord('file', { name: 'targets.js' }),
          ],
        }),
        this.store.createRecord('directory', {
          name: 'public',
          files: [
            this.store.createRecord('file', { name: 'crossdomain.xml' }),
            this.store.createRecord('file', { name: 'robots.txt' }),
          ],
        }),
      ],
      files: [
        this.store.createRecord('file', { name: '.editorconfig' }),
        this.store.createRecord('file', { name: '.ember-cli' }),
        this.store.createRecord('file', { name: '.eslintrc.js' }),
        this.store.createRecord('file', { name: '.gitignore' }),
        this.store.createRecord('file', { name: 'ember-cli-build.js' }),
        this.store.createRecord('file', { name: 'package.json' }),
        this.store.createRecord('file', { name: 'README.md' }),
      ],
    });
  }
}
