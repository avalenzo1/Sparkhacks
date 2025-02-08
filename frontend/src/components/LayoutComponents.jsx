import PropTypes from "prop-types";
import { Box } from "@mui/material";
import Grid from "@mui/material/Grid2";

export function Column({width = undefined, gap = 0, children = null}) {
  return (
    <Box sx={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      width: width,
      gap: gap
    }}>
      {children}
    </Box>
  );
}

Column.propTypes = {
  width: PropTypes.string,
  gap: PropTypes.number,
  children: PropTypes.node
};

export function Row({gap = 0, children = null}) {
  return (
    <Box sx={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      gap: gap
    }}>
      {children}
    </Box>
  );
}

Row.propTypes = {
  gap: PropTypes.number,
  children: PropTypes.node
};

export function ResponsiveContainer({gap = 0, children = null}) {
  return (
    <Grid
      container
      spacing={gap}
      sx={{
        justifyContent: "center", 
        alignItems: "center"
      }}
    >
      {children}
    </Grid>
  );
};

ResponsiveContainer.propTypes = {
  gap: PropTypes.number,
  children: PropTypes.node
};