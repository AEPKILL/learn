# 获取一个对象的全部 property 并且是类型安全的方式

```typescript
// 假设有一个函数 getOwnProperties，调用 getOwnProperties( obj )getOwnProperties 将返回该 object 的全部 property 的类型集合

var obj = {
  name: "AEPKILL",
  sayHi() {
    console.log(`Hello , i'm ${this.name}`);
  },
};

getOwnProperties(obj); // 'name' | 'sayHi'
```
