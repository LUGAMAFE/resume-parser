import { SaveOutlined } from '@mui/icons-material';
import { Button, FormControl, Grid, TextField, Typography } from '@mui/material';
import { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ReviewerContext } from '../components/context/Reviewercontext';

export const AddReviewerInput = () => {
  const { setReviewers } = useContext(ReviewerContext);
  const [form, setForm] = useState({ name: '', email: '' });

  const OnInputChange = ({ target: { name, value } }) => {
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const onSubmit = (event) => {
    event.preventDefault();
    setReviewers((reviewers) => [...reviewers, form]);
    navigate('/');
  };
  const navigate = useNavigate();
  return (
    <Grid container direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 1 }}>
      <Grid item>
        <Typography fontSize={39} fontWeight="light">
          Agregar Reviewer:
        </Typography>
      </Grid>

      <Grid container>
        <form onSubmit={onSubmit}>
          <FormControl fullWidth>
            <TextField
              name="name"
              type="text"
              variant="filled"
              fullWidth
              placeholder="Ingrese un nombre"
              label="nombre:"
              value={form.name}
              onChange={OnInputChange}
              sx={{ border: 'none', mb: 3, mt: 3 }}
            />
            <TextField
              name="email"
              type="text"
              variant="filled"
              fullWidth
              placeholder="Ingrese un correo"
              label="correo:"
              value={form.email}
              onChange={OnInputChange}
              sx={{ border: 'none', mb: 3 }}
            />
            <Grid item alignSelf="flex-end">
              <Button component={Link} to="/" type="submit" color="primary" onClick={onSubmit} sx={{ padding: 2 }}>
                <SaveOutlined sx={{ fontSize: 30, mr: 1 }} />
                Guardar
              </Button>
            </Grid>
          </FormControl>
        </form>
      </Grid>
    </Grid>
  );
};
