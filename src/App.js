import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ViewProducts } from "./Components/Main/ViewProducts";
import { AboutUs } from "./Components/Main/AboutUs";
import ViewDetail from "./Components/Main/ViewDetail";
import AddProduct from "./Components/Admin/AddProduct";
import SignUp from "./Components/Authentication/SignUp";
import Login from "./Components/Authentication/Login";
import OurServices from "./Components/Main/OurServices";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import StaticCards from "./Components/Miscellaneous/StaticCards";

function App() {
  const { t, i18n } = useTranslation();
  document.body.dir = i18n.dir();

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ViewProducts />} exact />
          <Route path="/addproduct" element={<AddProduct />} />
          <Route path="/viewdetail" element={<ViewDetail />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/ourservices" element={<OurServices />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/career" element={<StaticCards />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
