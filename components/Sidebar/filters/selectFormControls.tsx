import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Grid from "@mui/material/Grid";
import {
  CharacterData,
  LocationData,
  EpisodeData,
} from "@/components/Sidebar/filters/types";

type DataType = CharacterData | LocationData | EpisodeData;
interface Props {
  changeHandler: (e: SelectChangeEvent<any>) => void;
  itemData: any;
  items: any;
}

const SelectFormControls: React.FC<Props> = ({
  changeHandler,
  itemData,
  items,
}) => {
  return (
    <Grid container spacing={2}>
      {Object.keys(itemData).map((item) => {
        return (
          <Grid key={item} item xs={12}>
            <FormControl fullWidth>
              <InputLabel id="item">{item}</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={items[item]}
                label="Status"
                name={item}
                onChange={changeHandler}
              >
                {Object.keys(itemData[item]).map((key) => (
                  <MenuItem key={key} value={itemData[item][key]}>
                    {key}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
        );
      })}
    </Grid>
  );
};
export default SelectFormControls;
