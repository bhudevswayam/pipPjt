import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './report.css';
import '../App.css';
import Navbar from './Navbar';

const Report = () => {
  const [pdfs, setPdfs] = useState([]);
  const [selectedPdfIds, setSelectedPdfIds] = useState([]);

  useEffect(() => {
    const fetchPdfs = async () => {
      try {
        const response = await axios.get('http://localhost:3000/pdfs');
        setPdfs(response.data);
      } catch (error) {
        console.error('Error fetching PDFs:', error.message);
      }
    };

    fetchPdfs();
  }, []);

  const handleTogglePdf = (pdfId) => {
    setSelectedPdfIds((prevSelectedPdfIds) => {
      if (prevSelectedPdfIds.includes(pdfId)) {
        return prevSelectedPdfIds.filter((id) => id !== pdfId);
      } else {
        return [...prevSelectedPdfIds, pdfId];
      }
    });
  };

  const handleConcatenate = async () => {
    try {
      const response = await axios.post(
        'http://localhost:3000/concatenate-pdfs',
        { selectedPdfIds },
        { headers: { 'Content-Type': 'application/json' }, responseType: 'blob' }
      );

      // Create a blob from the response data
      const blob = new Blob([response.data], { type: 'application/pdf' });

      // Create a link element and trigger a download
      const link = document.createElement('a');
      link.href = window.URL.createObjectURL(blob);
      link.download = 'concatenated-pdf.pdf';
      document.body.appendChild(link);
      link.click();

    } catch (error) {
      console.error('Error concatenating PDFs:', error.message);
      alert('Error concatenating PDFs');
    }
  };

  return (
    <div className='container'>
      <Navbar />
      <div className='file-list-container'>
        <h2>Uploaded Files</h2>
        <ul className='file-list'>
          {pdfs.map((pdf) => (
            <li key={pdf._id}>
              <label>
                <input
                  type="checkbox"
                  checked={selectedPdfIds.includes(pdf._id)}
                  onChange={() => handleTogglePdf(pdf._id)}
                />
                {pdf.name} - {pdf.fileNumber} - {pdf.filename}
              </label>
            </li>
          ))}
        </ul>
        <button className='concat-btn' onClick={handleConcatenate}>
          Fetch Selected PDFs
        </button>
      </div>
    </div>
  );
};

export default Report;
