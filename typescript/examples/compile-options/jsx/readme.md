# jsx

- jsxFactory
  指定 `jsx` 创建的工厂函数名称，默认是 `React.createElement`，可以手动指定一个，`typescript` 会用指定的工厂函数创建 `jsx` 元素

- jsx

  - `react`

    编译为 `React.createElement('div')` 这种

  - `present`

    保持不变 `<div></div>`

  - `react-native`

    保持不变
