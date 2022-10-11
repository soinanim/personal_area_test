import React, { FC } from 'react';
import { Box, TextField, Button } from '@mui/material';

const LoginForm: FC = () => {
  const handleSubmit = () => {};

  return (
    <form onSubmit={handleSubmit}>
      <Box
        component='form'
        sx={{
          '& .MuiTextField-root': { m: 1, width: '40ch' },
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
        noValidate
        autoComplete='off'>
        <TextField
          id='outlined-basic'
          label='Username'
          variant='outlined'
          fullWidth
          required
        />
        <TextField
          id='outlined-password-input'
          label='Password'
          type='password'
          autoComplete='current-password'
          fullWidth
          required
        />
        <Button type='submit' variant='contained'>
          Login
        </Button>
      </Box>
    </form>
  );
};

export default LoginForm;
