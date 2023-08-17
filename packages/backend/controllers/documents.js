import axios from 'axios';
import fs from 'fs';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const uploadDirPath = __dirname + '/uploads';
const BEARER_TOKEN = process.env.affinda_bearer_token;
const COLLECTION_ID = process.env.affinda_collection_id;

const postPDF = async (req, res = response) => {
  try {
    const filename = req.files.pdf.name; // All files sent as pdf must be specified in the key value as pdf

    const file = req.files.pdf;
    const collection = COLLECTION_ID;

    if (!fs.existsSync(uploadDirPath)) {
      fs.mkdirSync(uploadDirPath, { recursive: true });
    }

    const uploadPath = uploadDirPath + '/' + filename;

    await new Promise((resolve, reject) => {
      file.mv(uploadPath, (err) => {
        if (err) {
          reject(err);
        } else {
          resolve();
        }
      });
    });

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
        authorization: 'Bearer ' + BEARER_TOKEN,
      },
      data: formData,
    };

    const response = await axios.request(options);

    const { data } = response.data; // Assuming the response data contains the required fields
    console.log('data', data);
    // console.log('typeofimg', typeof data.headShot);
    const resumeData = {
      profilePicture: data.headShot ?? '',
      name: data.name.first,
      lastname: data.name.last,
      birthYear: data.dateOfBirth ?? '',
      fullname: data.name.raw,
      email: data.emails[0],
      tel: data.phoneNumbers[0],
      location: data.location?.rawInput,
      timezone: '',
      seniority: '',
      position: data.profession,
      skills: data.skills.map(({ name }) => name),
      github: 'https://github.com/test',
      linkedin: data.linkedin,
      education: data.education.map((ed) => ({
        grade: ed.accreditation?.education,
        institution: ed.organization,
      })),
      experience: data.workExperience.map((exp, index) => ({
        id: index,
        jobTitle: exp.jobTitle,
        company: exp.organization,
        location: exp.location?.rawInput ?? index % 2 === 0 ? 'mexico' : '',
        dates: exp.dates,
        description: exp.jobDescription,
      })),
      totalYearExperience: data.totalYearsExperience,
      certifications: data.certifications,
      languages: data.languages,
      softskills: '',
    };

    res.status(200).json({ msg: 'everything good', data: resumeData });
  } catch (error) {
    console.error(error);
    res.status(500).send('An error occurred');
  }
};

export { postPDF };
