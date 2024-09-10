// src/App.js
import React, { useState } from 'react';
import { Grid, List, Typography } from '@mui/material';
import CustomizationGroup from './Customization/CustomizationGroup';
import CustomizationOptions from './Customization/CustomizationOptions';

function App() {
  const [selectedGroup, setSelectedGroup] = useState(null);

  const customizationGroups = [
    {
      groupName: 'Chicken',
      options: [
        { label: 'Chicken With No Skin', price: 0.0 },
        { label: 'Chicken With Skin', price: 0.0 },
      ],
    },
    {
      groupName: 'Add-ons',
      options: [
        { label: 'Egg', price: 1.11 },
        { label: 'Cheese', price: 1.67 },
        { label: 'Bacon', price: 2.22 },
      ],
    },
  ];

  const handleGroupClick = (group) => {
    setSelectedGroup(group);
  };

  return (
    <div style={{ padding: '20px' }}>
      <Typography variant="h4" gutterBottom>
        Customizations
      </Typography>

      <Grid container spacing={2}>
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
