import SideBar from '../Components/SideBar.jsx';
import styles from './AppLayout.module.css';
import Map from '../Components/Map.jsx';

const AppLayout = () => {
  return (
    <div className={styles.app}>
      <SideBar />
      <Map />
    </div>
  );
};

export default AppLayout;
