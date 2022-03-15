import React from "react";
import { Grid, Tabs, Tab, Divider } from "@mui/material";
import { Link } from "react-router-dom";
import "./Header.css"

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
      <Divider variant="middle" />
      <Tabs value={2} aria-label="nav tabs example">
        <Tab label="Home" to='/' component={Link} />
        <Tab label="My favorites" to='/favorites' component={Link} />
      </Tabs>
      <Divider variant="middle" />
    </div>
  );
};

export default Header;
