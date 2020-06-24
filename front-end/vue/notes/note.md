# Vue

## 指令

* v-on
* v-bind
* v-model
* v-for
* v-once
* v-html

PS:

- 制定动态绑定

  2.6.0 后指令可以动态绑定 v-on:[eventName]="doSomething", eventName 可以为 string 或者 null， null 表示移除绑定

- 缩写

  `v-bind` 缩写符为  `:` 

  `v-on` 缩写符为 `@`

  



## 修饰符

修饰符指出一个指令应该以特殊的方式绑定，例如，`.prevent` 修饰符告诉 `v-on` 指令对于触发的事件调用 `event.preventDefault()`

```html
<form v-on:submit.prevent="onSubmit">...</form>
```



## 组件

### 注册

* Vue.component

  ```javascript
  Vue.component('todo-item', {
    template: `<li>this is todo item </li>`
  })
  ```
  
### 计算属性

```javascript
new Vue({
  computed: {
    // only getter
    fullName() {},
    
    coolFullName: {
      // getter
      get: function() {
        return this.firstName + " " + this.lastName;
      },
      // setter
      set: function(newValue) {
        var names = newValue.split(" ");
        this.firstName = names[0];
        this.lastName = names[names.length - 1];
      }
    }
  }
});

```



### 生命周期

![Vue 实例生命周期](https://cn.vuejs.org/images/lifecycle.png)



