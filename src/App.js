import React from 'react';
import Input from './containers/Input';
import List from './containers/List';

function App() {
  return (
    <React.Fragment>
      <h1 className="text-center mt-2">To-Do App</h1>
      <Input />
      <List />
    </React.Fragment>
  );
}

export default App;
