import React from 'https://cdn.skypack.dev/react'
import { render } from 'https://cdn.skypack.dev/react-dom'

const App = () => {
  var users = [
    { name: 'Robin' },
    { name: 'Markus' },
  ];

  return (
    <ul>
      {users.map(function (user) {
        return <li>{user.name}</li>;
      })}
    </ul>
  );
};
render(<App/>, document.getElementById('app'))
