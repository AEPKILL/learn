import { Container, injectable, inject } from 'inversify';
import React from 'react';

export const Inheritance: React.FunctionComponent = () => {
  const container = new Container();

  @injectable()
  class Base {
    constructor(@inject('date') readonly createTime: Date) {}
  }

  container.bind(Base).toSelf();
  container.bind('date').toDynamicValue(() => new Date());

  console.log(container.get(Base));
  return <div>Inheritance</div>;
};
