import { Grid } from "@mui/material";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <Grid
        container
        rowSpacing={3}
        columnSpacing={{ xs: 2, sm: 5, md: 10 }}
        sx={{ p: 3 }}
      >
        <Grid item xs={10}>
          <Link to={`/`} style={{ textDecoration: "none", color: "inherit" }}>
            <h1>
              PokeCounter <span>🔂</span>
            </h1>
          </Link>
        </Grid>
      </Grid>
    </div>
  );
};

export default Header;
