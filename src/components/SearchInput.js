import { Grid, TextField } from "@mui/material";

const SearchInput = ({ onChange }) => {
  return (
    <Grid item xs={12}>
      <TextField
        id="outlined-basic"
        label="Recherche"
        variant="outlined"
        margin="normal"
        onChange={onChange}
        fullWidth
      />
    </Grid>
  );
};

export default SearchInput;
