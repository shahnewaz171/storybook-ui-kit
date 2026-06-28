import { Outlet } from 'react-router';

import Footer from '@/components/layouts/Footer';

const PublicLayout = () => (
  <div className="min-h-screen flex flex-col bg-background text-foreground">
    <header className="bg-primary text-primary-foreground p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">React 19 Boilerplate</h1>
      </div>
    </header>

    <main className="grow container mx-auto p-4">
      {/* child routes render here */}
      <Outlet />
    </main>

    <Footer />
  </div>
);

export default PublicLayout;
