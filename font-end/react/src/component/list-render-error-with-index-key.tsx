/**
 * 当使用 index 做 key 的时候
 * 如何 item 中包含有状态的元素，那么会导致渲染错误
 */

import React, { useRef, useState } from 'react';

interface User {
  name: string;
}

const Item: React.SFC<{ name: string }> = ({ name }) => {
  return (
    <li>
      {name}
      <input />
    </li>
  );
};

const ListRenderErrorWithNoKey: React.SFC = () => {
  const [list, setList] = useState<User[]>([]);
  const input = useRef<HTMLInputElement>(null);
  function handClickAddUser() {
    if (input && input.current && input.current.value) {
      setList([{ name: input.current.value }, ...list]);
    }
  }
  return (
    <div>
      <ul>
        {list.map((user, index) => (
          <Item name={user.name} key={index} />
        ))}
      </ul>
      <input ref={input} />
      <div>
        <button onClick={handClickAddUser}>add user</button>
      </div>
    </div>
  );
};
