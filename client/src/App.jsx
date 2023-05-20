import "./App.css";
import {Routes, Route} from "react-router-dom"
import IndexPages from "./Pages/IndexPages";
import LoginPage from "./Pages/LoginPage";
import Layout from "./Layout";
import RegisterPage from "./Pages/RegisterPage";
import axios from "axios";
import { UserContextProvider } from "./UserContext";
import PlacePage from "./Pages/PlacePage";
import PlacesPage from "./Pages/PlacesPage";
import ProfilePage from "./Pages/profilePage";
import PlacesFormPage from "./Pages/PlacesFormPage";
import BookingsPage from "./Pages/BookingsPage";
import BookingPage from './Pages/BookingPage';
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
      <Route path="/account/places" element={<PlacesPage/>}/>
      <Route path="/account/places/new" element={<PlacesFormPage/>}/>
      <Route path="/account/places/:id" element={<PlacesFormPage/>}/>
      <Route path="/place/:id" element={<PlacePage/>}/>
      <Route path="/account/bookings" element={<BookingsPage />} />
      <Route path="/account/bookings/:id" element={<BookingPage />} />

    </Route>
    </Routes>
    </UserContextProvider>
  );
}

export default App;
