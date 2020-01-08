# Tips

- `container.get` 会创建一个新的 `RequestScope`

  ```typescript
  @injectable()
  class Base {
    a1 = container.get('a');
    a2 = container.get('a');
  }
  
  container.bind(Base).toSelf().inRequestScope();
  
  const base = container.get(Base);
  
  // true 尽管在一个顶级的 get 中，但每个 get 任然是不同的 requestScope
  base.a1 !== base.a2; 
  ```

  