import React, { useState, useEffect } from "react";
import { fetchPullEpisodes } from "@/redux/slices/episodesSlice";
import TextField from "@mui/material/TextField";
import { useAppDispatch } from "@/redux/store";
import { EpisodeData } from "@/components/Sidebar/filters/types";
import { EPISODE_BASE_URL } from "@/urls/baseURLs";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";

const FilterLocations: React.FC = () => {
  const dispatch = useAppDispatch();

  const [filterData, setFilterData] = useState<EpisodeData>({
    name: "",
    episode: "",
  });
  const [url, setUrl] = useState<string>("");

  useEffect(() => {
    let url =
      `${EPISODE_BASE_URL}/?` +
      ("name=" + filterData.name) +
      ("&episode=" + filterData.episode);
    setUrl(url);
  }, [filterData]);

  const handleChange = (event: { target: { name: any; value: string } }) => {
    setFilterData({
      ...filterData,
      [event.target.name]: event.target.value as string,
    });
  };

  const submitHandler = () => {
    dispatch(fetchPullEpisodes(url));
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
          <TextField
            fullWidth
            value={filterData.episode}
            onChange={handleChange}
            name="episode"
            label="episode"
            variant="outlined"
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
