import './App.css';
import Main from './Components/main';
import Error from './Components/error';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Artists from './Components/artists';
import ArtistDetail from './Components/artistDetails';

function App() {
  return (
    <div className="App">
            <BrowserRouter>
              <Routes>
                  <Route path="/" element={<Main />} />
                  <Route path="/artists" element={<Artists />} />
                  <Route path="/artist/:id" element={<ArtistDetail/>} />
                  <Route path='*' element={<Error/>}/>
              </Routes>
            </BrowserRouter>
    </div>
  );
}

export default App;
