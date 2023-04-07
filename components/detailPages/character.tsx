import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { fetchCharacter } from "@/redux/slices/charactersSlice";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { IEpisode } from "@/redux/types";
import Image from "next/image";
import WithHeaderLayout from "@/components/layout/withHeaderLayout/withHeaderLayout";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import styles from "@/styles/global.module.scss";
import CardList from "@/components/listFilterPage/cardList";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import { formatDate } from "@/utils/formatDate";
const CharacterPage = () => {
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState<boolean>(true);
  const router = useRouter();
  const { query } = router;

  const el = useAppSelector((state) => state.charactersSlice.active);

  useEffect(() => {
    dispatch(fetchCharacter(query?.id)).then(() => setLoading(false));
  }, [query]);

  return (
    <WithHeaderLayout>
      {!loading ? (
        <Grid container spacing={{ xs: 2, md: 3 }}>
          <Grid item xs={12} md={4}>
            <div className={styles["image-container"]}>
              <Image
                src={el?.image}
                loader={() => el?.image}
                layout="fill"
                className={styles["image"]}
                alt="character image"
              />
            </div>
          </Grid>
          <Grid item xs={12} md={8}>
            <div>
              <Typography variant="h2" gutterBottom>
                {el?.name}
              </Typography>
              <Typography variant="h5" gutterBottom>
                Status: {el?.status}
              </Typography>
              <Typography variant="h5" gutterBottom>
                Species: {el?.species}
              </Typography>
              <Typography variant="h5" gutterBottom>
                Type: {el?.type}
              </Typography>
              <Typography variant="h5" gutterBottom>
                Gender: {el?.gender}
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
                  Episodes
                </Typography>
              </Box>
              <CardList cardLink={`/episode`} list={el?.episode} />
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
