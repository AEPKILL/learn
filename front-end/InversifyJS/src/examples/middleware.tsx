import {
  Container as IocContainer,
  inject,
  injectable,
  interfaces
} from 'inversify';
import React from 'react';

function _setupCollectDependsHook(
  request: interfaces.Request,
  depsContainer: unknown[]
) {
  for (const childRequest of request.childRequests) {
    if (childRequest.childRequests.length) {
      _setupCollectDependsHook(childRequest, depsContainer);
    }
    const childBinding = childRequest.bindings[0];
    const oldOnActivation = childBinding.onActivation;
    childBinding.onActivation = (context, value) => {
      console.log(`-----x-----`);
      const finalValue = oldOnActivation
        ? oldOnActivation(context, value)
        : value;
      depsContainer.push(finalValue);
      return finalValue;
    };
  }
}

export const annotationDependsInstanceMiddleware: interfaces.Middleware = planAndResolve => {
  return (args: interfaces.NextArgs) => {
    const nextContextInterceptor = args.contextInterceptor;
    args.contextInterceptor = context => {
      const finalContext = nextContextInterceptor(context);
      const rootRequest = finalContext.plan.rootRequest;
      const rootBinding = rootRequest.bindings[0];
      const rootOnActivation = rootBinding.onActivation;
      const depsContainer: unknown[] = [];
      rootBinding.onActivation = (ctx, value) => {
        const finalValue = rootOnActivation
          ? rootOnActivation(ctx, value)
          : value;
        console.log(`---->`, depsContainer);
        return finalValue;
      };
      _setupCollectDependsHook(rootRequest, depsContainer);
      return finalContext;
    };
    return planAndResolve(args);
  };
};

// tslint:disable
export const MIddleware: React.FunctionComponent = () => {
  React.useEffect(() => {
    const container = new IocContainer();
    @injectable()
    class A {}
    @injectable()
    class C {
      constructor(@inject(A) readonly a: A) {}
    }

    @injectable()
    class B {
      constructor(@inject(A) readonly a: A, @inject(C) readonly c: C) {}
    }

    container.bind(A).toSelf();
    container.bind(B).toSelf();
    // container.bind(B).to(A as any);
    container.bind(C).toSelf();

    container.applyMiddleware(annotationDependsInstanceMiddleware);

    console.log(container.get(B));
    console.log(container.get(A));
  }, []);

  return <div>Middleware</div>;
};
