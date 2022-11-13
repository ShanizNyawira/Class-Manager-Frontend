// import React, {useState} from 'react';
// import Swal from 'sweetalert2';

// function Edit({students, selectedStudent, setStudents, setIsEditing}) {
//   const id = selectedStudent.id;

//   const [name, setName] = useState(selectedStudent.name);
//   const [email, setEmail] = useState(selectedStudent.email);
//   const [age, setAge] = useState(selectedStudent.age);
//   const [courseId, setCourseId] = useState(selectedStudent.course_id);

//   const handleUpdate = (e) => {
//     e.preventDefault();

//     if (!name || !email || !age || !courseId) {
//       return Swal.fire({
//         icon: 'error',
//         title: 'Error!',
//         text: 'All fields are required.',
//         showConfirmButton: true,
//       });
//     }

//     const student = {
//       id,
//       name,
//       email,
//       age,
//       course_id: courseId,
//     };

//     fetch('http://localhost:9292/students/' + selectedStudent.id, {
//       method: 'PATCH',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(student),
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         const index = students.findIndex(
//           (item) => item.id === selectedStudent.id,
//         );
//         if (index === -1) {
//           setStudents([...students, data]);
//           return;
//         }
//         setStudents([
//           ...students.slice(0, index),
//           data,
//           ...students.slice(index + 1),
//         ]);
//       })
//       .catch((e) => {
//         console.error(e);
//         Swal.fire({
//           icon: 'warning',
//           title: 'Error',
//           text: 'Sorry, something went wrong please try again later',
//           showConfirmButton: false,
//           timer: 1500,
//         });
//       });

//     setIsEditing(false);

//     Swal.fire({
//       icon: 'success',
//       title: 'Updated!',
//       text: `${student.name} 's data has been updated.`,
//       showConfirmButton: false,
//       timer: 1500,
//     });
//   };

//   return (
//     <div className="small-container">
//       <form onSubmit={handleUpdate}>
//         <h1>Edit Students</h1>
//         <label htmlFor="name"> name</label>
//         <input
//           id="name"
//           type="text"
//           name="name"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//         />

//         <label htmlFor="email">Email</label>
//         <input
//           id="email"
//           type="email"
//           name="email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />
//         <label htmlFor="courseId">course ID </label>
//         <input
//           id="courseId"
//           type="number"
//           name="courseId"
//           value={courseId}
//           onChange={(e) => setCourseId(e.target.value)}
//         />

//         <label htmlFor="age">Age</label>
//         <input
//           id="age"
//           type="number"
//           name="age"
//           value={age}
//           onChange={(e) => setAge(e.target.value)}
//         />

//         <div style={{marginTop: '30px'}}>
//           <input type="submit" value="Update" />
//           <input
//             style={{marginLeft: '12px'}}
//             className="muted-button"
//             type="button"
//             value="Cancel"
//             onClick={() => setIsEditing(false)}
//           />
//         </div>
//       </form>
//     </div>
//   );
// }

// export default Edit;
