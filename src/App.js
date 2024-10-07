import React, { useState } from 'react';
import Navbar from './components/Navbar';  // Import Navbar
import Header from './components/Header';  // Import Header
import AddGeneralDairyForm from './components/AddGeneralDairyForm';  // Import the form

function App() {
  const [showForm, setShowForm] = useState(false);  // State to manage form visibility

  return (
    <div>
      <Header />  {/* Always show Header */}
      <Navbar setShowForm={setShowForm} />  {/* Pass setShowForm to Navbar */}
      
      {/* Conditionally render the form */}
      {showForm && <AddGeneralDairyForm />}
    </div>
  );
}

export default App;