import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import ArrowForward from "@mui/icons-material/ArrowForward";
import { Link } from "react-router-dom";

const spacingTopStyle = {
  marginTop: "1rem",
};

export default function RegisterOrLoginForm(props) {
  const { isRegister } = props;

  return (
    <Paper
      elevation={2}
      sx={{
        width: "381px",
        borderRadius: "20px",
        paddingBottom: "20px",
      }}
    >
      <Typography
        align="center"
        variant="h4"
        sx={{
          padding: "50px 0",
        }}
      >
        {isRegister ? "Register" : "Login"}
      </Typography>

      <Container>
        <TextField label="Username" type="text" fullWidth />
        <TextField label="Password" type="password" fullWidth margin="normal" />
        {isRegister && (
          <TextField
            label="Confirm Password"
            type="password"
            fullWidth
            margin="normal"
          />
        )}

        <Button
          variant="contained"
          fullWidth
          endIcon={<ArrowForward />}
          sx={{
            ...spacingTopStyle,
            color: "white",
          }}
        >
          {"Sign " + (isRegister ? "Up" : "In")}
        </Button>

        {isRegister ? (
          <Typography align="center" variant="body2" sx={spacingTopStyle}>
            Already a user?{" "}
            <Link to="/login" style={{ textDecoration: "none" }}>
              Login
            </Link>{" "}
            here
          </Typography>
        ) : (
          <Typography align="center" variant="body2" sx={spacingTopStyle}>
            Not a user?{" "}
            <Link to="/register" style={{ textDecoration: "none" }}>
              Register
            </Link>{" "}
            here
          </Typography>
        )}
      </Container>
    </Paper>
  );
}
