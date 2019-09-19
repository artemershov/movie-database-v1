import pull from 'lodash/pull';

class SimpleList {
  constructor() {
    this.list = {};
    this.order = [];
    this.lastId = 0;
  }
}

class List extends SimpleList {
  constructor(data = null) {
    super();
    if (data) this.setData(data);
  }

  getList() {
    return this.list;
  }

  getOrder() {
    return this.order;
  }

  getLastId() {
    return this.lastId;
  }

  getData() {
    return {
      list: this.list,
      order: this.order,
      lastId: this.lastId,
    };
  }

  setList(data) {
    this.list = data;
  }

  setOrder(data) {
    this.order = data;
  }

  setLastId(id) {
    this.lastId = id;
  }

  setData(data) {
    this.list = data.list;
    this.order = data.order;
    this.lastId = data.lastId;
  }

  add(data) {
    return listAdd(this, data);
  }

  remove(id) {
    return listRemove(this, id);
  }

  getOrderedList() {
    return this.order.map(i => i && this.list[i]);
  }
}

const listAdd = (list, data) => {
  list.lastId++;
  list.list[list.lastId] = data;
  list.order.push(list.lastId);
  return list.lastId;
};

const listRemove = (list, id) => {
  list.list[id] = undefined;
  pull(list.order, id);
  return 1;
};

export { SimpleList, List, listAdd, listRemove };
