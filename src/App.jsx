import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import TaskManager from './components/TaskManager';
// Import other pages/components as needed

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<TaskManager />} />
          {/* Add more routes here if you have more pages */}
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;

