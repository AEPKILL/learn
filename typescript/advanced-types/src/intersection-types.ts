// 交叉类型
// 像 type D = A & B & C 这种
// D 拥有了 A,B,C 的全部特性

type Intersection<T, U> = T & U;
type Intersection2<T, U> = { [M in keyof (T & U)]: (T & U)[M] };

// 二者是同等的
// todo: 有差异吗，目前看来是没有的
// { name: string } & { age: number }
// { name: string; age: number; }

// keys 相同
type K1 = keyof ({ name: string } & { age: number });
type K2 = keyof { name: string; age: number };

// 这样也是相同的
type K3 = Intersection<{ p: string }, { p: number }>;
type K4 = Intersection2<{ p: string }, { p: number }>;

type NormalIntersection = Intersection<
  {
    name: string;
  },
  { age: number; kk: string }
>;

type NormalIntersection2 = Intersection2<
  {
    name?: string;
  },
  { age: number; kk: string }
>;

// 互相赋值也没有什么问题
const n1: NormalIntersection = { name: 'aepkill', age: 222, kk: '2333' };
const n2: NormalIntersection2 = n1;

// 似乎只是写法和 ts 查看类型定义的表示不一样

export default {};
