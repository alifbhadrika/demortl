import React, { useState } from "react";

/* Button component, will render pop up 
text to the page when it gets clicked */

function Button({ popUpText }) {
  const [showText, setShowText] = useState(false);
  const handleOnClick = () => {
    setShowText(!showText);
  };
  return (
    <div className="button">
      <button
        data-testid="BUTTON_ID"
        style={{ padding: 5, borderRadius: 16 }}
        onClick={handleOnClick}
      >
        Click Me!
      </button>
      {showText && <div style={{ marginTop: 20 }}>{popUpText}</div>}
    </div>
  );
}

export default Button;
