import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Link } from "react-router-dom";
import { SiGmail } from "react-icons/si";

const defaultTheme = createTheme();
export const Login = () => {
  return (
    <>
      <div className="mx-3 my-5">
        <ThemeProvider theme={defaultTheme}>
          <Grid container component="main" sx={{ height: "100vh" }}>
            <CssBaseline />
            <Grid
              className="login-img"
              item
              xs={false}
              sm={4}
              md={7}
              sx={{
                backgroundRepeat: "no-repeat",
                backgroundColor: (t) =>
                  t.palette.mode === "light"
                    ? t.palette.grey[50]
                    : t.palette.grey[900],
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
            <Grid
              item
              xs={12}
              sm={8}
              md={5}
              component={Paper}
              elevation={6}
              square
            >
              <Box
                sx={{
                  my: 8,
                  mx: 4,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
                  <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                  Sign in
                </Typography>
                <Box component="form" noValidate sx={{ mt: 1 }}>
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    autoFocus
                  />
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                  />
                  <FormControlLabel
                    control={<Checkbox value="remember" color="primary" />}
                    label="Remember me"
                  />
                  <Link to="/">
                    <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      sx={{ mt: 3, mb: 2 }}
                    >
                      Sign In
                    </Button>
                  </Link>

                  <div className="d-flex align-items-center justify-content-center flex-column ">
                    <h5 className="mb-2 fw-normal">Or sign in with: </h5>
                    <button class="button-gogle btn btn-outline-success gap-2 d-flex">
                      <SiGmail />
                      Continue with Google
                    </button>
                  </div>

                  <Grid container>
                    <div className="d-flex align-items-center justify-content-center gap-2">
                      <h4>New User ?</h4>
                      <Link
                        to="/signup"
                        variant="body2"
                        className="text-decoration-none text-info fs-5  my-4"
                      >
                        SignUp
                      </Link>
                    </div>
                  </Grid>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </ThemeProvider>
      </div>
    </>
  );
};
