import Component from '@ember/component';
import EmberObject, { computed } from '@ember/object';
import { task, timeout } from 'ember-concurrency';
import layout from '../templates/components/async-example';

const Model = EmberObject.extend({
  text: '',

  childrenTask: task(function * () {
    yield timeout(1000);

    return [
      Model.create({ text: 'first' }),
      Model.create({ text: 'second' }),
      Model.create({ text: 'third' })
    ]
  }),

  children: computed(function() {
    return this.get('childrenTask').perform();
  })
});

export default Component.extend({
  layout,

  root: computed(() => Model.create({ text: 'root' }))
});
