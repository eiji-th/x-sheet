import { XMergesNo } from './XMergesNo';

class XMergesNoRow {

  constructor() {
    this.nos = [];
  }

  getNo(no) {
    if (this.nos[no]) { return this.nos[no]; }
    this.nos[no] = new XMergesNo(no);
    return this.nos[no];
  }

}

export {
  XMergesNoRow,
};
