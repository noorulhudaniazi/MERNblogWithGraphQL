import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { AddNew } from './Pages/AddNew';
import { GraphQL } from './Pages/graphql.jsx';

function App() {
  return (
    <>


      <Router >
        <Routes>
          <Route path="/" element={<GraphQL />} />
          <Route path="/addnew" element={<AddNew />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
