import React from "react";

function Header({ text }) {
  return (
    <div className="Header" style={{ marginBottom: 40 }}>
      {text}
    </div>
  );
}

export default Header;
