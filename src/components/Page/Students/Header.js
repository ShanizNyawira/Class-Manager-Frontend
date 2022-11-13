import React from "react";

function Header({ setIsAdding }) {
  return (
    <header>
      <h2>Students</h2>
      <div style={{ marginTop: "30px", marginBottom: "18px" }}>
        <button onClick={() => setIsAdding(true)} className="round-button">
          Add students
        </button>
      </div>
    </header>
  );
}

export default Header;
