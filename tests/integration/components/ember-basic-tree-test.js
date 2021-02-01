import { A } from '@ember/array';
import Component from '@ember/component'; // eslint-disable-line ember/no-classic-components
import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, settled, find, click } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | ember basic tree', function (hooks) {
  setupRenderingTest(hooks);

  test('render expanded nodes', async function (assert) {
    await render(hbs`
      <BasicTree as |tree|>
        <tree.Node @isExpanded={{true}}>
          <tree.Node class="my-content" @content="node"/>
        </tree.Node>
      </BasicTree>
    `);

    assert.dom('.ember-basic-tree').hasText('node');
  });

  test('do not render collapsed nodes', async function (assert) {
    await render(hbs`
      <BasicTree as |tree|>
        <tree.Node @isExpanded={{false}}>
          <tree.Node @content="node"/>
        </tree.Node>
      </BasicTree>
    `);

    assert.dom('.ember-basic-tree').hasText('');
  });

  test('expand and collapse', async function (assert) {
    this.set('isExpanded', false);
    await render(hbs`
      <BasicTree as |tree|>
        <tree.Node @isExpanded={{this.isExpanded}}>
          <tree.Node @content="node"/>
        </tree.Node>
      </BasicTree>
    `);

    assert.dom('.ember-basic-tree').hasText('');

    this.set('isExpanded', true);
    assert.dom('.ember-basic-tree').hasText('node');

    this.set('isExpanded', false);
    assert.dom('.ember-basic-tree').hasText('');
  });

  test('notify when items are expanded and collapsed', async function (assert) {
    let expanded = null;
    this.onExpanded = function (value) {
      expanded = value;
    };
    await render(hbs`
      <BasicTree as |tree|>
        <tree.Node @onExpanded={{this.onExpanded}}>
          <tree.Node @content="node"/>
        </tree.Node>
      </BasicTree>
    `);

    const expander = find('.ember-basic-tree-expander');

    await click(expander);
    assert.equal(expanded, true);

    await click(expander);
    assert.equal(expanded, false);
  });

  test('sync expanded state with ember-simple-set-helper', async function (assert) {
    this.set('expanded', false);
    await render(hbs`
      <BasicTree as |tree|>
        <tree.Node @isExpanded={{this.expanded}} @onExpanded={{set this.expanded}}>
          <tree.Node @content="node"/>
        </tree.Node>
      </BasicTree>
    `);

    const expander = find('.ember-basic-tree-expander');
    assert.dom('.ember-basic-tree').hasText('');

    await click(expander);
    assert.equal(this.expanded, true);
    assert.dom('.ember-basic-tree').hasText('node');

    await click(expander);
    assert.equal(this.expanded, false);
    assert.dom('.ember-basic-tree').hasText('');
  });

  test('dynamically add nodes', async function (assert) {
    const items = A();
    this.set('items', items);
    await render(hbs`
      <BasicTree as |tree|>
        {{#each this.items as |item|}}
          <tree.Node @content={{item}}/>
        {{/each}}
      </BasicTree>
    `);

    items.pushObject('foo');
    await settled();
    assert.dom('.ember-basic-tree').hasText('foo');

    this.set('items', ['baz']);
    assert.dom('.ember-basic-tree').hasText('baz');
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
      <BasicTree @contentComponent={{component "custom-content"}} as |tree|>
        <tree.Node @content="content" @title={{this.customTitle}}/>
      </BasicTree>
    `);

    assert.dom('.ember-basic-tree').hasText('title1: content');

    this.set('customTitle', 'title2');
    assert.dom('.ember-basic-tree').hasText('title2: content');
  });
});
