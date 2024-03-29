import { A } from '@ember/array';
import Component from '@glimmer/component';
import { setComponentTemplate } from '@ember/component';
import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, settled, find, click } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import { capitalize } from '@ember/string';

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

    assert.dom('.ember-basic-tree').includesText('node');
  });

  test('do not render collapsed nodes', async function (assert) {
    await render(hbs`
      <BasicTree as |tree|>
        <tree.Node @isExpanded={{false}}>
          <tree.Node @content="node"/>
        </tree.Node>
      </BasicTree>
    `);

    assert.dom('.ember-basic-tree').doesNotIncludeText('node');
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

    assert.dom('.ember-basic-tree').doesNotIncludeText('node');

    this.set('isExpanded', true);
    assert.dom('.ember-basic-tree').includesText('node');

    this.set('isExpanded', false);
    assert.dom('.ember-basic-tree').doesNotIncludeText('node');
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
    assert.true(expanded);

    await click(expander);
    assert.false(expanded);
  });

  test('sync expanded state with ember-simple-set-helper', async function (assert) {
    this.set('expanded', false);
    await render(hbs`
      <BasicTree as |tree|>
        <tree.Node @isExpanded={{this.expanded}} @onExpanded={{set this "expanded"}}>
          <tree.Node @content="node"/>
        </tree.Node>
      </BasicTree>
    `);

    const expander = find('.ember-basic-tree-expander');
    assert.dom('.ember-basic-tree').doesNotIncludeText('node');

    await click(expander);
    assert.true(this.expanded);
    assert.dom('.ember-basic-tree').includesText('node');

    await click(expander);
    assert.false(this.expanded);
    assert.dom('.ember-basic-tree').doesNotIncludeText('node');
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
    assert.dom('.ember-basic-tree').includesText('foo');

    this.set('items', ['baz']);
    assert.dom('.ember-basic-tree').includesText('baz');
  });

  test('custom contentComponent', async function (assert) {
    class CustomContentComponent extends Component {
      get capitalizedTitle() {
        const { node } = this.args;
        return capitalize(node.title);
      }
    }
    setComponentTemplate(hbs`{{this.capitalizedTitle}}: {{@node.description}}`, CustomContentComponent);

    this.contentComponent = CustomContentComponent;

    this.set('customTitle', 'title1');
    await render(hbs`
      <BasicTree @contentComponent={{this.contentComponent}} as |tree|>
        <tree.Node @title={{this.customTitle}} @description="content"/>
      </BasicTree>
    `);

    assert.dom('.ember-basic-tree').includesText('Title1: content');

    this.set('customTitle', 'title2');
    assert.dom('.ember-basic-tree').includesText('Title2: content');
  });
});
