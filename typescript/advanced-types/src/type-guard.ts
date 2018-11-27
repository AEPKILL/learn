// * 自定义类型守卫
function isString(strLike: any): strLike is string {
  return typeof strLike === 'string';
}

// * typeof 类型守卫
// - 这些typeof类型守卫只有两种形式能被识别：typeof v === "typename"和typeof v !== "typename"，"typename"必须是"number"，"string"，"boolean"或"symbol"。
// - 但是TypeScript并不会阻止你与其它字符串比较，语言不会把那些表达式识别为类型守卫。
(typeof 'xxx' === 'string')

// * instanceof 类型守卫
// 类似 typeof 类型守卫