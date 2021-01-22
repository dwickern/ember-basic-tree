import { A } from '@ember/array';
import Component from '@ember/component';
import ComponentG from '@glimmer/component';
import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, settled, find, click } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | ember basic tree', function (hooks) {
  setupRenderingTest(hooks);

  hooks.beforeEach(function () {
    this.actions = {};
    this.send = (actionName, ...args) =>
      this.actions[actionName].apply(this, args);
  });

  test('render expanded nodes', async function (assert) {
    await render(hbs`
      <EmberBasicTree as |tree|>
        <tree.node @isExpanded={{true}}>
          <tree.node @content="node"/>
        </tree.node>
      </EmberBasicTree>
    `);

    assert.dom('*').hasText('node');
  });

  test('do not render collapsed nodes', async function (assert) {
    await render(hbs`
      <EmberBasicTree as |tree|>
        <tree.node @isExpanded={{false}}>
          <tree.node @content="node"/>
        </tree.node>
      </EmberBasicTree>
    `);

    assert.dom('*').hasText('');
  });

  test('expand and collapse', async function (assert) {
    this.set('isExpanded', false);
    await render(hbs`
      <EmberBasicTree as |tree|>
        <tree.node @isExpanded={{this.isExpanded}}>
          <tree.node @content="node"/>
        </tree.node>
      </EmberBasicTree>
    `);

    assert.dom('*').hasText('');

    this.set('isExpanded', true);
    assert.dom('*').hasText('node');

    this.set('isExpanded', false);
    assert.dom('*').hasText('');
  });

  test('notify when items are expanded and collapsed', async function (assert) {
    let expanded = null;
    this.onExpanded = function (value) {
      expanded = value;
    };
    await render(hbs`
      <EmberBasicTree as |tree|>
        <tree.node @onExpanded={{this.onExpanded}}>
          <tree.node @content="node"/>
        </tree.node>
      </EmberBasicTree>
    `);

    const expander = find('.ember-basic-tree-expander');

    await click(expander);
    assert.equal(expanded, true);

    await click(expander);
    assert.equal(expanded, false);
  });

  test('dynamically add nodes', async function (assert) {
    const items = A();
    this.set('items', items);
    await render(hbs`
      <EmberBasicTree as |tree|>
        {{#each items as |item|}}
          <tree.node @content={{item}}/>
        {{/each}}
      </EmberBasicTree>
    `);

    items.pushObject('foo');
    await settled();
    assert.dom('*').hasText('foo');

    this.set('items', ['baz']);
    assert.dom('*').hasText('baz');
  });

  test('custom contentComponent', async function (assert) {
    this.owner.register(
      'component:custom-content',
      class extends Component {
        layout = hbs`
          {{@node.title}}: {{@node.content}}
        `;
      }
    );

    this.set('customTitle', 'title1');
    await render(hbs`
      <EmberBasicTree @contentComponent={{component "custom-content"}} as |tree|>
        <tree.node @content="content" @title={{this.customTitle}}/>
      </EmberBasicTree>
    `);

    assert.dom('*').hasText('title1: content');

    this.set('customTitle', 'title2');
    assert.dom('*').hasText('title2: content');
  });
});
