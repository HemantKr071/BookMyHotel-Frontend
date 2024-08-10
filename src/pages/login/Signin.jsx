import React, { useContext, useState } from "react";
import "./login.css";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";
//import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon, MDBInput } from 'mdb-react-ui-kit';
import { useNavigate } from "react-router-dom";
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import { Container, Grid, Typography, TextField, Button, Box, Paper } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { styled } from '@mui/material/styles';
const theme = createTheme({
  palette: {
    primary: {
      main: "#007bff",
    },
    secondary: {
      main: "#6c757d",
    },
  },
});

const Signin = () => {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  const { loading, error, dispatch } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post(`https://bookmyhotel-backend.onrender.com/api/auth/login`, credentials);
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data.user});
      navigate("/");
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE", payload: err.response.data });
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="lg" sx={{ height: '100vh', display: 'flex', alignItems: 'center' }}>
        <Grid container>
          <Grid item xs={12} sm={6} display="flex" flexDirection="column" alignItems="center" justifyContent="center">
            <Box sx={{ textAlign: 'center' }}>
              <Typography variant="h3" gutterBottom>
                BookMyHotel
              </Typography>
              <Typography variant="h6" color="textSecondary" gutterBottom>
                Log in
              </Typography>
              <Paper elevation={3} sx={{ padding: 3, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Box component="form" onSubmit={handleClick} sx={{ mt: 1 }}>
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="username"
                    label="Username - Hemant@071"
                    name="username"
                    autoComplete="username"
                    autoFocus
                    onChange={handleChange}
                    value={credentials.username}
                    variant="outlined"
                  />
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Password - HK123456"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    onChange={handleChange}
                    value={credentials.password}
                    variant="outlined"
                  />
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    sx={{ mt: 3, mb: 2 }}
                    disabled={loading}
                  >
                    Login
                  </Button>
                  {error && <Typography color="error">{error.message}</Typography>}
                </Box>
              </Paper>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} className="d-none d-sm-block" sx={{ display: { xs: 'none', sm: 'block' } }}>
            <img 
              src="https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Login image"
              style={{ width: '44.99rem', height: '51rem', objectPosition: 'left' }} 
            />
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  );
};

export default Signin;
