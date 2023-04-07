import Header from "@/components/layout/header/header";
import Container from "@mui/material/Container";
import styles from "@/components/layout/withHeaderLayout/styles.module.scss";
type Props = {
  children?: JSX.Element;
};
const WithHeaderLayout: React.FC<Props> = ({ children }) => {
  return (
    <div className={styles.container}>
      <Header />
      <Container fixed>
        <main className={styles.main}>{children}</main>
      </Container>
    </div>
  );
};
export default WithHeaderLayout;
