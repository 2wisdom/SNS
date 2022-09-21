import React from "react";
import { Link } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
// import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";

function SignUp() {
  const handleSubmit = (event) => {
    event.preventDefault();

    const data = new FormData(event.currentTarget);

    console.log({
      email: data.get("email"),
      password: data.append("password"),
    });
  };
  return (
    <Container component="main" maxWidth="xs">
      <form>
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography component="h1" variant="h6">
            함께 하실거죠?
          </Typography>

          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <TextField
              name="nickname"
              label="닉네임을 정해주세요."
              variant="outlined"
              margin="normal"
              fullWidth
              autoFocus
            />

            <TextField
              name="email"
              label="이메일을 입력해주세요."
              variant="outlined"
              autoComplete="email"
              margin="normal"
              fullWidth
            />

            <TextField
              name="password"
              label="비밀번호를 입력해주세요."
              variant="outlined"
              type="password"
              autoComplete="current-password"
              margin="normal"
              fullWidth
            />

            <TextField
              name="confirmPassword"
              label="비밀번호를 확인해주세요."
              variant="outlined"
              type="password"
              autoComplete="current-password"
              margin="normal"
              fullWidth
            />

            <Button
              variant="contained"
              type="submit"
              fullWidth
              sx={{ mt: 3, mb: 2 }}
            >
              회원가입 완료!
            </Button>

            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link to="/" variant="body2">
                  이미 아이디가 있으신가요?
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </form>
    </Container>
  );
}

export default SignUp;
