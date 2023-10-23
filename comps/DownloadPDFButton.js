import React from 'react';
import { Button } from 'antd';
import html2canvas from 'html2canvas';
import { ArrowDownOutlined } from '@ant-design/icons';
import jsPDF from 'jspdf';

const DownloadPDFButton = () => {
  const handleDownload = () => {
    // Create a Blob (binary data) containing the file content
    const content = 'This is the content of the file.';
    const blob = new Blob([content], { type: 'text/plain' });

    // Create a URL for the Blob
    const url = window.URL.createObjectURL(blob);

    // Create a link element and trigger a click to download the file
    const a = document.createElement('a');
    a.href = url;
    a.download = '2.pdf'; // Set the filename
    a.click();

    // Clean up by revoking the URL
    window.URL.revokeObjectURL(url);
  };

  return (
    <Button onClick={handleDownload} className='text-[#7153d9] border-1 border-[#7153d9]'>
      <ArrowDownOutlined className='rounded-full' />
    </Button>
  );
};

export default DownloadPDFButton;