import Header from "@/components/layout/header/header";
import styles from "@/components/layout/withHeaderLayout/styles.module.scss";
import Container from "@mui/material/Container";
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
