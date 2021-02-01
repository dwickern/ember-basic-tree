// import EmberRouter from '@ember/routing/router';
import AddonDocsRouter, { docsRoute } from 'ember-cli-addon-docs/router';
import config from 'dummy/config/environment';

export default class Router extends AddonDocsRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  docsRoute(this, function () {
    this.route('installation');
    this.route('usage');
    this.route('customization', function () {
      this.route('content');
      this.route('expander');
      this.route('children');
    });
    this.route('examples', function () {
      // BEGIN-SNIPPET navigation.js
      this.route('navigation', function () {
        this.route('child1', function () {
          this.route('descendant1');
          this.route('descendant2');
          this.route('descendant3');
        });
        this.route('child2', function () {
          this.route('descendant1');
          this.route('descendant2');
          this.route('descendant3');
        });
      });
      // END-SNIPPET
      this.route('context-menu');
      this.route('recursive');
    });
  });
  this.route('not-found', { path: '/*path' });
});
