# Advance Types

## 交叉类型 (Intersection Types)

交叉类型可以理解将两个类型合并起来，类似集合中的并集。  
如果两个类型有相同的 `key` 但是不同的 `type`, `typescript` 会对这个 `key` 的类型再做一次 `交叉类型` 运算。

## 联合类型 (Union Types)

联合类型可以理解为取两个类型共有的部分，类似集合的交集。  
对同 `key` 的处理方式与上面的交叉类型等同。
