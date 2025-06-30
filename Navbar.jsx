import {Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav className="bg-blue-600 text-white p-4 flex justify-between">
            <div className="font-bold">React App</div>
            <div className="space-x-4">
                <Link to="/">Task</Link>
                <Link to="/api">API Data</Link>
            </div>
        </nav>
    );
}
export default Navbar;