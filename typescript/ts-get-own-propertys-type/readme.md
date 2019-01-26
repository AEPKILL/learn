# 获取一个对象的全部 property 并且是类型安全的方式

```typescript
// 假设有一个函数 getOwnPropertys，调用 getOwnPropertys( obj )，getOwnPropertys 将返回该 object 的全部 property 的类型集合

var obj = {
  name: 'AEPKILL',
  sayHi() {
    console.log(`Hello , i'm ${this.name}`);
  }
};

getOwnPropertys(obj); // 'name' | 'sayHi'
```
