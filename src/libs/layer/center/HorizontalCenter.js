import { cssPrefix } from '../../../const/Constant';
import { PlainUtils } from '../../../utils/PlainUtils';
import { Layer } from '../../Layer';

class HorizontalCenter extends Layer {

  constructor(options) {
    super(`${cssPrefix}-horizontal-center`);
    this.options = PlainUtils.copy({
      style: {},
    }, options);
    this.css(this.options.style);
  }
}

export { HorizontalCenter };
