import { resolve } from 'path';
import Builder from './utils/builder';

const pwd = process.cwd();
const root = resolve(pwd, './src');

const builder = new Builder(root);
builder.build();
builder.watch();
