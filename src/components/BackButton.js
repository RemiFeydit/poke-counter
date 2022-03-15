import { Grid, Button } from "@mui/material";
import { Link } from "react-router-dom";

const BackButton = () => {
  return (
    <Grid item xs={12}>
      <Link to="/" style={{ textDecoration: "none", padding: 10 }}>
        <Button variant="contained" size="large">
          Back
        </Button>
      </Link>
    </Grid>
  );
};

export default BackButton;
