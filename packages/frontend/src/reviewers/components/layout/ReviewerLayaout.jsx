import { Box, Toolbar } from '@mui/material';
import PropTypes from 'prop-types';
import { NavBar } from '../NavBar';

const ReviewerLayaout = ({ children }) => {
  return (
    <Box sx={{ display: 'flex' }}>
      <NavBar />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
};

ReviewerLayaout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

export { ReviewerLayaout };
