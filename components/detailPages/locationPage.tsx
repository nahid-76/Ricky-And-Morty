import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { fetchLocation } from "@/redux/slices/locationsSlice";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import WithHeaderLayout from "@/components/layout/withHeaderLayout/withHeaderLayout";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import CardList from "@/components/listFilterPage/cardList";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import { formatDate } from "@/utils/formatDate";
const CharacterPage = () => {
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState<boolean>(true);
  const router = useRouter();
  const { query } = router;

  const el = useAppSelector((state) => state.locationsSlice.active);

  useEffect(() => {
    dispatch(fetchLocation(query?.id)).then(() => setLoading(false));
  }, [query]);

  return (
    <WithHeaderLayout>
      {!loading ? (
        <Grid container spacing={{ xs: 2, md: 3 }}>
          <Grid item xs={12} md={8}>
            <div>
              <Typography variant="h2" gutterBottom>
                {el?.name}
              </Typography>
              <Typography variant="h5" gutterBottom>
                Type : {el?.type}
              </Typography>
              <Typography variant="h5" gutterBottom>
                Dimention : {el?.dimention}
              </Typography>
              <Typography variant="h5" gutterBottom>
                Created : {formatDate(el?.created)}
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} md={12}>
            <div className="element-page__episodes">
              <Box display="flex" justifyContent="center">
                <Typography variant="h2" gutterBottom>
                  residents
                </Typography>
              </Box>
              <CardList cardLink={`/character`} list={el?.residents} />
            </div>
          </Grid>
        </Grid>
      ) : (
        <Box display="flex" justifyContent="center">
          <CircularProgress />
        </Box>
      )}
    </WithHeaderLayout>
  );
};

export default CharacterPage;
