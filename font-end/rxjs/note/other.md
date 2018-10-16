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
