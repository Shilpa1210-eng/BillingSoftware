import Menubar from './components/Menubar/Menubar.jsx';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import Dashboard from './pages/Dashboard/Dashboard.jsx';
import Explore from './pages/Explore/Explore.jsx';
import ManageItems from './pages/ManageItems/ManageItems.jsx';
import ManageCategory from './pages/ManageCategory/ManageCategory.jsx';
import ManageUsers from './pages/ManageUsers/ManageUsers.jsx';
import OrderHistory from './pages/OrderHistory/OrderHistory.jsx';
import { Toaster } from 'react-hot-toast';
import Login from './pages/Login/Login.jsx';

const App = () => {
  const location = useLocation(); 
  return (
    <div>
      <div>
        {location.pathname !=="/login" && <Menubar />}
        <Toaster />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/explore" element={<Explore />} />
            <Route path="/items" element={<ManageItems />} />
            <Route path="/category" element={<ManageCategory />} />
            <Route path="/users" element={<ManageUsers />} />
            <Route path="/orders" element={<OrderHistory />} /> 
             <Route path="/login" element={<Login/>}/>
          </Routes>
        </div>
    </div>
  )
}

export default App
