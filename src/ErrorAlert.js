import React from 'react';
import Alert from '@mui/material/Alert';

const ErrorAlert = ({ text }) => {
  return text ? (
    <Alert severity="error" variant="filled">
      {text}
    </Alert>
  ) : null;
};

export default ErrorAlert;
