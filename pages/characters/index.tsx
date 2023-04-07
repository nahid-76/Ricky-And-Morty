import List from "@/components/listFilterPage/index";
import { DataTypes } from "@/types/types";
const Characters: React.FC = () => {
  return <List type={DataTypes.characters} />;
};
export default Characters;
