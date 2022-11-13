// import React, {useEffect, useState} from 'react';
// import Swal from 'sweetalert2';

// import Add from './AddStudent';
// import Edit from './EditStudent';
// import Header from './Header';
// import List from './ListStudent';
// import Navbar from '../Navbar';
// import Footer from '../Footer';

// function Dashboard() {
//   const [students, setStudents] = useState([]);
//   const [selectedStudent, setSelectedStudent] = useState(null);
//   const [isAdding, setIsAdding] = useState(false);
//   const [isEditing, setIsEditing] = useState(false);

//   useEffect(() => {
//     fetch('http://localhost:9292/students', {
//       method: 'GET',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     })
//       .then((response) => response.json())
//       .then((data) => {
//         setStudents(data);
//       })
//       .catch((error) => {
//         Swal.fire({
//           icon: 'warning',
//           title: 'Error',
//           text: 'Sorry, something went wrong please try again later',
//           showConfirmButton: false,
//           timer: 1500,
//         });
//         console.error(error);
//       });
//   }, []);

//   const handleEdit = (id) => {
//     const [student] = students.filter((student) => student.id === id);

//     setSelectedStudent(student);
//     setIsEditing(true);
//   };

//   const handleDelete = (id) => {
//     Swal.fire({
//       icon: 'warning',
//       title: 'Are you sure?',
//       text: "You won't be able to revert this!",
//       showCancelButton: true,
//       confirmButtonText: 'Yes, delete it!',
//       cancelButtonText: 'No, cancel!',
//     }).then((result) => {
//       if (result.value) {
//         const name = students.find((item) => item.id === id).name;
//         fetch('http://localhost:9292/students/' + id, {
//           method: 'DELETE',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//         })
//           .then((response) => response.json())
//           .then((data) => {
//             setStudents(students.filter((item) => item.id !== id));
//           })
//           .catch((error) => {
//             Swal.fire({
//               icon: 'warning',
//               title: 'Error',
//               text: 'Sorry, something went wrong please try again later',
//               showConfirmButton: false,
//               timer: 1500,
//             });
//           });

//         Swal.fire({
//           icon: 'success',
//           title: 'Deleted!',
//           text: `Student has been deleted.`,
//           showConfirmButton: false,
//           timer: 1000,
//         });
//       }
//     });
//   };

//   return (
//     <div className="container">
//       {/* List */}
//       {!isAdding && !isEditing && (
//         <>
//           <Navbar />
//           <Header setIsAdding={setIsAdding} />
//           <List
//             students={students}
//             handleEdit={handleEdit}
//             handleDelete={handleDelete}
//           />
//         </>
//       )}
//       {/* Add */}
//       {isAdding && (
//         <Add
//           students={students}
//           setStudents={setStudents}
//           setIsAdding={setIsAdding}
//         />
//       )}
//       {/* Edit */}
//       {isEditing && (
//         <Edit
//           students={students}
//           selectedStudent={selectedStudent}
//           setStudents={setStudents}
//           setIsEditing={setIsEditing}
//         />
//       )}

//       <Footer />
//     </div>
//   );
// }

// export default Dashboard;
