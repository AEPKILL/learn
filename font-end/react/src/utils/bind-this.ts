import React from 'react';

const excludes = ['constructor', 'render'].concat(
  Object.getOwnPropertyNames(React.Component.prototype).filter(name => {
    const descriptor = Reflect.getOwnPropertyDescriptor(
      React.Component.prototype,
      name
    )!;
    return !descriptor.get && typeof descriptor.value === 'function';
  })
);

// tslint:disable-next-line:no-any
export function BindThis<T extends new (...args: any[]) => any>(
  Construcor: T
): T {
  return class extends Construcor {
    // tslint:disable-next-line:no-any
    constructor(...args: any[]) {
      super(...args);
      for (const name of Object.getOwnPropertyNames(Construcor.prototype)) {
        const descriptor = Reflect.getOwnPropertyDescriptor(
          Construcor.prototype,
          name
        )!;
        if (
          !descriptor.get &&
          typeof descriptor.value === 'function' &&
          excludes.indexOf(name) === -1
        ) {
          this[name] = this[name].bind(this);
        }
      }
    }
  };
}
