import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ViewGeneralDairy.css';

const ViewGeneralDairy = () => {
  const [generalDairyData, setGeneralDairyData] = useState([]);

  // Fetch data from the backend when component loads
  useEffect(() => {
    axios.get('http://localhost:8080/api/general-dairy')
      .then(response => {
        setGeneralDairyData(response.data);
      })
      .catch(error => console.error("Error fetching General Dairy data:", error));
  }, []);

  return (
    <div className="view-container">
      <h2>View General Dairy Records</h2>
      <table className="general-dairy-table">
        <thead>
          <tr>
            <th>GD/SD/DD Number</th>
            <th>General Dairy Type</th>
            <th>Date/Time</th>
            <th>Entry for (Officer)</th>
            <th>Subject</th>
            <th>General Dairy Brief</th>
            <th>Police Station</th>
            <th>Office Name</th>
          </tr>
        </thead>
        <tbody>
          {generalDairyData.length > 0 ? (
            generalDairyData.map((entry) => (
              <tr key={entry.id}>
                <td>{entry.id}</td>
                <td>{entry.generalDairyType.replace('_', ' ')}</td>
                <td>{new Date(entry.dateTime).toLocaleString()}</td>
                <td>{entry.entryForOfficer}</td>
                <td>{entry.subject}</td>
                <td>{entry.generalDairyBrief}</td>
                {/* Constant values */}
                <td>AIR PORT</td>
                <td>AIR PORT</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="8">No records found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ViewGeneralDairy;
