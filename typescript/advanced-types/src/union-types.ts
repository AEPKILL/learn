// 联合类型
type Union<T, U> = T | U;
type Union2<T, U> = { [M in keyof (T | U)]: (T | U)[M] };

type K1 = Union<{ name: string; p: string }, { age: number; p: number }>;
type K2 = Union2<{ name: string; p: string }, { age: number; p: number }>;

export default {};
