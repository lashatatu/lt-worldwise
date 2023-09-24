import { Link } from "react-router-dom";
import PageNav from '../Components/PageNav.jsx';

const Home = () => {
  return (
    <div>
      <PageNav />

      <h1>World Wise</h1>
      <Link to={"/app"}>Go to the app</Link>
    </div>
  );
};

export default Home;
