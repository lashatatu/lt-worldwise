import { Link } from "react-router-dom";
import PageNav from '../Components/PageNav.jsx';

const Home = () => {
  return (
    <div>
      <PageNav />

      <h1>World Wise</h1>
      <Link to={"/pricing"}>Pricing</Link>
    </div>
  );
};

export default Home;
