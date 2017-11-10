import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('ember-basic-tree/tree-item-children', 'Integration | Component | ember basic tree/tree item children', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{ember-basic-tree/tree-item-children}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#ember-basic-tree/tree-item-children}}
      template block text
    {{/ember-basic-tree/tree-item-children}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
