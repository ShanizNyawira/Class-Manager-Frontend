import React from "react";

function Header({ setIsAdding }) {
  return (
    <header>
      <h1>Class Management System</h1>
      <h2>Teachers</h2>
      <div style={{ marginTop: "30px", marginBottom: "18px" }}>
        <button onClick={() => setIsAdding(true)} className="round-button">
          Add Teachers
        </button>
      </div>
    </header>
  );
}

export default Header;
