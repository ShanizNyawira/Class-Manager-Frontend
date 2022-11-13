// import React, {useState, useRef, useEffect} from 'react';
// import Swal from 'sweetalert2';

// function Add({teachers, setTeachers, setIsAdding}) {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [phoneNumber, setPhoneNumber] = useState('');

//   const textInput = useRef(null);

//   function addTeacher(newTeacher) {
//     const updatedCourses = [...teachers, newTeacher];
//     setTeachers(updatedCourses);
//   }

//   useEffect(() => {
//     textInput.current.focus();
//   }, []);

//   const handleAdd = (e) => {
//     e.preventDefault();
//     if (!name || !email || !phoneNumber) {
//       return Swal.fire({
//         icon: 'error',
//         title: 'Error!',
//         text: 'All fields are required.',
//         showConfirmButton: true,
//       });
//     }
//     const newTeacher = {
//       name,
//       email,
//       phone_number: phoneNumber,
//     };

//     fetch('http://localhost:9292/teachers', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(newTeacher),
//     })
//       .then((response) => response.json())
//       .then((data) => {
//         addTeacher(data);
//       })
//       .catch((error) => {
//         console.error('Error:', error);
//         Swal.fire({
//           icon: 'warning',
//           title: 'Error',
//           text: 'Sorry, something went wrong please try again later',
//           showConfirmButton: false,
//           timer: 1000,
//         });
//       });

//     setIsAdding(false);

//     Swal.fire({
//       icon: 'success',
//       title: 'Added!',
//       text: `${name}'s data has been Added.`,
//       showConfirmButton: false,
//       timer: 1000,
//     });
//   };

//   return (
//     <div className="small-container">
//       <form onSubmit={handleAdd}>
//         <h1>Add Teachers</h1>
//         <label htmlFor="name">Name</label>
//         <input
//           id="name"
//           type="text"
//           ref={textInput}
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
//         <label htmlFor="phoneNumber">phoneNumber </label>
//         <input
//           id="phoneNumber"
//           type="number"
//           name="phoneNumber"
//           value={phoneNumber}
//           onChange={(e) => setPhoneNumber(e.target.value)}
//         />
//         <div style={{marginTop: '30px'}}>
//           <input type="submit" value="Add" />
//           <input
//             style={{marginLeft: '12px'}}
//             className="muted-button"
//             type="button"
//             value="Cancel"
//             onClick={() => setIsAdding(false)}
//           />
//         </div>
//       </form>
//     </div>
//   );
// }

// export default Add;
