import React from 'react';
import Alert from '@mui/material/Alert';

const InfoAlert = ({ text }) => {
  return text ? (
    <Alert severity="info" variant="filled">
      {text}
    </Alert>
  ) : null;
};

export default InfoAlert;
