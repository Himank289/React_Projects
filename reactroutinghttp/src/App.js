import './App.css';
import AddEmp from './pages/AddEmp';
import ListEmp from './pages/ListEmp';
import Home from './pages/Home';
import Layout from './pages/Layout';
import NoPage from './pages/NoPage';
import { BrowserRouter, Routes, Route } from "react-router-dom";




function App() {

  return (
    <div>
       
   
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="addemp" element={<AddEmp />} />
          <Route path="listemp" element={<ListEmp />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
        
    </div>
  );
}

export default App;
