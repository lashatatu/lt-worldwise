import styles from './Sidebar.module.css';
import Logo from './Logo.jsx';
import AppNav from './AppNav.jsx';
import Footer from './Footer.jsx';

const SideBar = () => {
  return (
    <div className={styles.sidebar}>
      <Logo />
      <AppNav />

      <p>List of cities</p>
      <Footer />
    </div>
  );
};

export default SideBar;
