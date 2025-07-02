import Navbar from './Navbar';
import Footer from './Footer';

<<<<<<< HEAD
function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main className="p-4">{children}</main>
      <Footer />
    </>
  );
}
export default Layout;
=======
function Layout({children }) {
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-grow container mx-auto p-4">{children}</main>
            <footer />
        </div>
    );
}
export default Layout;
>>>>>>> 747a97dc626f52151b859af3011a0cbbbf7d0fb0
