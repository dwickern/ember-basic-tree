import EmberRouter from '@ember/routing/router';
import config from 'dummy/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('navigation-example', function () {
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
});
