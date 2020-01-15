import { Container as IocContainer, injectable } from 'inversify';
import React from 'react';

export const Rebind: React.FunctionComponent = () => {
  React.useEffect(() => {
    const container = new IocContainer();
    @injectable()
    class A {
      constructor() {
        console.log('A Constructor');
      }
    }

    container
      .bind(A)
      .toSelf()
      .inSingletonScope();

    console.log(container.get(A));
    console.log(container.get(A));

    container
      .rebind(A)
      .toSelf()
      .inSingletonScope();

    console.log(container.get(A));
    console.log(container.get(A));
  }, []);

  return <div>Rebind</div>;
};
