import React from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import Greeting from './Greeting';

function App () {
  return (
    <Routes>
      <Route path="/" element={
        <div>
          <h1>Welcome to hello react rails</h1>
          <Link to='/greetings'>Greeting</Link>
        </div>
      } />
      <Route path="/greetings" element={<Greeting />} />
    </Routes>
  );
};

export default App;