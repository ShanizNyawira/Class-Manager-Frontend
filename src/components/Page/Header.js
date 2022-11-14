import React from 'react';

  const tags = {
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    padding: '0px 0px',
    margin: '10px 0 20px 0',
    // backgroundColor: 'rgba(94, 151, 255, 0.4)',
    padding: '15px',
  };


  const heading = {
    fontWeight: 'bold',
    display: 'flex',
    margin: '242px 25vw',
    alignItems: 'center',
    padding: '0px',
    // backgroundColor: 'rgba(94, 151, 255, 0.4)',

    };

function Header({setIsAdding}) {
  return (
    <header>
      <h1 style={heading}>Class Management System</h1>
      {/* <div style={tags}>
        <div>
          <h2>Teachers</h2>
          <div style={{marginTop: '30px', marginBottom: '18px'}}>
            <button onClick={() => setIsAdding(true)} className="round-button">
              Add Teachers
            </button>
          </div>
        </div>
        <div>
          <h2>Students</h2>
          <div style={{marginTop: '30px', marginBottom: '18px'}}>
            <button onClick={() => setIsAdding(true)} className="round-button">
              Add students
            </button>
          </div>
        </div>
        <div>
          <h2>Courses</h2>
          <div style={{marginTop: '30px', marginBottom: '18px'}}>
            <button onClick={() => setIsAdding(true)} className="round-button">
              Add Course
            </button>
          </div>
        </div>
      </div> */}
    </header>
  );
}

export default Header;