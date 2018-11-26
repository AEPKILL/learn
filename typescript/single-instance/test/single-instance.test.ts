import { SingleInstanceA } from '../src/single-instance';

if (new SingleInstanceA() !== new SingleInstanceA()) {
  console.error(`SingleInstanceA instance: not same object.`);
  process.exit(1);
}

console.log(`pass all test`);

export {};
