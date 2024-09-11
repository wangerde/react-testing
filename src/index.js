// src/index.js
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import NewCustomization from './Customization/NewCustomization';

function MainApp() {
  // State to hold customization groups
  const [customizationGroups, setCustomizationGroups] = useState([]);

  // Function to handle saving a new group
  const handleSaveGroup = (newGroup) => {
    // Add the new group to the list
    setCustomizationGroups([...customizationGroups, newGroup]);
  };

  return (
    <BrowserRouter>
      <Routes>
        {/* Pass the groups and the save handler to the appropriate components */}
        <Route path="/" element={<App customizationGroups={customizationGroups} />} />
        <Route path="/new-customization" element={<NewCustomization onSave={handleSaveGroup} />} />
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.render(<MainApp />, document.getElementById('root'));
