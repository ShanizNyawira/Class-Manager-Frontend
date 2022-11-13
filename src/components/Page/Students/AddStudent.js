import React, {useState, useRef, useEffect} from 'react';
import Swal from 'sweetalert2';

function Add({students, setStudents, setIsAdding}) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [course_id, setCourse_id] = useState('');
  const [age, setAge] = useState('');

  const textInput = useRef(null);

  useEffect(() => {
    textInput.current.focus();
  }, []);

  function addStudents(newStudent) {
    const updatedStudents = [...students, newStudent];
    setStudents(updatedStudents);
  }

  const handleAdd = (e) => {
    e.preventDefault();
    if (!name || !email || !course_id || !age) {
      return Swal.fire({
        icon: 'error',
        title: 'Error!',
        text: 'All fields are required.',
        showConfirmButton: true,
      });
    }

    const newStudent = {
      name,
      email,
      course_id,
      age,
    };
    fetch('http://localhost:9292/students', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newStudent),
    })
      .then((response) => response.json())
      .then((data) => {
        addStudents(data);
      })
      .catch((error) => {
        console.error('Error:', error);
        Swal.fire({
          icon: 'warning',
          title: 'Error',
          text: 'Sorry, something went wrong please try again later',
          showConfirmButton: false,
          timer: 1500,
        });
      });

    setIsAdding(false);

    Swal.fire({
      icon: 'success',
      title: 'Added!',
      text: `${name}'s data has been Added.`,
      showConfirmButton: false,
      timer: 1500,
    });
  };

  return (
    <div className="small-container">
      <form onSubmit={handleAdd}>
        <h1>Add Students</h1>
        <label htmlFor="name">Name</label>
        <input
          id="name"
          type="text"
          ref={textInput}
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="course_id">Course_id</label>
        <input
          id="course_id"
          type="number"
          name="course_id"
          value={course_id}
          onChange={(e) => setCourse_id(e.target.value)}
        />
        <label htmlFor="age">Age</label>
        <input
          id="age"
          type="number"
          name="age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <div style={{marginTop: '30px'}}>
          <input type="submit" value="Add" />
          <input
            style={{marginLeft: '12px'}}
            className="muted-button"
            type="button"
            value="Cancel"
            onClick={() => setIsAdding(false)}
          />
        </div>
      </form>
    </div>
  );
}

export default Add;
