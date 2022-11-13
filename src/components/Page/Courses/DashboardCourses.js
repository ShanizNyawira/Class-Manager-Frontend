// import React, {useState, useEffect} from 'react';
// import Swal from 'sweetalert2';

// import Add from './AddCourse';
// import Edit from './EditCourse';
// import Header from './Header';
// import List from './ListCourses';
// import Navbar from '../Navbar';
// import Footer from '../Footer';

// function Dashboard() {
//   const [courses, setCourses] = useState([]);
//   const [selectedCourse, setSelectedCourse] = useState(null);
//   const [isAdding, setIsAdding] = useState(false);
//   const [isEditing, setIsEditing] = useState(false);

//   useEffect(() => {
//     fetch('http://localhost:9292/courses', {
//       method: 'GET',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     })
//       .then((response) => response.json())
//       .then((data) => {
//         setCourses(data);
//       })
//       .catch((error) => {
//         Swal.fire({
//           icon: 'warning',
//           title: 'Error',
//           text: 'Sorry, something went wrong please try again later',
//           showConfirmButton: false,
//           timer: 1000,
//         });
//         console.error(error);
//       });
//   }, []);

//   const handleEdit = (id) => {
//     const [course] = courses.filter((course) => course.id === id);

//     setSelectedCourse(course);
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
//         fetch('http://localhost:9292/courses/' + id, {
//           method: 'DELETE',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//         })
//           .then((response) => response.json())
//           .then((data) => {
//             setCourses(courses.filter((item) => item.id !== id));
//           })
//           .catch((error) => {
//             Swal.fire({
//               icon: 'warning',
//               title: 'Error',
//               text: 'Sorry, something went wrong please try again later',
//               showConfirmButton: false,
//               timer: 1000,
//             });
//           });

//         // Swal.fire({
//         //   icon: 'success',
//         //   title: 'Deleted!',
//         //   text: `Course has been deleted.`,
//         //   showConfirmButton: false,
//         //   timer: 1000,
//         // });
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
//             courses={courses}
//             handleEdit={handleEdit}
//             handleDelete={handleDelete}
//             setCourses={setCourses}
//           />
//         </>
//       )}
//       {/* Add */}
//       {isAdding && (
//         <Add
//           courses={courses}
//           setCourses={setCourses}
//           setIsAdding={setIsAdding}
//         />
//       )}
//       {/* Edit */}
//       {isEditing && (
//         <Edit
//           courses={courses}
//           selectedCourse={selectedCourse}
//           setCourses={setCourses}
//           setIsEditing={setIsEditing}
//         />
//       )}

//       <Footer />
//     </div>
//   );
// }

// export default Dashboard;
