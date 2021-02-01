// BEGIN-SNIPPET file.js
import Model, { attr } from '@ember-data/model';

export default class FileModel extends Model {
  @attr('string') name;
}
// END-SNIPPET
