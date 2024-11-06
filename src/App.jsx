
import Nav from './components/Nav';
import HomeNormal from './pages/HomeNormal';
import Owner from './pages/Owner';
import HomeUser from './pages/HomeUser';
import HomeAdmin from './pages/HomeAdmin';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { MemberProvider } from './pages/Context';
function App() {
  return (
    <div>
      <BrowserRouter>
      <MemberProvider>
      <Nav />
      <Routes>
      <Route path="/" element={<HomeNormal />}/>
      <Route path="/owner" element={<Owner />}/>
      <Route path="/homeuser" element={<HomeUser/>}/>
      <Route path="/homeadmin" element={<HomeAdmin/>}/>
      </Routes>
      </MemberProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;


