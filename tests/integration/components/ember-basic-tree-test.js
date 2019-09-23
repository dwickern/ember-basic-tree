import { A } from '@ember/array';
import Component from '@ember/component';
import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, settled, click } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | ember basic tree', function(hooks) {
  setupRenderingTest(hooks);

  hooks.beforeEach(function() {
    this.actions = {};
    this.send = (actionName, ...args) => this.actions[actionName].apply(this, args);
  });

  test('render expanded nodes', async function(assert) {
    await render(hbs`
      {{#ember-basic-tree as |tree|}}
        {{#tree.node isExpanded=true}}
          {{tree.node "node"}}
        {{/tree.node}}
      {{/ember-basic-tree}}
    `);

    assert.dom('*').hasText('node');
  });

  test('do not render collapsed nodes', async function(assert) {
    await render(hbs`
      {{#ember-basic-tree as |tree|}}
        {{#tree.node isExpanded=false}}
          {{tree.node "node"}}
        {{/tree.node}}
      {{/ember-basic-tree}}
    `);

    assert.dom('*').hasText('');
  });


  test('expand and collapse', async function(assert) {
    this.set('isExpanded', false);
    await render(hbs`
      {{#ember-basic-tree as |tree|}}
        {{#tree.node isExpanded=isExpanded}}
          {{tree.node "node"}}
        {{/tree.node}}
      {{/ember-basic-tree}}
    `);

    assert.dom('*').hasText('');

    this.set('isExpanded', true);
    assert.dom('*').hasText('node');

    this.set('isExpanded', false);
    assert.dom('*').hasText('');
  });

  test('notify when items are expanded and collapsed', async function(assert) {
    let expanded = null;
    this.actions.onExpanded = function (value) {
      expanded = value;
    };
    await render(hbs`
      {{#ember-basic-tree onExpanded=(action "onExpanded") as |tree|}}
        {{tree.node}}
      {{/ember-basic-tree}}
    `);

    await click('.ember-basic-tree-expander');
    assert.equal(expanded, true);

    await click('.ember-basic-tree-expander');
    assert.equal(expanded, false);
  });

  test('dynamically add nodes', async function(assert) {
    const items = A();
    this.set('items', items);
    await render(hbs`
      {{#ember-basic-tree as |tree|}}
        {{#each items as |item|}}
          {{tree.node item}}
        {{/each}}
      {{/ember-basic-tree}}
    `);

    items.pushObject('foo');
    await settled();
    assert.dom('*').hasText('foo');

    this.set('items', [ 'baz' ]);
    assert.dom('*').hasText('baz');
  });

  test('custom contentComponent', async function(assert) {
    this.owner.register('component:custom-content', Component.extend({
      layout: hbs`
        {{node.title}}: {{node.content}}
      `
    }));

    this.set('customTitle', 'title1');
    await render(hbs`
      {{#ember-basic-tree contentComponent=(component "custom-content") as |tree|}}
        {{tree.node "content" title=customTitle}}
      {{/ember-basic-tree}}
    `);

    assert.dom('*').hasText('title1: content');

    this.set('customTitle', 'title2');
    assert.dom('*').hasText('title2: content');
  });
});
