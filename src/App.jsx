import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import Report from './components/Report';
import History from './components/History';
import Userguide from './components/Userguide';
import FileUploadForm from './components/Upload';

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
          <Route path="report-generator" element={<Report />} />
          <Route path="history" element={<History />} />
          <Route path="user-guide" element={<Userguide />} />
          <Route path='upload' element={<FileUploadForm />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App
