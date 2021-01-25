import React, { useState } from 'react';
import { Button, Modal } from '@material-ui/core';
import SignUpForm from './SignUpForm';

const SignUp = () => {
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
        회원가입
      </Button>
      <Modal open={open} onClose={handleClose}>
        <SignUpForm />
      </Modal>
    </div>
  );
};

export default SignUp;
