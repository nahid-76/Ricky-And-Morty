import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Grid from "@mui/material/Grid";
import Link from "next/link";
import styles from "@/components/listFilterPage/list.module.scss";
interface Props {
  list;
  cardLink: string;
}
const CardList: React.FC<Props> = ({ list, cardLink }) => {
  return (
    <Grid
      container
      spacing={{ xs: 2, md: 3 }}
      columns={{ xs: 4, sm: 8, md: 12 }}
    >
      {list?.map((item) => (
        <Grid item xs={2} sm={4} md={4} key={item.id}>
          <Link href={`${cardLink}s/${item.id}`}>
            <Card key={item.id} sx={{ maxWidth: 345 }}>
              <CardActionArea>
                {item.image && (
                  <CardMedia
                    component="img"
                    height="auto"
                    image={item.image}
                    alt="green iguana"
                  />
                )}

                <CardContent>
                  <Typography
                    className={styles["card-content"]}
                    gutterBottom
                    variant="h5"
                    component="div"
                  >
                    {item.name}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Link>
        </Grid>
      ))}
    </Grid>
  );
};
export default CardList;
