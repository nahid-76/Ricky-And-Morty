import React, { FC, useEffect } from "react";
import { fetchPullCharacters } from "@/redux/slices/charactersSlice";
import { fetchPullEpisodes } from "@/redux/slices/episodesSlice";
import { fetchPullLocations } from "@/redux/slices/locationsSlice";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { ICharacter, ILocation } from "@/redux/types";
import Sidebar from "@/components/Sidebar/Sidebar";
import { DataTypes } from "@/types/types";
import WithHeaderLayout from "@/components/layout/withHeaderLayout/withHeaderLayout";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import "@/components/listFilterPage/list.module.scss";
import CardList from "@/components/listFilterPage/cardList";
import Pagination from "@mui/material/Pagination";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import { BASE_URL } from "@/urls/baseURLs";

interface Props {
  type: string;
}

const List: FC<Props> = ({ type }) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchPull());
  }, []);

  const listTypeID = Object.values(DataTypes).indexOf(type);

  const sidebarType = [
    DataTypes.character,
    DataTypes.location,
    DataTypes.episode,
  ][listTypeID];

  const listTitle = ["Characters", "Locations", "Episodes"][listTypeID];

  const fetchPull = [
    fetchPullCharacters,
    fetchPullLocations,
    fetchPullEpisodes,
  ][listTypeID];

  const state = useAppSelector((state) => {
    let slice;
    switch (listTypeID) {
      case 0: {
        slice = state.charactersSlice;
        break;
      }
      case 1: {
        slice = state.locationsSlice;
        break;
      }
      case 2: {
        slice = state.episodesSlice;
        break;
      }
    }
    return slice;
  });

  const pull = state?.results;
  const info = state?.info;

  const paginationChangeHandler = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    dispatch(fetchPull(`${BASE_URL}character/?page=${value}`));
  };

  return (
    <WithHeaderLayout>
      <Grid container spacing={{ xs: 2, md: 3 }}>
        <Grid item xs={12} md={3}>
          <Sidebar type={sidebarType} />
        </Grid>
        <Grid item xs={12} md={9}>
          <main>
            <Typography variant="h3" gutterBottom>
              {listTitle}
            </Typography>
            {pull?.length > 0 ? (
              <CardList cardLink={`/${type}`} list={pull} />
            ) : (
              <Box display="flex" justifyContent="center">
                <CircularProgress />
              </Box>
            )}
          </main>
        </Grid>
        <Grid display="flex" justifyContent="center" item xs={12}>
          <Pagination
            onChange={paginationChangeHandler}
            count={info?.count}
            variant="outlined"
            shape="rounded"
          />
        </Grid>
      </Grid>
    </WithHeaderLayout>
  );
};

export default List;
