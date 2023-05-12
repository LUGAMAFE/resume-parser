import { Box, Grid } from '@mui/material';
import { useEffect } from 'react';
import MuiFileUploader from '../components/FileUploader';

export const ReviewersTable = () => {
  useEffect(() => {
    (async () => {
      try {
        const path = 'http://localhost:8080' + '/api/documents/uploadPDF';
        const response = await fetch(path);
        const res = await response.json();
        console.log('result', res);
      } catch (e) {
        console.log('error', e);
      }
    })();
  }, []);
  return (
    <Box
      display="flex"
      spacing={0}
      direction="row"
      alignItems="center"
      justifyContent="center"
      sx={{
        minHeight: 'calc(100vh - 110px)',
        backgroundColor: 'primary.main',
        borderRadius: 3,
      }}
    >
      <Grid
        container
        alignItems="center"
        justifyContent="center"
        gridTemplateColumns="repeat(auto-fit, minmax(160px, 250px))"
        // grid-template-columns repeat(auto-fit, minmax(160px, 250px));
        sx={{
          // backgroundColor: "white",
          borderRadius: 3,
          margin: '40px',
          overflow: 'hidden',
        }}
      >
        <MuiFileUploader />
      </Grid>
    </Box>
  );
};
