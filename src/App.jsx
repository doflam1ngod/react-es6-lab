import UserList from './UserList';
import Counter from './Counter';
import UserAPI from './userapi';

function App() {
  const users = ['Alice', 'Bob', 'Charlie'];
  const isLoggedIn = true; // For conditional rendering [cite: 625]

  // IMPORTANT: You must return the JSX!
  return (
    <div className="App">
      <h1>Lab Activity 3: React & ES6+</h1>
      
      {/* Conditional Rendering [cite: 593, 625] */}
      {isLoggedIn ? <p>Welcome back, Alfred!</p> : <p>Please log in</p>}
      
      <hr />
      <Counter />
      
      <hr />
      <h3>Static User List</h3>
      <UserList users={users} />
      
      <hr />
      <UserAPI />
    </div>
  );
}

export default App;