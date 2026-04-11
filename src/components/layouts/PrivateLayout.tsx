import { Outlet } from 'react-router';

import Footer from '@/components/layouts/Footer';
import Navbar from '@/components/layouts/Navbar';

const PrivateLayout = () => (
  <div className="min-h-screen flex flex-col">
    {/* navbar */}
    <Navbar />

    <main className="flex-grow container mx-auto p-4">
      {/* child routes render here */}
      <Outlet />
    </main>

    <Footer />
  </div>
);

export default PrivateLayout;
