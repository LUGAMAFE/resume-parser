import { PersonOutline } from '@mui/icons-material';
import { Grid, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import PropTypes from 'prop-types';

const StudentItem = ({ student, studentEmail }) => {
  return (
    <>
      <ListItem key={student} disablePadding>
        <ListItemButton>
          <ListItemIcon>
            <PersonOutline sx={{ color: 'primary.main' }} />
          </ListItemIcon>
          <Grid container>
            <ListItemText primary={student} />
            <ListItemText secondary={studentEmail} />
          </Grid>
        </ListItemButton>
      </ListItem>
    </>
  );
};

StudentItem.propTypes = {
  student: PropTypes.string.isRequired,
  studentEmail: PropTypes.string.isRequired,
};

export { StudentItem };
