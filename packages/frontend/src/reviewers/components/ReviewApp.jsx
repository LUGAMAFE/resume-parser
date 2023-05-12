import { AddOutlined } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import { Link } from 'react-router-dom';
import { AppRouter } from '../../router/AppRouter';
import { ReviewerLayaout } from './layout/ReviewerLayaout';

export const ReviewApp = () => {
  return (
    <ReviewerLayaout>
      <AppRouter />
      <IconButton
        component={Link}
        to="/add-reviewer"
        size="large"
        sx={{
          color: 'white',
          backgroundColor: 'error.main',
          ':hover': { backgroundColor: 'error.main', opacity: 0.9 },
          position: 'fixed',
          right: 50,
          bottom: 50,
        }}
      >
        <AddOutlined sx={{ fontSize: 30 }} />
      </IconButton>
    </ReviewerLayaout>
  );
};
