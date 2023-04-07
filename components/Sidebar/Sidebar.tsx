import React, { FC } from "react";
import FilterCharacters from "@/components/Sidebar/filters/characters/filterCharacters";
import FilterLocations from "@/components/Sidebar/filters/locations/filterLocations";
import FilterEpisodes from "@/components/Sidebar/filters/episodes/filterEpisodes";
import { DataTypes } from "@/types/types";
import Typography from "@mui/material/Typography";
import { FILTER } from "@/messages/constantMessages";

interface IProps {
  type:
    | typeof DataTypes.character
    | typeof DataTypes.location
    | typeof DataTypes.episode
    | typeof DataTypes.elementpage;
}

const Sidebar: FC<IProps> = (props) => {
  const typeID = Object.values(DataTypes).indexOf(props.type);
  const Filter = [
    FilterCharacters,
    FilterLocations,
    FilterEpisodes,
    () => <></>,
    () => <></>,
  ][typeID];

  return (
    <>
      <Typography variant="h3" gutterBottom>
        {FILTER}
      </Typography>
      <Filter />
    </>
  );
};

export default Sidebar;
