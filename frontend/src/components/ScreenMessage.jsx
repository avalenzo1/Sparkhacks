import PropTypes from "prop-types";
import { Box, Typography } from "@mui/material";

export default function ScreenMessage({message}) {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "60vh", 
        width: "100vw", 
      }}
    >
      <Typography variant="body1">{message}</Typography>
    </Box>
  );
}

ScreenMessage.propTypes = {
  message: PropTypes.string.isRequired
};