# Vue-Grammar

## Slots

- Slots

  ```html
  <slot name="header"></slot>
  
  <template v-slot:header><h1>Here might be a page title</h1></template>
  ```

- ScopeSlots

  ```html
  <slot v-bind:user="user" name="xxxxx">{{ user.lastName }}</slot>
  
  <template v-slot:default="slotProps">
      {{ slotProps.user.firstName }}
  </template>
  ```


