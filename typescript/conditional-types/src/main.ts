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

type KX<key extends string> = {
  [p in key]: number;
}
