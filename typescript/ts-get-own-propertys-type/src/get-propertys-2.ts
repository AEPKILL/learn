type KeyOf<T> = FilterKey<keyof T>;
type FilterKey<T> = T extends string ? T : never;

var obj2 = {
  name: 'AEPKILL',
  sayHi() {
    console.log(`Hello , i'm ${this.name}`);
  },
  [Symbol('xxx')]() {}
};

type KeyObj2 = FilterKey<'222' | '33333' | 2333 >;

export {};
