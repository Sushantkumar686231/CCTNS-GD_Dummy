import React, { useState } from 'react';
import Navbar from './components/Navbar';  // Import Navbar
import Header from './components/Header';  // Import Header
import AddGeneralDairyForm from './components/AddGeneralDairyForm';  // Import the form
import ViewGeneralDairy from './components/ViewGeneralDairy';  // Import the view component

function App() {
  const [showForm, setShowForm] = useState(false);  // State to manage form visibility
  const [showView, setShowView] = useState(false);  // State to manage view visibility

  // Handler to toggle between add form and view table
  const handleNavbarClick = (option) => {
    if (option === 'add') {
      setShowForm(true);
      setShowView(false);
    } else if (option === 'view') {
      setShowForm(false);
      setShowView(true);
    } else {
      setShowForm(false);  // Hide form when home is clicked
      setShowView(false);  // Hide view when home is clicked
    }
  };

  return (
    <div>
      <Header />  {/* Always show Header */}
      <Navbar handleNavbarClick={handleNavbarClick} />  {/* Pass handler to Navbar */}

      {/* Conditionally render the form or view table */}
      {showForm && <AddGeneralDairyForm />}
      {showView && <ViewGeneralDairy />}
    </div>
  );
}

export default App;
