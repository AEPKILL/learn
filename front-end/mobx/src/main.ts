import {
  _resetGlobalState,
  autorun,
  computed,
  configure,
  observable
} from 'mobx';

class Todo {
  @observable title = 'WOW AEPKILL';
  @observable name = 'AEPKILL';

  @observable yo = new Map<string, string>();

  @computed
  get upperCaseTitle() {
    return this.title.toUpperCase();
  }
}

const todo = new Todo();

autorun(() => {
  console.log(todo.yo.get('fuck'));
});

todo.name = '23333';
todo.yo.set('fuck', 'you');
