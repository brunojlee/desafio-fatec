import React from 'react';
import { Route, Routes as Switch } from 'react-router-dom';
import Login from "./pages/Login/Login";

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" element={<Login /> } />
    </Switch >
  );
}
