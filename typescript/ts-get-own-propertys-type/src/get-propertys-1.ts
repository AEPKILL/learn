type KeyOf<T> = keyof T;

var obj = {
  name: 'AEPKILL',
  sayHi() {
    console.log(`Hello , i'm ${this.name}`);
  }
};

type ObjKeys = KeyOf<typeof obj>; // 正常

var obj2 = {
  name: 'AEPKILL',
  sayHi() {
    console.log(`Hello , i'm ${this.name}`);
  },
  [Symbol('xxx')]() {}
};

type Obj2Keys = KeyOf<typeof obj2>; // 不正常 string|number

export default {};
