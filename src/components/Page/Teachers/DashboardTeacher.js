// import React, {useEffect, useState} from 'react';
// import Swal from 'sweetalert2';

// import Add from './AddTeacher';
// import Edit from './EditTeacher';
// import Header from './Header';
// import List from './ListTeacher';
// import Navbar from '../Navbar';
// import Footer from '../Footer';

// function Dashboard() {
//   const [teachers, setTeachers] = useState([]);
//   const [selectedTeacher, setSelectedTeacher] = useState(null);
//   const [isAdding, setIsAdding] = useState(false);
//   const [isEditing, setIsEditing] = useState(false);

//   useEffect(() => {
//     fetch('http://localhost:9292/teachers', {
//       method: 'GET',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     })
//       .then((response) => response.json())
//       .then((data) => {
//         setTeachers(data);
//         console.log(data);
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
//     const [teacher] = teachers.filter((teacher) => teacher.id === id);

//     setSelectedTeacher(teacher);
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
//         fetch('http://localhost:9292/teachers/' + id, {
//           method: 'DELETE',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//         })
//           .then((response) => response.json())
//           .then((data) => {
//             setTeachers(teachers.filter((item) => item.id !== id));
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
//           text: `Teacher has been deleted.`,
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
//             teachers={teachers}
//             handleEdit={handleEdit}
//             handleDelete={handleDelete}
//           />
//         </>
//       )}
//       {/* Add */}
//       {isAdding && (
//         <Add
//           teachers={teachers}
//           setTeachers={setTeachers}
//           setIsAdding={setIsAdding}
//         />
//       )}
//       {/* Edit */}
//       {isEditing && (
//         <Edit
//           teachers={teachers}
//           selectedTeacher={selectedTeacher}
//           setTeachers={setTeachers}
//           setIsEditing={setIsEditing}
//         />
//       )}

//       <Footer />
//     </div>
//   );
// }

// export default Dashboard;
