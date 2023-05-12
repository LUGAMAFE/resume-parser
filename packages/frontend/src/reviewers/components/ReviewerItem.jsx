import { PersonOutline } from '@mui/icons-material';
import { Box, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from '@mui/material';
import PropTypes from 'prop-types';

const ReviewerItem = ({ reviewer, members = [] }) => {
  return (
    <Grid
      item
      xs={4}
      sx={{
        // borderRight: "1px solid black",
        minHeight: '300px',
      }}
    >
      <Box sx={{ background: '#5C5B85', borderRadius: 3, margin: 1, padding: 1 }}>
        <Typography color="white" variant="h6" textAlign="center">
          {reviewer}
        </Typography>
      </Box>
      {/* <Divider /> */}
      <List sx={{ background: 'white', borderRadius: 3, margin: 1 }}>
        {members.map((member) => (
          <ListItem key={JSON.stringify(member)} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <PersonOutline sx={{ color: 'primary.main' }} />
              </ListItemIcon>
              <Grid container>
                <ListItemText sx={{ marginLeft: 14 }} primary={member.name} />
              </Grid>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Grid>
  );
};

ReviewerItem.propTypes = {
  reviewer: PropTypes.string.isRequired,
  members: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
    })
  ),
};

ReviewerItem.defaultProps = {
  members: [],
};

export default ReviewerItem;
