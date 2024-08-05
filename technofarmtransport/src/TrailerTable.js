import React from 'react';
import './TrailerTable.css';

const TrailerTable = () => {
  const data = [
    // Inserta aquí tus datos, por ejemplo:
    { id: 1, trailerId: "YN4IQT", type: "Banana", serviceDate: "24/6/23", otherDetails: "Details..." },
    { id: 2, trailerId: "U9L678", type: "Freight", serviceDate: "16/7/24", otherDetails: "29-9-22" },
    // Añade más filas según sea necesario
  ];

  return (
    <div className="table-container">
      <table className="trailer-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Trailer ID</th>
            <th>Type</th>
            <th>Service Date</th>
            <th>Other Details</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.trailerId}</td>
              <td>{item.type}</td>
              <td>{item.serviceDate}</td>
              <td>{item.otherDetails}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TrailerTable;
