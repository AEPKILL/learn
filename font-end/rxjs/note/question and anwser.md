# 疑问

- 我擦为啥 `Observerable` 构造函数的参数是一个 `Subscriber`？

```typescript
new Observerable<string>(observer => {
  // type observer is Subscriber , Why ?
});
```

我理解这里的 `observer` 应该是一个生产者比较合适吧，为啥这里提供了一个消费者喃？ 脑壳痛。

难道是要直接调用消费者的意思？

我擦这也太 Skr 了吧。

甚至我还可以这样写，完全不知道这是在干嘛啊。

```typescript
import { Observerable } from 'rxjs';
new Observerable<string>(observer => {
  observer.unsubscribe(); // WTF?
});
```
