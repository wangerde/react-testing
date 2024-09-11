// src/App.js
import React, { useState } from 'react';
import { Grid, Button, TextField, Typography, Card, CardContent, List } from '@mui/material';
import CustomizationGroup from './Customization/CustomizationGroup';
import CustomizationOptions from './Customization/CustomizationOptions';

function App() {
  const [selectedGroup, setSelectedGroup] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [customizationGroups, setCustomizationGroups] = useState([]);
  const [groupData, setGroupData] = useState({
    groupName: '',
    groupForeignName: '',
    options: [{ optionName: '', optionForeignName: '', optionPrice: '' }],
  });

  const handleGroupClick = (group) => {
    setSelectedGroup(group);
  };

  const handleAddGroup = () => {
    setShowForm(true);
  };

  const handleGroupChange = (e) => {
    setGroupData({ ...groupData, [e.target.name]: e.target.value });
  };

  const handleOptionChange = (index, e) => {
    const newOptions = [...groupData.options];
    newOptions[index][e.target.name] = e.target.value;
    setGroupData({ ...groupData, options: newOptions });
  };

  const handleAddOption = () => {
    setGroupData({
      ...groupData,
      options: [...groupData.options, { optionName: '', optionForeignName: '', optionPrice: '' }],
    });
  };

  const handleSaveGroup = () => {
    setCustomizationGroups([...customizationGroups, groupData]);
    setGroupData({
      groupName: '',
      groupForeignName: '',
      options: [{ optionName: '', optionForeignName: '', optionPrice: '' }],
    });
    setShowForm(false);
  };

  return (
    <div style={{ padding: '20px' }}>
      <Typography variant="h4" gutterBottom>
        Customizations
      </Typography>

      {/* Button to trigger the form */}
      <Button variant="contained" color="primary" onClick={handleAddGroup}>
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

      {showForm && (
        <Card style={{ marginTop: '20px' }}>
          <CardContent>
            <Typography variant="h6" gutterBottom>
              Add Customization Group
            </Typography>
            <Grid container spacing={2}>
              {/* Group Name Input */}
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  label="Group Name"
                  name="groupName"
                  value={groupData.groupName}
                  onChange={handleGroupChange}
                  variant="outlined"
                />
              </Grid>
              {/* Group Foreign Name Input */}
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  label="Group Foreign Name"
                  name="groupForeignName"
                  value={groupData.groupForeignName}
                  onChange={handleGroupChange}
                  variant="outlined"
                />
              </Grid>
            </Grid>

            <Typography variant="h6" style={{ marginTop: '20px' }}>
              Options
            </Typography>

            {groupData.options.map((option, index) => (
              <Grid container spacing={2} key={index}>
                {/* Option Name Input */}
                <Grid item xs={4}>
                  <TextField
                    fullWidth
                    label="Option Name"
                    name="optionName"
                    value={option.optionName}
                    onChange={(e) => handleOptionChange(index, e)}
                    variant="outlined"
                  />
                </Grid>
                {/* Option Foreign Name Input */}
                <Grid item xs={4}>
                  <TextField
                    fullWidth
                    label="Option Foreign Name"
                    name="optionForeignName"
                    value={option.optionForeignName}
                    onChange={(e) => handleOptionChange(index, e)}
                    variant="outlined"
                  />
                </Grid>
                {/* Option Price Input */}
                <Grid item xs={4}>
                  <TextField
                    fullWidth
                    label="Option Price"
                    name="optionPrice"
                    value={option.optionPrice}
                    onChange={(e) => handleOptionChange(index, e)}
                    variant="outlined"
                    type="number"
                  />
                </Grid>
              </Grid>
            ))}

            {/* Button to add more options */}
            <Button
              variant="outlined"
              color="secondary"
              onClick={handleAddOption}
              style={{ marginTop: '20px' }}
            >
              + Add more options
            </Button>

            {/* Save Button */}
            <Button
              variant="contained"
              color="primary"
              onClick={handleSaveGroup}
              style={{ marginTop: '20px' }}
            >
              Save Customization Group
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  );
}

export default App;
