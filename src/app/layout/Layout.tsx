import { Outlet } from 'react-router-dom';

import Footer from '../../widgets/footer/Footer';
import Navbar from '../../widgets/navbar/Navbar';

export default function Layout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}
