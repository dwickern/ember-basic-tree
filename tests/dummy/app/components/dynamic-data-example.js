import Component from '@ember/component';
import layout from '../templates/components/drag-drop-example';
import sampleData from '../models/directory-structure';

export default Component.extend({
  layout,

  root: sampleData()
});
