import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Main/Home/Home";
import AdminPanel from "./pages/Main/AdminPanel/AdminPanel";
import MainEmployee from "./pages/Main/MainEmployees/MainEmployee";
import AdminEmployee from "./pages/Admin/Employees/AdminEmployee";
import MainLayout from "./layout/MainLayout";
import AdminLayout from "./layout/AdminLayout";
import AddEmployee from "./pages/Admin/AddEmployees/AddEmployee";
import AdminHome from "./pages/Admin/AdminHome/AdminHome";
import BasketPage from "./pages/Basket/BasketPage";
import MainProvider from "./context/MainProvider";

function App() {
  return (
    <>
      <MainProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MainLayout />}>
              <Route index element={<Home />} />
              <Route path="/mainemployee" element={<MainEmployee />} />
              <Route path="/basket" element={<BasketPage />} />
            </Route>
            <Route path="/admin" element={<AdminLayout />}>
              <Route index element={<AdminHome />} />
              <Route path="/admin/addemployee" element={<AddEmployee />} />
              <Route path="/admin/employee" element={<AdminEmployee />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </MainProvider>
    </>
  );
}

export default App;
