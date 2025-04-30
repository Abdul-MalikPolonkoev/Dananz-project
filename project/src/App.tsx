import {Routes, Route} from 'react-router-dom'
import { AboutUsPage, ContactUsPage, HomePage, MinimalistRoomPage, OurTeamsPage, PortofolioPage, ServicesPage } from './App/pages';

function App() {
  return (
    <div className="App">
     <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/about' element={<AboutUsPage/>}/>
      <Route path='/services' element={<ServicesPage/>}/>
      <Route path='/ourteams' element={<OurTeamsPage/>}/>
      <Route path='/contactus' element={<ContactUsPage/>}/>
      <Route path='/portofolio' element={<PortofolioPage/>}/>
      <Route path='/minimalistroom' element={<MinimalistRoomPage/>}/>
     </Routes>
    </div>
  );
}

export default App;
