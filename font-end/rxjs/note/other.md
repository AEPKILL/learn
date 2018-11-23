# Other

## Subscription

一次订阅会重新执行整个 `Observerable` 链，例如:

```typescript
const a$ = new Observable<number>(observer => {
  const timer = setInterval(() => {
    observer.next(count++);
  }, 1000);
  let count = 0;
  console.log('run...');
  return () => {
    clearInterval(timer);
    console.log('clear timer');
  };
});

a$.subscribe();
a$.subscribe();
```

其实产生了两个定时器，这也就意味着一旦被订阅， 那么是 **不可以** 修改这条订阅链的。

看了一篇文章: [RxJS 核心概念之 Observable](https://segmentfault.com/a/1190000005051034)

里面提到了这一点 ， 可以把 `RxJS` 理解为 `多值函数`，是对函数概念的拓展：

1. 不论 Observable 还是函数都是在运行时进行求值计算的。如果不调用函数，函数就不会执行；如果如果不 `Subscribe`（订阅）`Observable`，`Observerable` 也不会执行。
2. 调用或者订阅都是独立的：两次调用产生两个独立的作用域，两次订阅同样会产生两个独立的作用域。
3. EventEmitter 总是在同一个作用域中，发射前也不会在意自己是否已经被订阅；Observable 不会被共享而产生副作用，并且总是在被订阅时才执行。
