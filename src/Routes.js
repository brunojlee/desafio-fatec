import React from 'react';
import { Route, Routes as Switch } from 'react-router-dom';
import Login from "./pages/Login/Login";
import Question from './pages/Question/Question';

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" element={<Login /> } />
      <Route exact path="/question" element={<Question /> } />
    </Switch >
  );
}
