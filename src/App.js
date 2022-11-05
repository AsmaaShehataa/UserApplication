import { Routes, Route } from "react-router-dom";
import Layout from "./components/Header";
import Users from "./features/users/Users";
import Create from './features/users/Create'; 


function App() {
  return (
    <Layout>
      <Routes>
      <Route path="/" element={<Users/>}/>
      <Route path="/users/create" element={<Create/>}/>
      </Routes>
    </Layout>
  );
}

export default App;
