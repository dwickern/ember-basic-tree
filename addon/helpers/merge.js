import { helper } from '@ember/component/helper';

export function merge(params/*, hash*/) {
  return Object.assign({}, ...params);
}

export default helper(merge);
