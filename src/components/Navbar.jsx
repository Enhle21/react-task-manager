import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-gray-800 text-white px-6 py-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">Task App</h1>
      <div className="space-x-4">
        <Link to="/">Home</Link>
        <Link to="/api">API</Link>
      </div>
    </nav>
  );
}
<<<<<<< HEAD
export default Navbar;
=======
export default Navbar;
>>>>>>> 747a97dc626f52151b859af3011a0cbbbf7d0fb0
