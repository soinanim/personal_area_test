import React, { FC } from 'react';
import { Box } from '@mui/material';
import LoginForm from '../components/LoginForm';

const Login: FC = () => {
  return (
    <Box
      sx={{
        margin: 'auto',
        mt: 15.5,
        p: 2.5,
        display: 'flex',
        borderRadius: '5px',
        boxShadow: 1,
      }}>
      <LoginForm />
    </Box>
  );
};

export default Login;
