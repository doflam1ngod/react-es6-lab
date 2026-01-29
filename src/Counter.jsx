import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0); // State management [cite: 578]

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
}

export default Counter; // Added this line!