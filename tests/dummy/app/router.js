import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('navigation-example', function() {
    this.route('child1', function() {
      this.route('descendant1');
      this.route('descendant2');
      this.route('descendant3');
    });
    this.route('child2', function() {
      this.route('descendant1');
      this.route('descendant2');
      this.route('descendant3');
    });
  });
});

export default Router;
