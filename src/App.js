// src/App.js
import React, { useState } from 'react';
import { Grid, Button, Typography, List } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import CustomizationGroup from './Customization/CustomizationGroup';
import CustomizationOptions from './Customization/CustomizationOptions';

function App({ customizationGroups }) {  // Accept customizationGroups as a prop
  const [selectedGroup, setSelectedGroup] = useState(null);
  const navigate = useNavigate();

  const handleGroupClick = (group) => {
    setSelectedGroup(group);
  };

  return (
    <div style={{ padding: '20px' }}>
      <Typography variant="h4" gutterBottom>
        Customizations
      </Typography>

      {/* Button to navigate to the form */}
      <Button variant="contained" color="primary" onClick={() => navigate('/new-customization')}>
        + Add a Customization Group
      </Button>

      <Grid container spacing={2} style={{ marginTop: '20px' }}>
        {/* Customization Groups (Left Panel) */}
        <Grid item xs={3}>
          <List>
            {customizationGroups.map((group, index) => (
              <CustomizationGroup
                key={index}
                groupName={group.groupName}
                onClick={() => handleGroupClick(group)}
              />
            ))}
          </List>
        </Grid>

        {/* Customization Options (Right Panel) */}
        <Grid item xs={9}>
          {selectedGroup ? (
            <>
              <Typography variant="h6" gutterBottom>
                {selectedGroup.groupName}
              </Typography>
              <CustomizationOptions options={selectedGroup.options} />
            </>
          ) : (
            <Typography variant="h6">Please select a customization group</Typography>
          )}
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
