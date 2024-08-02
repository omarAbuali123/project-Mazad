
import React from 'react';

const tableRowData = [
    { name: 'OMAR', location: 'Az zarqa', email: 'alqade@gmail.com' },
    { name: 'Ali', location: 'Az zarqa', email: 'alqade@gmail.com' },
    { name: 'Abd', location: 'Az zarqa', email: 'alqade@gmail.com' }
];

const tableCellClasses = 'py-2 px-4 border-b';
const deleteButtonClasses = 'text-destructive hover:text-destructive-foreground';

const UserTable = () => {
    return (
        <div className="container mx-auto p-4">
            <h2 className="text-center text-2xl font-bold mb-4">View And Delete User</h2>
            <table className="min-w-full bg-card border border-border">
                <thead>
                    <tr className="bg-secondary text-secondary-foreground">
                        <th className={tableCellClasses}>Name</th>
                        <th className={tableCellClasses}>Location</th>
                        <th className={tableCellClasses}>Email</th>
                        <th className={tableCellClasses}>Delete User</th>
                    </tr>
                </thead>
                <tbody>
                    {tableRowData.map((row, index) => (
                        <tr key={index} className="bg-muted-foreground">
                            <td className={tableCellClasses}>{row.name}</td>
                            <td className={tableCellClasses}>{row.location}</td>
                            <td className={tableCellClasses}>{row.email}</td>
                            <td className={`${tableCellClasses} text-center`}>
                                <button className={deleteButtonClasses}>
                                    <img aria-hidden="true" alt="delete-icon" src="https://openui.fly.dev/openui/24x24.svg?text=🗑️" />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default UserTable;








