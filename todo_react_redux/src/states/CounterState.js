import { atom } from 'recoil';

export const CounterState = atom({
  key: 'countState',
  default: 0,
});
