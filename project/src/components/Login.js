import React from "react";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import FormControlLabel from "@mui/material/FormControlLabel";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";

function Login() {
  return (
    <Container component="main" maxWidth="sm">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar
          src="https://avatars.dicebear.com/api/big-smile/:seed.svg"
          sx={{ width: 70, height: 70 }}
        ></Avatar>
        <Typography component="h1" variant="h5">
          어서와서 당신의 동물을 자랑해주세요 !
        </Typography>

        <TextField
          label="Email Address"
          name="email"
          autoComplete="email"
          margin="normal"
          required
          fullWidth
          autoFocus
        />
        <TextField
          label="Password"
          name="password"
          type="password"
          autoComplete="current-password"
          margin="normal"
          required
          fullWidth
        />
        <FormControlLabel
          control={<Checkbox value="remember" color="primary" />}
          label="당신을 기억할게요 :)"
        />
        <Button
          variant="contained"
          type="submit"
          fullWidth
          sx={{ mt: 3, mb: 2 }}
        >
          Sign in
        </Button>

        <Grid container>
          <Grid item xs>
            <Link>비밀번호를 잊으셨나요?</Link>
          </Grid>
          <Grid item>
            <Link>처음이시군요!</Link>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}

export default Login;
