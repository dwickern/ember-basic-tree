import { helper } from '@ember/component/helper';

/**
 * @private
 * @method invoke
 */
export default helper(function invoke([set, value]) {
  set(value);
});
