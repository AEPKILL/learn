import {
  Container as IocContainer,
  inject,
  injectable,
  METADATA_KEY,
  MetadataReader,
  optional
} from 'inversify';
import React from 'react';

export const Container: React.FunctionComponent = () => {
  // tslint:disable
  const container = new IocContainer();

  @injectable()
  class A {}

  @injectable()
  class C {}

  @injectable()
  class B {
    @inject('ccccc') @optional() c!: C;
    constructor(@inject(A) readonly a: A) {}
  }

  container
    .bind(A)
    .toSelf()
    .inSingletonScope();
  container.bind(B).toSelf();
  container.bind('ccccc').toAutoFactory<number>(() => 23333);

  container.get(A);
  console.log((container as any)._bindingDictionary);
  console.log(Reflect.getMetadata(METADATA_KEY.TAGGED, B));
  console.log(Reflect.getMetadata(METADATA_KEY.TAGGED_PROP, B));
  const metaReader = new MetadataReader();
  console.log(metaReader.getConstructorMetadata(B));
  console.log(metaReader.getPropertiesMetadata(B))
  return <div>Container</div>;
};
