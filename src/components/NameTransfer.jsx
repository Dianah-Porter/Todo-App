import React, { useState, useEffect } from 'react';

function NameTransfer() {
  const initialNames = ['Alice', 'Bob', 'Charlie', 'David', 'Eve'];
  const [names, setNames] = useState(initialNames);
  const [moved, setmoved ] = useState([]);

  useEffect(()=>{
        let interval = setInterval(() => {
            if(names.length === 0) return;

            const first = names[0];
             setmoved([...moved, first]);
             setNames(names.slice(1));  
            } ,2000);

        return () => clearInterval(interval);
  },[names, moved])


  return (
    <div>
      <h3>Original Names</h3>
      
      <ul  style={{backgroundColor:"red"}}>
        {names.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>

      <h3>Transferred Names</h3>
      <ul  style={{backgroundColor:"green"}}>
        {moved.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
    </div>
  );
}

export default NameTransfer;
