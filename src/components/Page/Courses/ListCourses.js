import React from 'react';



function List({courses, handleEdit, handleDelete}) {
  return (
    <div className="contain-table">
      <table className="striped-table">
        <thead>
          <tr>
            <th>No.</th>
            <th>Course_Name</th>
            <th>Course_code</th>
            <th>course description</th>
            <th>Teacher_id</th>
            <th>Student_id</th>
            <th colSpan={2} className="text-center">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {courses.length > 0 ? (
            courses.map((course, i) => (
              // course.course_name &&
              <tr key={course.id}>
                <td>{i + 1}</td>
                <td>{course.course_name}</td>
                <td>{course.course_code}</td>
                <td>{course.course_description}</td>
                <td>{course.teacher_id}</td>

                <td>{course.student_id}</td>

                <td className="text-right">
                  <button
                    onClick={() => handleEdit(course.id)}
                    className="button muted-button">
                    Edit
                  </button>
                </td>
                <td className="text-left">
                  <button
                    onClick={() => handleDelete(course.id)}
                    className="button muted-button">
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={7}>No Courses Added</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default List;
