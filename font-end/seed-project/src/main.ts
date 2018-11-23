class A {
  private constructor() {}

  public sayHello(name: string) {
    console.log(`Hello, ${name}.`);
  }

  private static instance: A;
  public static getInstance() {
    if (!A.instance) {
      A.instance = new A();
    }
    return A.instance;
  }
}

const a = A.getInstance();
a.sayHello('AEPKILL');
