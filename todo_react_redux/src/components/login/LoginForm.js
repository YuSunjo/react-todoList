import React, { useCallback, useState } from 'react';
import { useForm } from 'react-hook-form';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';

function getModalStyle() {
  return {
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const LoginForm = () => {
  const classes = useStyles();
  const [modalStyle] = useState(getModalStyle);
  const { register, errors, handleSubmit } = useForm();

  const onSubmit = useCallback((data) => {
    console.log('data', data);
  }, []);

  return (
    <div className={classes.paper} style={modalStyle}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <div>Email</div>
          <input name="email" type="email" ref={register({ required: true })} />
        </div>
        <div>{errors.email && <p>this email field is required</p>}</div>
        <div>
          <div>Password</div>
          <input
            name="password"
            type="password"
            ref={register({ required: true })}
          />
        </div>
        <div>{errors.password && <p>this password field is required</p>}</div>
        <Button type="submit">submit</Button>
      </form>
    </div>
  );
};

export default LoginForm;
