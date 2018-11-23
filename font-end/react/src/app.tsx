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

const App: React.SFC = () => {
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

export default App;
