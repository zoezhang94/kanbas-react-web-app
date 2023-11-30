// import './App.css';
import Labs from './Labs';
import Kanbas from './Kanbas';
import HelloWorld from './Labs/a3/HelloWorld';
import { HashRouter } from 'react-router-dom';
import { Routes, Route, Navigate } from "react-router";
import 'bootstrap/dist/css/bootstrap.min.css';
import Project from './project';


function App() {

  return (
    <HashRouter>
      <div>
        <Routes>
          <Route path="/" element={<Navigate to="/project" />} />
          <Route path="/project/*" element={<Project />} />
          <Route path="/hello" element={<HelloWorld />} />
          <Route path="/labs/*" element={<Labs />} />
          <Route path="/kanbas/*" element={<Kanbas />} />
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
