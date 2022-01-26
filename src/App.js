import Container from "@mui/material/Container";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <Container>
      <AppBar
        position="static"
        sx={{
          mt: "1rem",
          borderRadius: "20px",
          color: "white",
        }}
      >
        <Toolbar>
          <PeopleOutlineIcon />
          <Typography
            variant="h6"
            sx={{ flexGrow: 1, pl: "1rem", fontWeight: "normal" }}
          >
            Employee Management App
          </Typography>
          <Link to="/login" style={{ textDecoration: "none", color: "white" }}>
            Logout
          </Link>
        </Toolbar>
      </AppBar>
    </Container>
  );
}

export default App;
