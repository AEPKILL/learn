import React, { useEffect, useState } from 'react';
import AsyncSetState from './component/async-set-state';

const App: React.SFC = () => {
  const [count, setCount] = useState(0);
  const title = document.title;
  useEffect(
    () => {
      document.title = `click ${count} times`;
      return () => (document.title = title);
    },
    [count]
  );
  return (
    <div>
      <h1>App</h1>
      <div>You click {count} times!</div>
      <button onClick={() => setCount(count + 1)}>click me</button>
      <AsyncSetState />
    </div>
  );
};

export default App;
