// src/customization/CustomizationGroup.js
import React from 'react';
import { ListItem, ListItemText } from '@mui/material';

const CustomizationGroup = ({ groupName, onClick }) => {
  return (
    <ListItem button onClick={onClick}>
      <ListItemText primary={groupName} />
    </ListItem>
  );
};

export default CustomizationGroup;
