import React, { useEffect, useRef } from 'react';

const App = () => {
  

  useEffect(() => {
    // nameDivRef.current üzerinden div'in içeriğini al
    let nameDiv = document.getElementById('name'); 
    
    console.log('Div içeriği:', nameDiv);
  }, []);

}

export default App;
