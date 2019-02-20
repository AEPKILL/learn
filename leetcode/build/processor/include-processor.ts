import { existsSync, readFileSync } from 'fs';
import { parse, resolve } from 'path';
import FilePack from '../utils/file-pack';

export default function includeProcessor(pack: FilePack) {
  const { content } = pack;
  const re = /\/\/\s*include\s*\(\s*([\w\d\\\/.-]+)\s*\)/g;
  const root = parse(pack.path).dir;
  let result = '';
  let index = 0;
  let arr: RegExpExecArray | null = null;
  // tslint:disable-next-line:no-conditional-assignment
  while ((arr = re.exec(content))) {
    const includePath = arr[1];
    const includeRealPath = resolve(root, includePath);
    const i = arr.index;
    result += content.substring(index, i);
    if (existsSync(includeRealPath)) {
      const includeContent = readFileSync(includeRealPath, { encoding: 'utf-8' });
      result += `\n${includeContent}\n`;
    }
    index = i + arr[0].length;
  }
  result += content.substring(index, content.length - 1);
  pack.content = result;
}
