import React, { useState, useEffect } from "react";
import { fetchPullCharacters } from "@/redux/slices/charactersSlice";
import TextField from "@mui/material/TextField";
import { useAppDispatch } from "@/redux/store";
import SelectFormControls from "@/components/Sidebar/filters/selectFormControls";
import { CharacterData } from "@/components/Sidebar/filters/types";
import { selectFormControlsData } from "@/components/Sidebar/filters/characters/data";
import { CHARACTER_BASE_URL } from "@/urls/baseURLs";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";

const FilterCharacters: React.FC = () => {
  const dispatch = useAppDispatch();

  const [filterData, setFilterData] = useState<CharacterData>({
    name: "",
    status: "",
    gender: "",
    species: "",
    type: "",
  });
  const [url, setUrl] = useState<string>("");

  useEffect(() => {
    let url =
      `${CHARACTER_BASE_URL}/?` +
      ("name=" + filterData.name) +
      ("&status=" + filterData.status) +
      ("&gender=" + filterData.gender) +
      ("&species=" + filterData.species) +
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
    dispatch(fetchPullCharacters(url));
  };

  return (
    <>
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
export default FilterCharacters;
