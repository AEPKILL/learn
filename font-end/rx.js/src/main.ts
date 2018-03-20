import { testObservable } from './observable';

class Work {
  constructor() {
    console.log('I work, whoohoo');
  }
}

// tslint:disable-next-line:no-unused-expression
new Work();

// tslint:disable-next-line:no-unused-expression
new testObservable();
