import UserList from './UserList';

function App() {
    const users = ['Alice','Bob','Charlie'];
    return <UserList users={users} />;
    const names = ['Alice', 'Bob', 'Charlie'];
    const doubled = names.map(name => name.length * 2);
    console.log('Doubled lengths:', doubled); // [cite: 283]
    const person = { name: 'Alice', age: 25 };
    const { name, age } = person; // Object Destructuring [cite: 284]

    

}
