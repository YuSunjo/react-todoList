import { Button } from '@material-ui/core';
import React, { useCallback } from 'react';
import { useRecoilState } from 'recoil';
import { CounterState } from 'states/CounterState';
import './Counter.css';

export default function Counter() {
  const [counterState, setCounterState] = useRecoilState(CounterState);

  const onClickCountButton = useCallback(() => {
    setCounterState((count) => count + 1);
  }, [setCounterState]);

  return (
    <div>
      <h3 className="counter__text">{counterState}</h3>
      <Button
        variant="contained"
        color="secondary"
        onClick={onClickCountButton}
      >
        Count Up
      </Button>
    </div>
  );
}
