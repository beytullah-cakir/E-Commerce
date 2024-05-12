import React, { useState } from "react";
import "./Checkbox.css"

function Checkbox() {
  const [isChecked, setIsChecked] = useState(false);
  
  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  }
  return (
    <div className="checkbox">
      <input 
      type="checkbox" 
      checked={isChecked}
      onChange={handleCheckboxChange}
      /> Check me out
      <p>Checkbox seçildi mi? {isChecked ? "evet" : 'Hayır'}</p>
    </div>
  );
}

export default Checkbox;
