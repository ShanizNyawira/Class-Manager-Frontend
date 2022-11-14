import React, {useState} from 'react';
import Swal from 'sweetalert2';

function Edit({teachers, selectedTeacher, setTeachers, setIsEditing}) {
  const id = selectedTeacher.id;

  const [name, setName] = useState(selectedTeacher.name);
  const [email, setEmail] = useState(selectedTeacher.email);
  const [phone, setPhone] = useState(selectedTeacher.phone_number);

  const handleUpdate = (e) => {
    e.preventDefault();

    if (!name || !email || !phone) {
      return Swal.fire({
        icon: 'error',
        title: 'Error!',
        text: 'All fields are required.',
        showConfirmButton: true,
      });
    }

    const teacher = {
      name,
      email,
      phone_number: phone,
    };

    fetch('http://localhost:9292/teachers/' + selectedTeacher.id, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(teacher),
    })
      .then((res) => res.json())
      .then((data) => {
        const index = teachers.findIndex(
          (item) => item.id === selectedTeacher.id,
        );
        if (index === -1) {
          setTeachers([...teachers, data]);
          return;
        }
        setTeachers([
          ...teachers.slice(0, index),
          data,
          ...teachers.slice(index + 1),
        ]);
      })
      .catch((e) => {
        console.error(e);
        Swal.fire({
          icon: 'warning',
          title: 'Error',
          text: 'Sorry, something went wrong please try again later',
          showConfirmButton: false,
          timer: 1500,
        });
      });

    setIsEditing(false);

    Swal.fire({
      icon: 'success',
      title: 'Updated!',
      text: `${teacher.name}'s data has been updated.`,
      showConfirmButton: false,
      timer: 1500,
    });
  };

  return (
    <div className="small-container">
      <form onSubmit={handleUpdate}>
        <h1>Edit Teachers</h1>
        <label htmlFor="name">Name</label>
        <input
          id="name"
          type="text"
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
        <label htmlFor="phone">Phone</label>
        <input
          id="phone"
          type="number"
          name="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <div style={{marginTop: '30px'}}>
          <input type="submit" value="Update" />
          <input
            style={{marginLeft: '12px'}}
            className="muted-button"
            type="button"
            value="Cancel"
            onClick={() => setIsEditing(false)}
          />
        </div>
      </form>
    </div>
  );
}

export default Edit;
