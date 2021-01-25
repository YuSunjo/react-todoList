import { Button } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';

const TodoBtn = styled.div`
  margin-top: 10px;
`;

const TodoButton = () => (
  <TodoBtn>
    <Link to="/todo" style={{ textDecoration: 'none' }}>
      <Button variant="contained" color="secondary">
        todo
      </Button>
    </Link>
  </TodoBtn>
);

export default TodoButton;
