import ExtendedList from './List/ExtendedList';
import merge from 'lodash/merge';

export default class MovieList extends ExtendedList {
  constructor(data) {
    super(data);
  }

  add(data) {
    data.id = this.lastId + 1;
    return super.add(data);
  }

  edit(id, data) {
    const list = this.getList();
    list[id] = merge(list[id], data);
    this.setList(list);
  }
}
