import { BrowserRouter, Route, Routes } from "react-router-dom";

import './App.css';
import Main from './components/main/main';
import Navbar from './components/navbar/navbar';
import Error from './components/error/error';
import StudentDetails from "./components/studentDetails/studentDetails";
function App() {
  return (
    <div>
                <BrowserRouter>
                     <div className="header">
                    <Navbar/>
                     </div>
                    <Routes>
                        <Route path="/" element={<Main/>}/>
                        <Route path="/studentDetails/:id" element={<StudentDetails student={{"name":"shehab","age":25}}/>}/>
                        <Route path="/profile" element={<StudentDetails student={{"name":"Ahmed","age":35}}/>}/>
                        <Route path="*" element={<Error/>}/>
                    </Routes>
                </BrowserRouter>
      
    </div>
  );
}

export default App;
