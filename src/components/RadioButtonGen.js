import {
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  Grid,
} from "@mui/material";

const RadioButtonGen = ({ onChange }) => {
  return (
    <Grid item xs={12}>
      <FormControl onChange={onChange}>
        <FormLabel>Générations</FormLabel>
        <RadioGroup row name="row-radio-buttons-group">
          <FormControlLabel value="?limit=151" control={<Radio />} label="1" />
          <FormControlLabel
            value="?limit=100&offset=151"
            control={<Radio />}
            label="2"
          />
          <FormControlLabel
            value="?limit=135&offset=251"
            control={<Radio />}
            label="3"
          />
          <FormControlLabel
            value="?limit=107&offset=386"
            control={<Radio />}
            label="4"
          />
          <FormControlLabel
            value="?limit=156&offset=493"
            control={<Radio />}
            label="5"
          />
          <FormControlLabel
            value="?limit=72&offset=649"
            control={<Radio />}
            label="6"
          />
          <FormControlLabel
            value="?limit=88&offset=721"
            control={<Radio />}
            label="7"
          />
          <FormControlLabel
            value="?limit=89&offset=809"
            control={<Radio />}
            label="8"
          />
        </RadioGroup>
      </FormControl>
    </Grid>
  );
};

export default RadioButtonGen;
