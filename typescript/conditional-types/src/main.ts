interface Id {}
interface Name {}
type X<T extends number | string> = T extends number ? Id : Name;

type Y = X<any>; // Id | Name

type Flatten<T> = T extends Array<infer U> ? U : T;

type Foo<T> = [T] extends any ? T[] : never;

/**
 * Foo distributes on 'string | number' to the type
 *
 *    (string extends any ? string[] : never) |
 *    (number extends any ? number[] : never)
 *
 * which boils down to
 *
 *    string[] | number[]
 */
type Bar = Foo<string | number>;

type KX<key extends string> = { [p in key]: number };

// 条件类型中的 []

type T1<T extends any[]> = T extends Array<infer U> ? U[] : never;

function Func1<T extends any[]>(array: T) {
  return array;
}

// func1r1 : number[]
var func1r1 = Func1([1, 2, 3]);

// func1r : (number|string][]
var func1r2 = Func1([1, 2, '333']);
