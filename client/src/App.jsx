import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import AdminLogin from "./admin/AdminLogin";
import AdminDashBoard from "./admin/AdminDashBoard";
import AddProduct from "./admin/AddProduct";
import MyCart from "./pages/MyCart";
import CheckOut from "./pages/CheckOut";
import Registration from "./pages/Registration";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />} >
            <Route index element={<Home />} />
            <Route path="home" element={<Home />} />
            <Route path="admin" element={<AdminLogin />} />
            <Route path="mycart" element={<MyCart/>} />
            <Route path="checkout" element={<CheckOut/>} />
            <Route path="registration" element={<Registration/>} />
          </Route>
        </Routes>
        <Routes>
          <Route path="/dashboard" element={<AdminDashBoard />}>
            <Route path="addproduct" element={<AddProduct />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}
export default App;