import { Container as IocContainer, injectable, inject } from 'inversify';
import React from 'react';

export const Container: React.FunctionComponent = () => {
  const container = new IocContainer();
  console.log(container);
  return <div>Container</div>;
};
