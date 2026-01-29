import React from 'react';

function UserList({ users }) { // Destructuring props [cite: 394, 616]
  return (
    <ul>
      {users.map(user => (
        <li key={user}>{user}</li> // Key is required for list efficiency [cite: 597]
      ))}
    </ul>
  );
}

export default UserList;