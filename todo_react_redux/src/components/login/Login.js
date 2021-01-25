import React, { useState } from 'react';
import { Button, Modal } from '@material-ui/core';
import LoginForm from './LoginForm';

const Login = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button type="button" onClick={handleOpen}>
        로그인
      </Button>
      <Modal open={open} onClose={handleClose}>
        <LoginForm />
      </Modal>
    </div>
  );
};

export default Login;
