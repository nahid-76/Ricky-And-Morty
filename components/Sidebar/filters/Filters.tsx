import React, { FormEvent, useEffect, useState } from "react";
import { fetchPullCharacters } from "@/redux/slices/charactersSlice";
import { fetchPullEpisodes } from "@/redux/slices/episodesSlice";
import { fetchPullLocations } from "@/redux/slices/locationsSlice";
import { useAppDispatch } from "@/redux/store";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import FormGroup from "@mui/material/FormGroup";
import styles from "@/components/Sidebar/Filters/filter.module.scss";

export const Locations_filter = () => {
  const [name, setName] = useState("");
  const [type, setType] = useState("");

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchPullLocations());
  }, []);

  let url =
    "https://rickandmortyapi.com/api/location/?" +
    ("name=" + name) +
    ("&type=" + type);

  return (
    <div className="filter filter-location">
      <div className="filter__name">
        <label>Name</label>
        <input
          placeholder="name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        ></input>
      </div>
      <div className="filter__type">
        <label>Type</label>
        <select
          onChange={(e) => {
            setType(e.target.value);
          }}
        >
          <option value="">Not Matter</option>
          <option value="planet">Planet</option>
          <option value="space">Space Station</option>
          <option value="microverse">Microverse</option>
          <option value="dream">Dream</option>
          <option value="fantasy">Fantasy</option>
          <option value="cluster">Cluster</option>
          <option value="tv">TV</option>
          <option value="resort">Resort</option>
          <option value="artificially">Artificially Generated World</option>
          <option value="nigthmare">Nightmare</option>
          <option value="country">Country</option>
          <option value="hell">Hell</option>
          <option value="elemental">Elemental Rings</option>
          <option value="human">Human</option>
          <option value="asteroid">Asteroid</option>
          <option value="spacecraft">Spacecraft</option>
          <option value="consciousness">Consciousness</option>
        </select>
      </div>

      {/* <button
        onClick={() => {
          dispatch(fetchPullLocations(url));
        }}
        className="filter__find"
      >
        FIND
      </button> */}
    </div>
  );
};

export const Episodes_filter = () => {
  const [name, setName] = useState("");
  const [season, setSeason] = useState("");

  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchPullEpisodes());
  }, []);

  let url =
    "https://rickandmortyapi.com/api/episode/?" +
    ("name=" + name) +
    ("&episode=" + season);

  return (
    <div className="filter filter-episode">
      <div className="filter__name">
        <label>Name</label>
        <input
          placeholder="name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        ></input>
      </div>
      <div className="filter__season">
        <label>Season</label>
        <select
          onChange={(e) => {
            setSeason(e.target.value);
          }}
        >
          ]<option value="">Not Matter</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
      </div>
      {/* <button
        onClick={() => {
          dispatch(fetchPullEpisodes(url));
        }}
        className="filter__find"
      >
        FIND
      </button> */}
    </div>
  );
};
