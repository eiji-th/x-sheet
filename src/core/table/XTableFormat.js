import { PlainUtils } from '../../utils/PlainUtils';
import { DateUtils } from '../../utils/DateUtils';

function parserToDate(text) {
  let result = DateUtils.parserToDate(text, 'yyyy/MM/dd hh:mm:ss');
  if (result) return result;
  result = DateUtils.parserToDate(text, 'yyyy/MM/dd');
  if (result) return result;
  result = DateUtils.parserToDate(text, 'hh:mm:ss');
  if (result) return result;
  result = DateUtils.parserToDate(text, 'MM月dd日');
  if (result) return result;
  result = DateUtils.parserToDate(text, 'yyyy年MM月');
  if (result) return result;
  result = DateUtils.parserToDate(text, 'yyyy年MM月dd日');
  if (result) return result;
  return null;
}

class Format {

  eNotation(value) {
    if (PlainUtils.isNumber(value)) {
      const number = PlainUtils.parseFloat(value);
      return number.toExponential(2);
    }
    return value;
  }

  time(value) {
    const result = parserToDate(value);
    if (result) {
      return DateUtils.dateFormat('hh:mm:ss', result);
    }
    return value;
  }

  default(value) {
    return value;
  }

  text(value) {
    return value;
  }

  percentage(value) {
    if (PlainUtils.isNumber(value)) {
      return `${value}%`;
    }
    return value;
  }

  decimal(value) {
    if (PlainUtils.isNumber(value)) {
      const indexOf = value.toString().indexOf('.');
      if (~indexOf) {
        return value.toString().substring(0, indexOf + 3);
      }
      return `${value}.00`;
    }
    return value;
  }

  number(value) {
    if (PlainUtils.isNumber(value)) {

    }
    return value;
  }

  fraction(value) {
    if (PlainUtils.isFraction(value)) {
      const left = value.split('/')[0];
      const right = value.split('/')[1];
      return PlainUtils.parseInt(left) / PlainUtils.parseInt(right);
    }
    return value;
  }

  rmb(value) {
    if (PlainUtils.isNumber(value)) {
      return `￥${value}`;
    }
    return value;
  }

  hk(value) {
    if (PlainUtils.isNumber(value)) {
      return `HK${value}`;
    }
    return value;
  }

  date1(value) {
    const result = parserToDate(value);
    if (result) {
      return DateUtils.dateFormat('yyyy/MM/dd', result);
    }
    return value;
  }

  date2(value) {
    const result = parserToDate(value);
    if (result) {
      return DateUtils.dateFormat('MM月dd日', result);
    }
    return value;
  }

  date3(value) {
    const result = parserToDate(value);
    if (result) {
      return DateUtils.dateFormat('yyyy年MM月', result);
    }
    return value;
  }

  date4(value) {
    const result = parserToDate(value);
    if (result) {
      return DateUtils.dateFormat('yyyy年MM月dd日', result);
    }
    return value;
  }

  date5(value) {
    const result = parserToDate(value);
    if (result) {
      return DateUtils.dateFormat('yyyy/MM/dd hh:mm:ss', result);
    }
    return value;
  }

  dollar(value) {
    if (PlainUtils.isNumber(value)) {
      return `$${value}`;
    }
    return value;
  }

}

const format = new Format();

export default (type, value) => format[type](value);
