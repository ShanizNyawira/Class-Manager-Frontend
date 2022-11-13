// import React, {useState, useEffect} from 'react';
// import Swal from 'sweetalert2';

// function Add({courses, setCourses, setIsAdding}) {
//   const [courseName, setCourseName] = useState('');
//   const [courseCode, setCourseCode] = useState('');
//   const [courseDescription, setCourseDescription] = useState('');
//   const [teacherId, setTeacherId] = useState('');
//   const [studentId, setStudentId] = useState('');

//   function addCourse(newCourse) {
//     const updatedCourses = [...courses, newCourse];
//     setCourses(updatedCourses);
//   }

//   const handleAdd = (e) => {
//     e.preventDefault();
//     if (
//       !courseName ||
//       !courseCode ||
//       !courseDescription ||
//       !teacherId ||
//       !studentId
//     ) {
//       return Swal.fire({
//         icon: 'error',
//         title: 'Error!',
//         text: 'All fields are required.',
//         showConfirmButton: true,
//       });
//     }

//     const newCourse = {
//       course_name: courseName,
//       course_code: courseCode,
//       course_description: courseDescription,
//       teacher_id: teacherId,
//       student_id: studentId,
//     };

//     setIsAdding(false);
//     fetch('http://localhost:9292/courses', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(newCourse),
//     })
//       .then((response) => response.json())
//       .then((data) => {
//         addCourse(data);
//       })
//       .catch((error) => {
//         console.error('Error:', error);
//         Swal.fire({
//           icon: 'warning',
//           title: 'Error',
//           text: 'Sorry, something went wrong please try again later',
//           showConfirmButton: false,
//           timer: 1500,
//         });
//       });

//     Swal.fire({
//       icon: 'success',
//       title: 'Added!',
//       text: `${courseName}'s data has been Added.`,
//       showConfirmButton: false,
//       timer: 1500,
//     });
//   };

//   return (
//     <div className="small-container">
//       <form onSubmit={handleAdd}>
//         <h1>Add Course</h1>
//         <label htmlFor="courseName"> Course Name</label>
//         <input
//           id="courseName"
//           type="text"
//           name="courseName"
//           value={courseName}
//           onChange={(e) => setCourseName(e.target.value)}
//         />
//         <label htmlFor="courseCode">Course Code</label>
//         <input
//           id="courseCode"
//           type="number"
//           name="courseCode"
//           value={courseCode}
//           onChange={(e) => setCourseCode(e.target.value)}
//         />
//         <label htmlFor="courseDescription">Course Description</label>
//         <input
//           id="courseDescription"
//           type="text"
//           name="courseDescription"
//           value={courseDescription}
//           onChange={(e) => setCourseDescription(e.target.value)}
//         />
//         <label htmlFor="teachersId">Teachers Id </label>
//         <input
//           id="teachersId"
//           type="number"
//           name="teachersId"
//           value={teacherId}
//           onChange={(e) => setTeacherId(e.target.value)}
//         />
//         <label htmlFor="studentId">Student Id</label>
//         <input
//           id="studentId"
//           type="number"
//           name="studentId"
//           value={studentId}
//           onChange={(e) => setStudentId(e.target.value)}
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
