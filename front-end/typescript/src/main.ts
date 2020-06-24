import ts from 'typescript';

console.log(ts);

// 这里定义一个工具类型，简化代码
type ReplaceValByOwnKey<T, S extends any> = { [P in keyof T]: S[P] };

// shift action
type ShiftAction<T extends any[]> = ((...args: T) => any) extends (
  arg1: any,
  ...rest: infer R
) => any
  ? R
  : never;

// unshift action
type UnshiftAction<T extends any[], A> = ((
  args1: A,
  ...rest: T
) => any) extends (...args: infer R) => any
  ? R
  : never;

// pop action
type PopAction<T extends any[]> = ReplaceValByOwnKey<ShiftAction<T>, T>;

// push action
type PushAction<T extends any[], E> = ReplaceValByOwnKey<
  UnshiftAction<T, any>,
  T & { [k: string]: E }
>;

type tuple = ['vue', 'react', 'angular'];

type a = ShiftAction<tuple>;
type b = PopAction<tuple>;

type c = ReplaceValByOwnKey<['a', 'c'], ['a', 'b', 'c']>;

type d = PushAction<tuple, 'k'>;

type Len<T> = ((t1: any) => any) extends ((t1: T) => any) ? 1 : never;

type len = Len<['a']>;
