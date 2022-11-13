// import React, {useState} from 'react';
// import Swal from 'sweetalert2';

// function Edit({courses, selectedCourse, setCourses, setIsEditing}) {
//   const id = selectedCourse.id;

//   const [courseName, setCourseName] = useState(selectedCourse.course_name);
//   const [courseCode, setCourseCode] = useState(selectedCourse.course_code);
//   const [courseDescription, setCourseDescription] = useState(
//     selectedCourse.course_description,
//   );
//   const [teachersId, setTeachersId] = useState(selectedCourse.teacher_id);
//   const [studentId, setStudentId] = useState(selectedCourse.student_id);

//   const handleUpdate = (e) => {
//     e.preventDefault();

//     if (
//       !courseName ||
//       !courseCode ||
//       !courseDescription ||
//       !teachersId ||
//       !studentId
//     ) {
//       return Swal.fire({
//         icon: 'error',
//         title: 'Error!',
//         text: 'All fields are required.',
//         showConfirmButton: true,
//       });
//     }

//     const course = {
//       course_name: courseName,
//       course_code: courseCode,
//       course_description: courseDescription,
//       teacher_id: teachersId,
//       student_id: studentId,
//     };

//     fetch('http://localhost:9292/courses/' + selectedCourse.id, {
//       method: 'PATCH',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(course),
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         const index = courses.findIndex(
//           (item) => item.id === selectedCourse.id,
//         );
//         if (index === -1) {
//           setCourses([...courses, data]);
//           return;
//         }
//         setCourses([
//           ...courses.slice(0, index),
//           data,
//           ...courses.slice(index + 1),
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
//       text: `${course.courseName}'s data has been updated.`,
//       showConfirmButton: false,
//       timer: 1500,
//     });
//   };

//   return (
//     <div className="small-container">
//       <form onSubmit={handleUpdate}>
//         <h1>Edit Course</h1>
//         <label htmlFor="courseName">Course Name</label>
//         <input
//           id="courseName"
//           type="text"
//           name="courseName"
//           value={courseName}
//           onChange={(e) => setCourseName(e.target.value)}
//         />
//         <label htmlFor="courseCode">Course code</label>
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
//           value={teachersId}
//           onChange={(e) => setTeachersId(e.target.value)}
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
