import { cssPrefix } from '../../../const/Constant';
import { PlainUtils } from '../../../utils/PlainUtils';
import { Layer } from '../../Layer';

class VerticalCenter extends Layer {
  constructor(options) {
    super(`${cssPrefix}-vertical-center`);
    this.options = PlainUtils.copy({
      style: {},
    }, options);
    this.css(this.options.style);
  }
}

export { VerticalCenter };
