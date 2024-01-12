import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Track from './track';
import Tracks from './tracks';

/** importing our pages */
export default function Pages() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Tracks />} path="/" />
        <Route element={<Track />} path="/track/:trackId"></Route>
      </Routes>
    </BrowserRouter>
  );
}
