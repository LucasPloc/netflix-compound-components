import { useContent } from "../../hooks";
import selectionFilter from "../../utils/selection-filter";
import BrowseContainer from "../../containers/Browse";

const Browse = ({ user }) => {
  const { series } = useContent("series");
  const { films } = useContent("films");

  const slides = selectionFilter(series, films);

  return <BrowseContainer slides={slides} user={user} />;
};

export default Browse;
