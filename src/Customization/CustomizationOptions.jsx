// src/customization/CustomizationOptions.js
import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const CustomizationOptions = ({ options }) => {
  return (
    <div>
      {options.map((option, index) => (
        <Card key={index} style={{ margin: '10px 0' }}>
          <CardContent>
            <Typography variant="subtitle1">{option.label}</Typography>
            <Typography variant="body2">${option.price}</Typography>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default CustomizationOptions;
