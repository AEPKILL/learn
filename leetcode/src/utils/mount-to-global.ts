// tslint:disable:no-any

function mountToGlobal(this: any, name: string, val: any) {
  (global as any)[name] = val;
}

function mountNsToGlobal(this: any, ns: any) {
  for (const key of Object.keys(ns)) {
    mountToGlobal(key, ns[key]);
  }
}

// tslint:enable:no-any
