import React, { useState } from 'react';
import axios from 'axios';
import Navbar from './Navbar';
import '../App.css'
import './upload.css'
const FileUpload = () => {
  const [file, setFile] = useState(null);
  const [name, setName] = useState('');
  const [fileNumber, setFileNumber] = useState('');
  const [message, setMessage] = useState('');

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleFileNumberChange = (e) => {
    setFileNumber(e.target.value);
  };

  const handleUpload = async () => {
    try {
      const formData = new FormData();
      formData.append('pdf', file);
      formData.append('name', name);
      formData.append('fileNumber', fileNumber);

      await axios.post('http://localhost:3000/upload', formData);

      setMessage('File uploaded successfully!');
      setFile('')
      setFileNumber('')
      setName('')
    } catch (error) {
      setMessage('Error uploading file');
    }
  };

  return (
    <>
    <div className="container">
    <Navbar />
    <div className='upload'>
      <h1 className="heading">PDF File Upload</h1>
      <div className="file-upload-container">
        <input type="file" onChange={handleFileChange} className="file-upload-input" />
        <div className="label-input-group">
          <label className="input-label">Name:</label>
          <input type="text" value={name} onChange={handleNameChange} className="input-field" />
        </div>
        <div className="label-input-group">
          <label className="input-label">File Number:</label>
          <input type="text" value={fileNumber} onChange={handleFileNumberChange} className="input-field" />
        </div>
        <button onClick={handleUpload} className="submit-button">Upload</button>
      </div>
      {message && <p className="error-message">{message}</p>}
    </div>
    </div>
    </>
  );
};

export default FileUpload;
