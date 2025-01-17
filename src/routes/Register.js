import Box from "@mui/material/Box";
import RegisterOrLoginForm from "../components/RegisterOrLoginForm";

export default function Register() {
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
      <RegisterOrLoginForm isRegister />
    </Box>
  );
}
