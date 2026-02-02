import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import TenantDashboard from "./pages/TenantDashboard";
import Subscription from "./pages/Subscription";
import AddProduct from "./pages/AddProduct";
import UserDashboard from "./pages/UserDashboard";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/tenant" element={<TenantDashboard />} />
        <Route path="/subscription" element={<Subscription />} />
        <Route path="/add-product" element={<AddProduct />} />
        <Route path="/user" element={<UserDashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
