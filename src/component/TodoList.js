import React from 'react';

// stateless functional component
// presentational component
export default function TodoList({ todoArray }) {
  return (
    <div>
      {todoArray.map((item, key) => (
        <div key={key} className="todo-item">
          {item}
        </div>
      ))}
    </div>
  );
}
