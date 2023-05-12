import { useState } from 'react';
import FileUpload from 'react-mui-fileuploader';

export default function MuiFileUploader() {
  const [filesToUpload, setFilesToUpload] = useState([]);

  const handleFilesChange = (files) => {
    // Update chosen files
    setFilesToUpload([...files]);
  };

  const uploadFiles = () => {
    (async () => {
      // Create a form and post it to server
      let formData = new FormData();
      filesToUpload.forEach((file) => formData.append('pdf', file));

      try {
        const response = await fetch('http://localhost:8080/api/document/uploadPDF', {
          method: 'POST',
          body: formData,
        });

        if (response.ok) {
          // Request succeeded
          console.log('File upload successful');
        } else {
          // Request failed
          console.error('File upload failed');
        }
      } catch (error) {
        console.error('An error occurred during file upload:', error);
      }
    })();
  };

  return (
    <>
      <FileUpload multiFile={true} onFilesChange={handleFilesChange} onContextReady={(context) => {}} />
      <button onClick={uploadFiles}>Upload</button>
    </>
  );
}
