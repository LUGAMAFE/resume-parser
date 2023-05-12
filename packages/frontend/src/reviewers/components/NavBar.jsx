import { MenuOutlined } from '@mui/icons-material';
import { AppBar, Grid, IconButton, Toolbar } from '@mui/material';

export const NavBar = () => {
  return (
    <AppBar
      position="fixed"
      sx={{
        width: { sm: `calc(100% )` },
        ml: { sm: `0px` },
      }}
    >
      <Toolbar>
        <IconButton color="inherit" edge="start" sx={{ mr: 2, display: { sm: 'none' } }}>
          <MenuOutlined />
        </IconButton>

        <Grid container direction="row" justifyContent="center" alignItems="center">
          <IconButton color="error"></IconButton>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};
