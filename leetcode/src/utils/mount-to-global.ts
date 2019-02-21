// tslint:disable:no-any

function mountToGlobal(this: any, name: string, val: any) {
  if (typeof window !== 'undefined') {
    (window as any)[name] = val;
  } else if (typeof global !== 'undefined') {
    (global as any)[name] = val;
  } else {
    this[name] = val;
  }
}

function mountNsToGlobal(this: any, ns: any) {
  for (const key of Object.keys(ns)) {
    mountToGlobal(key, ns[key]);
  }
}

// tslint:enable:no-any
