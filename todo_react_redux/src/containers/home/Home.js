import React from 'react';
import 'containers/home/Home.css';
import Counter from 'components/counter/Counter';
import Login from 'components/login/Login';
import SignUp from 'components/signup/SignUp';
import TodoButton from 'components/todo/TodoButton';

export default function Home() {
  return (
    <div className="home">
      <header className="home__header">
        <i className="far fa-grin fa-7x" />
        <h1 className="home__title">Potato Diary</h1>
        <p className="home__text">Made By Steamed-Potatoes</p>
        <SignUp />
        <Login />
        <Counter />
        <TodoButton />
      </header>
    </div>
  );
}
