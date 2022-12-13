import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import ProjectPage from './pages/ProjectPage';
import ProjectDetailsPage from './pages/ProjectDetailsPage';

import { Route, Routes } from 'react-router-dom';

function App() {

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<ProjectPage />}  />
        <Route path="/projects/:projectId" element={<ProjectDetailsPage />} />
      </Routes>
    </div>
  )
}

export default App
