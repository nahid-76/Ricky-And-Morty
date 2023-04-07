import React, { useState, useEffect } from "react";
import { fetchPullLocations } from "@/redux/slices/locationsSlice";
import TextField from "@mui/material/TextField";
import { useAppDispatch } from "@/redux/store";
import SelectFormControls from "@/components/Sidebar/filters/selectFormControls";
import { LocationData } from "@/components/Sidebar/filters/types";
import { selectFormControlsData } from "@/components/Sidebar/filters/locations/data";
import { LOCATION_BASE_URL } from "@/urls/baseURLs";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

const FilterLocations: React.FC = () => {
  const dispatch = useAppDispatch();

  const [filterData, setFilterData] = useState<LocationData>({
    name: "",
    dimension: "",
    type: "",
  });
  const [url, setUrl] = useState<string>("");

  useEffect(() => {
    let url =
      `${LOCATION_BASE_URL}/?` +
      ("name=" + filterData.name) +
      ("&dimension=" + filterData.dimension) +
      ("&type=" + filterData.type);
    setUrl(url);
  }, [filterData]);

  const handleChange = (event: { target: { name: any; value: string } }) => {
    setFilterData({
      ...filterData,
      [event.target.name]: event.target.value as string,
    });
  };

  const submitHandler = () => {
    dispatch(fetchPullLocations(url));
  };

  return (
    <>
      <Typography variant="h3" gutterBottom>
        Filter
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            fullWidth
            value={filterData.name}
            onChange={handleChange}
            name="name"
            label="name"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            value={filterData.dimension}
            onChange={handleChange}
            name="dimension"
            label="dimension"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12}>
          <SelectFormControls
            changeHandler={handleChange}
            itemData={selectFormControlsData}
            items={filterData}
          />
        </Grid>
        <Grid item xs={12}>
          <Button onClick={submitHandler} variant="outlined">
            Filter
          </Button>
        </Grid>
      </Grid>
    </>
  );
};
export default FilterLocations;
