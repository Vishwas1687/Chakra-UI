import {Link, NavLink,Routes,Route,BrowserRouter} from 'react-router-dom'
import Dashboard from './pages/Dashboard.jsx'
import RootLayout from './layouts/RootLayout.jsx'
import Create from './pages/Create.jsx'
import Profile from './pages/Profile.jsx'
function App() {


  return (
    <>
    <BrowserRouter>
       <Routes>

          <Route path="/" element={<RootLayout/>}>
            <Route index element={<Dashboard/>}/>
            <Route path="/profile" element={<Profile/>}/>
            <Route path="/create" element={<Create/>}/>
          </Route>

       </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
