// import React from 'react';

// function List({teachers, handleEdit, handleDelete}) {
//   const formatter = new Intl.NumberFormat('en-US', {
//     style: 'currency',
//     currency: 'USD',
//     minimumFractionDigits: null,
//   });

//   return (
//     <div className="contain-table">
//       <table className="striped-table">
//         <thead>
//           <tr>
//             <th>No.</th>
//             <th>Name</th>
//             <th>Email</th>
//             <th>Phone</th>
//             <th colSpan={2} className="text-center">
//               Actions
//             </th>
//           </tr>
//         </thead>
//         <tbody>
//           {teachers.length > 0 ? (
//             teachers.map((teacher, i) => (
//               <tr key={teacher.id}>
//                 <td>{i + 1}</td>
//                 <td>{teacher.name}</td>
//                 <td>{teacher.email}</td>
//                 <td>{teacher.phone_number}</td>

//                 <td className="text-right">
//                   <button
//                     onClick={() => handleEdit(teacher.id)}
//                     className="button muted-button">
//                     Edit
//                   </button>
//                 </td>
//                 <td className="text-left">
//                   <button
//                     onClick={() => handleDelete(teacher.id)}
//                     className="button muted-button">
//                     Delete
//                   </button>
//                 </td>
//               </tr>
//             ))
//           ) : (
//             <tr>
//               <td colSpan={7}>No Teachers Added</td>
//             </tr>
//           )}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// export default List;
