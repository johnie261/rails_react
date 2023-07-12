import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGreetings } from './greetingSlice';
import { Link } from 'react-router-dom';

function Greeting() {
  const dispatch = useDispatch()
  const greeting = useSelector((state) => state.greeting.greeting);

  useEffect(() => {
    dispatch(fetchGreetings());
  }, []);

  return (
    <div>
      <h1>Greetings:</h1>
      <p>{greeting}</p>
      <Link to='/'>Home</Link>
    </div>
  );
};

export default Greeting