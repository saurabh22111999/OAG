import "./App.css";
import {Routes, Route} from "react-router-dom"
import IndexPages from "./Pages/IndexPages";
import LoginPage from "./Pages/LoginPage";
import Layout from "./Layout";
import RegisterPage from "./Pages/RegisterPage";
import axios from "axios";
import { UserContextProvider } from "./UserContext";
import AccountPage from "./Pages/ProfilePage";
axios.defaults.baseURL='http://127.0.0.1:4000'
axios.defaults.withCredentials=true;
function App() {
  
  
  return (
    <UserContextProvider>
    <Routes>
    <Route path="/" element={<Layout/>}>
      <Route index element={<IndexPages/>}/>
      <Route path="/login" element={<LoginPage/>}/>
      <Route path="/register" element={<RegisterPage/>}/>
      <Route path="/account" element={<ProfilePage/>}/>
      <Route path="/account/:subpage/:action" element={<AccountPage/>}/>
      

    </Route>
    </Routes>
    </UserContextProvider>
  );
}

export default App;
