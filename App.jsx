import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Layout from './components/Layout';
import TaskManager from './components/ApiData';

function App(){
    return (
        <BrowserRouter>
        <layout>
            <Routes>
                <Route path="/" element={<TaskManager />} />
                <Route path="/api" element={<ApiData />} />
            </Routes>
        </layout>
        </BrowserRouter>
    );
}
export default App;