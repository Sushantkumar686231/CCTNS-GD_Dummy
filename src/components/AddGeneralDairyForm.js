import React, { useState } from 'react';
import './AddGeneralDairyForm.css'; // Import form-specific CSS

const AddGeneralDairyForm = () => {
  const currentDateTime = new Date().toLocaleString(); // Auto-filled Date/Time
  const [gdType, setGdType] = useState('');
  const [entryFor, setEntryFor] = useState('');
  const [subject, setSubject] = useState('');
  const [gdBrief, setGdBrief] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (to be integrated with backend later)
    console.log("Form Submitted");
  };

  return (
    <div className="form-container">
      <h2>Add General Dairy Details</h2>
      <hr className="section-divider" />

      <form onSubmit={handleSubmit}>
        {/* Radio Buttons */}
        <div className="form-section">
          <label>Select:</label>
          <label>
            <input type="radio" name="select" value="Single" /> Single
          </label>
          <label>
            <input type="radio" name="select" value="Multiple" /> Multiple
          </label>
        </div>

        {/* Form Block */}
        <div className="form-box">
          {/* LHS Section */}
          <div className="form-left">
            <div className="form-field">
              <label>Date/Time:</label>
              <input type="text" value={currentDateTime} readOnly />
            </div>

            <div className="form-field">
              <label>General Dairy Type <span className="mandatory">*</span>:</label>
              <select value={gdType} onChange={(e) => setGdType(e.target.value)} required>
                <option value="">--Select Type--</option>
                <option value="Type1"></option>
                <option value="Type2"></option>
              </select>
            </div>

            <div className="form-field">
              <label>Entry for (Officer) <span className="mandatory">*</span>:</label>
              <select value={entryFor} onChange={(e) => setEntryFor(e.target.value)} required>
                <option value="">--Select Officer--</option>
                <option value="Officer1">Officer 1</option>
                <option value="Officer2">Officer 2</option>
              </select>
            </div>

            <div className="form-field">
              <label>Subject:</label>
              <textarea
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                placeholder="100 characters"
                maxLength="100"
              />
            </div>
          </div>

          {/* RHS Section */}
          <div className="form-right">
            <div className="form-field">
              <label>General Dairy Brief <span className="mandatory">*</span>:</label>
              <textarea
                value={gdBrief}
                onChange={(e) => setGdBrief(e.target.value)}
                required
              />
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="form-buttons">
          <button type="submit">Submit</button>
          <button type="button" onClick={() => { /* Clear fields logic */ }}>Clear</button>
          <button type="button" onClick={() => window.location.reload()}>Close</button> {/* Close reloads the page */}
        </div>
      </form>
    </div>
  );
};

export default AddGeneralDairyForm;