import { List } from './List';
import merge from 'lodash/merge';

export default class MovieList extends List {
  constructor(data) {
    super(data);
  }

  add(data) {
    data.id = this.lastId + 1;
    return super.add(data);
  }

  edit(id, data) {
    const item = this.list[id];
    return merge(item, data);
  }
}
