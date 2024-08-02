

import React from 'react';
import { Link } from 'react-router-dom';

const Admin = () => {
  return (
    <div className="dashboard">
      <h1>Admin Dashboard</h1>
      <div className="card-container">
        <Link to="/UserTable" className="card">View and Delete User</Link>
        <Link to="/" className="card">Add and Delete Categories</Link>
        <div className="card">View and Delete User Items</div>
        <div className="card">Accept or Reject New Items</div>
      </div>
    </div>
  );
};

export default Admin;


// import React from 'react';

// const sharedClasses = {
//   card: "bg-secondary text-secondary-foreground p-4 rounded-lg shadow-md",
// };

// const Admin = () => {
//   return (
//     <div className="flex flex-col items-center p-4">
//       <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//         <DashboardCard title="View And Delete User" />
//         <DashboardCard title="Add And Delete Category" />
//         <DashboardCard title="View And Delete User Item" />
//         <DashboardCard title="Accept Or Reject The New Item" />
//       </div>
//     </div>
//   );
// };

// const DashboardCard = ({ title }) => {
//   return (
//     <div className={sharedClasses.card}>
//       <h2 className="text-lg">{title}</h2>
//     </div>
//   );
// };

// export default Admin;
