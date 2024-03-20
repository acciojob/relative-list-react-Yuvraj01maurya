import React from 'react'

const App = () => {
  const relatives = [
    "John",
    "Mary",
    "David",
    "Lisa"
  ];
  return (
    <div>
      <h2>Relatives to Visit</h2>
      <ol>
        {relatives.map((relative, index) => (
          <li key={`relativeListItem${index + 1}`}>{relative}</li>
        ))}
      </ol>
    </div>
  );
}

export default App
