// BEGIN-SNIPPET directory.js
import Model, { attr, hasMany } from '@ember-data/model';

export default class DirectoryModel extends Model {
  @attr('string') name;
  @attr('boolean') isExpanded;
  @hasMany('directory', { inverse: null }) subdirectories;
  @hasMany('file') files;
}
// END-SNIPPET
