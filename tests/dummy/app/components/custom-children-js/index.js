// BEGIN-SNIPPET custom-children-js-index.js
import Component from '@glimmer/component';
import { task } from 'ember-concurrency-decorators';
import { timeout } from 'ember-concurrency';

class Node {
  constructor(counter, more) {
    this.name = `Node ${counter}`;
    this.more = more;
  }
  get children() {
    return this.more.perform();
  }
  toString() {
    return this.name;
  }
}

export default class extends Component {
  @task
  *loadMore() {
    yield timeout(1000);

    const nodes = [];
    for (let i = 0; i < 3; ++i) {
      nodes.push(this.generateNode());
    }
    return nodes;
  }

  counter = 0;

  generateNode() {
    return new Node(++this.counter, this.loadMore);
  }

  get root() {
    return this.generateNode();
  }
}
// END-SNIPPET
