import Box from "@mui/material/Box";
import RegisterOrLoginForm from "../components/RegisterOrLoginForm";

export default function SignUp() {
  return (
    <Box
      sx={{
        height: "100vh",
        backgroundColor: "#9adcbb",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <RegisterOrLoginForm isRegister={false} />
    </Box>
  );
}
