import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import TaskManager from './components/TaskManager';
import ApiData from './pages/ApiData';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<TaskManager />} />
            <Route path="/api" element={<ApiData />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </ThemeProvider>
  );
}
export default App;
