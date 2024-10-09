import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './AddGeneralDairyForm.css';

const AddGeneralDairyForm = () => {
  const [generalDairyType, setGeneralDairyType] = useState('');
  const [entryForOfficer, setEntryForOfficer] = useState('');
  const [subject, setSubject] = useState('');
  const [generalDairyBrief, setGeneralDairyBrief] = useState('');
  const [generalDairyTypes, setGeneralDairyTypes] = useState([]);
  const [selectType, setSelectType] = useState('single');

  // Criminal Case Fields
  const [caseType, setCaseType] = useState('');
  const [act, setAct] = useState('');
  const [section, setSection] = useState('');
  const [caseTypes, setCaseTypes] = useState([]);
  const [acts, setActs] = useState([]);
  const [sections, setSections] = useState([]);

  // Roll Call Fields
  const [totalSanctionedStaff, setTotalSanctionedStaff] = useState('');
  const [totalConstables, setTotalConstables] = useState('');
  const [otherForcesDetails, setOtherForcesDetails] = useState('');

  // Fetch General Dairy types from backend
  useEffect(() => {
    axios.get('http://localhost:8080/api/general-dairy-types')
      .then(response => {
        setGeneralDairyTypes(response.data);
      })
      .catch(error => console.error("Error fetching general dairy types:", error));
  }, []);

  // Fetch additional data when Criminal Case is selected
  useEffect(() => {
    if (generalDairyType === 'CRIMINAL_CASE') {
      axios.get('http://localhost:8080/api/criminal-case-types')
        .then(response => setCaseTypes(response.data))
        .catch(error => console.error('Error fetching case types:', error));

      axios.get('http://localhost:8080/api/acts')
        .then(response => setActs(response.data))
        .catch(error => console.error('Error fetching acts:', error));

      axios.get('http://localhost:8080/api/sections')
        .then(response => setSections(response.data))
        .catch(error => console.error('Error fetching sections:', error));
    }
  }, [generalDairyType]);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prepare form data
    const formData = {
      generalDairyType,
      entryForOfficer,
      subject,
      generalDairyBrief,
      selectType,
      caseType,
      act,
      section,
      totalSanctionedStaff,
      totalConstables,
      otherForceDetails: otherForcesDetails,
    };

    try {
      // Send form data to backend
      const response = await axios.post('http://localhost:8080/api/general-dairy', formData);
      console.log('Form submitted successfully', response.data);
      alert('Form submitted successfully!');
    } catch (error) {
      console.error('Error submitting the form:', error);
      alert('Error submitting the form.');
    }
  };

  return (
    <div className="form-container">
      <h2>Add General Dairy Details</h2>
      <hr className="form-divider" />

      <form onSubmit={handleSubmit}>
        {/* Select Type (Single/Multiple) */}
        <div className="form-section">
          <label>Select:</label>
          <div>
            <label>
              <input
                type="radio"
                value="single"
                checked={selectType === 'single'}
                onChange={() => setSelectType('single')}
              />
              Single
            </label>
            <label style={{ marginLeft: '10px' }}>
              <input
                type="radio"
                value="multiple"
                checked={selectType === 'multiple'}
                onChange={() => setSelectType('multiple')}
              />
              Multiple
            </label>
          </div>
        </div>

        {/* Date/Time field */}
        <div className="form-section">
          <label>Date/Time:</label>
          <input type="text" value={new Date().toLocaleString()} readOnly />
        </div>

        {/* General Dairy Type */}
        <div className="form-section">
          <label>General Dairy Type <span className="required">*</span>:</label>
          <select
            value={generalDairyType}
            onChange={(e) => setGeneralDairyType(e.target.value)}
            required
          >
            <option value="">Select</option>
            {generalDairyTypes.map((type, index) => (
              <option key={index} value={type}>{type.replace('_', ' ')}</option>
            ))}
          </select>
        </div>

        {/* Criminal Case Additional Fields */}
        {generalDairyType === 'CRIMINAL_CASE' && (
          <>
            <div className="form-section">
              <label>Case Type <span className="required">*</span>:</label>
              <select
                value={caseType}
                onChange={(e) => setCaseType(e.target.value)}
                required
              >
                <option value="">Select Case Type</option>
                {caseTypes.map((type, index) => (
                  <option key={index} value={type}>{type}</option>
                ))}
              </select>
            </div>

            <div className="form-section">
              <label>Act <span className="required">*</span>:</label>
              <select
                value={act}
                onChange={(e) => setAct(e.target.value)}
                required
              >
                <option value="">Select Act</option>
                {acts.map((act, index) => (
                  <option key={index} value={act}>{act}</option>
                ))}
              </select>
            </div>

            <div className="form-section">
              <label>Section <span className="required">*</span>:</label>
              <select
                value={section}
                onChange={(e) => setSection(e.target.value)}
                required
              >
                <option value="">Select Section</option>
                {sections.map((section, index) => (
                  <option key={index} value={section}>{section}</option>
                ))}
              </select>
            </div>
          </>
        )}

        {/* Roll Call Additional Fields */}
        {generalDairyType === 'ROLL_CALL' && (
          <>
            <div className="form-section">
              <label>Total Sanctioned Staff No. <span className="required">*</span>:</label>
              <input
                type="text"
                value={totalSanctionedStaff}
                onChange={(e) => setTotalSanctionedStaff(e.target.value)}
                required
              />
            </div>

            <div className="form-section">
              <label>Total No. of Constables <span className="required">*</span>:</label>
              <input
                type="text"
                value={totalConstables}
                onChange={(e) => setTotalConstables(e.target.value)}
                required
              />
            </div>

            <div className="form-section">
              <label>Details of Other Forces Available:</label>
              <textarea
                value={otherForcesDetails}
                onChange={(e) => setOtherForcesDetails(e.target.value)}
              />
            </div>
          </>
        )}

        {/* Entry for Officer */}
        <div className="form-section">
          <label>Entry for (Officer) <span className="required">*</span>:</label>
          <select
            value={entryForOfficer}
            onChange={(e) => setEntryForOfficer(e.target.value)}
            required
          >
            <option value="">Select Officer</option>
            <option value="Officer 1">Officer 1</option>
            <option value="Officer 2">Officer 2</option>
          </select>
        </div>

        {/* Subject */}
        <div className="form-section">
          <label>Subject:</label>
          <textarea
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            placeholder="Enter subject (max 100 characters)"
            maxLength="100"
          />
        </div>

        {/* General Dairy Brief */}
        <div className="form-section">
          <label>General Dairy Brief <span className="required">*</span>:</label>
          <textarea
            value={generalDairyBrief}
            onChange={(e) => setGeneralDairyBrief(e.target.value)}
            required
          />
        </div>

        {/* Form Actions */}
        <div className="form-actions" style={{ marginTop: '20px' }}>
          <button type="submit" style={{ marginRight: '10px' }}>Submit</button>
          <button type="reset" style={{ marginRight: '10px' }}>Clear</button>
          <button type="button" onClick={() => window.history.back()}>Close</button>
        </div>
      </form>
    </div>
  );
};

export default AddGeneralDairyForm;
