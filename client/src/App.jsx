import Menubar from './components/Menubar/Menubar.jsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard/Dashboard.jsx';
import Explore from './pages/Explore/Explore.jsx';
import ManageItems from './pages/ManageItems/ManageItems.jsx';
import ManageCategory from './pages/ManageCategory/ManageCategory.jsx';
import ManageUsers from './pages/ManageUsers/ManageUsers.jsx';

const App = () => {
  return (
    <>
      <div>
          <Menubar/>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/explore" element={<Explore />} />
            <Route path="/items" element={<ManageItems />} />
            <Route path="/category" element={<ManageCategory />} />
            <Route path="/users" element={<ManageUsers />} />
          </Routes>
        </div>
    </>
  )
}

export default App
