import axios from 'axios';
import fs from 'fs';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const uploadDirPath = __dirname + '/uploads';

const postPDF = async (req, res = response) => {
  console.log('files', req.files); // the uploaded file object
  const filename = req.files.pdf.name; // All files sent as pdf must be specified in the key value as pdf
  const file = req.files.pdf;
  const collection = 'tbCdtqoT';

  if (!fs.existsSync(uploadDirPath)) {
    fs.mkdirSync(uploadDirPath, { recursive: true });
  }

  const uploadPath = uploadDirPath + '/' + filename;
  file.mv(uploadPath, async (err) => {
    if (err) {
      return res.status(500).send(err);
    }

    // Read the contents of the PDF file
    const fileData = fs.readFileSync(uploadPath);
    const fileBlob = new Blob([fileData], { type: 'application/pdf' });
    const formData = new FormData();
    formData.append('file', fileBlob, filename);
    formData.append('collection', collection);

    // Make a request to Affinda's endpoint
    const options = {
      method: 'POST',
      url: 'https://api.affinda.com/v3/documents',
      headers: {
        accept: 'application/json',
        'content-type': 'multipart/form-data',
        authorization: 'Bearer 0ddd129aeb67880e789fbf55f34ef5532b5618aa',
      },
      data: formData,
    };

    try {
      const response = await axios.request(options);
      console.log(response);
      res.status(200).send(response.data);
    } catch (error) {
      console.error(error);
    }
  });
};

export { postPDF };
