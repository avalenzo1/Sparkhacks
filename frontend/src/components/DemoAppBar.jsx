import PropTypes from "prop-types";
import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import { NavLink, useNavigate } from "react-router-dom";
import { Row } from "@components";

export function DemoAppBarButton({path, text}) {
  return (
    <Button disableRipple 
      component={NavLink} 
      to={path}
      sx={{
        backgroundColor: "transparent",
        color: "#F1FFF8",
        "&.active": { color: "#45B78B" },
        "&:not(.active)": { 
          "&:hover": { color: "#C9F0DD" }
        },
        fontWeight: "bold",
        typography: "body1"
      }}
    >
      {text}
    </Button>
  );
}

DemoAppBarButton.propTypes = {
  path: PropTypes.string,
  text: PropTypes.string
};

export default function DemoAppBar() {
  const navigate = useNavigate();

  return (
    <AppBar position="sticky" sx={{ background: "#092E20"}}>
      <Toolbar>
        <Typography 
          variant="h5"
          onClick={() => navigate("/")} 
          sx={{ 
            color: "#F1FFF8", 
            flexGrow: 1,
            cursor: "pointer"
          }}
        >
          Tango with Django
        </Typography>
        <Row gap={2}>
          <DemoAppBarButton path="/" text="Home"/>
          <DemoAppBarButton path="/tasks" text="Tasks"/>
        </Row>
      </Toolbar>
    </AppBar>
  );
}