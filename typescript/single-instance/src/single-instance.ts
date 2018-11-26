export class SingleInstanceA {
  constructor() {
    if (SingleInstanceA.instance instanceof SingleInstanceA) {
      return SingleInstanceA.instance;
    }
    SingleInstanceA.instance = this;
  }
  private static instance: SingleInstanceA;
}
