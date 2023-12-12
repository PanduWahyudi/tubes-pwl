/* eslint-disable no-unused-vars */
import * as React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import LupaKataSandi from "./pages/lupaKataSandi";
import CreateAccount from "./pages/buatAkun";
import SendOtp from "./pages/kirimOtp";
import NewPassword from "./pages/buatPassword";
import Tes from "./pages/tes";
import ItemPages from "./pages/ItemPages";
import CreateItemPages from "./pages/CreateItemPages";
import EditItemPages from "./pages/EditItemPages";
import CategoryPages from "./pages/CategoryPages";
import AddCategoryPages from "./pages/AddCategoryPages";
import EditCategoryPages from "./pages/EditCategory";
import IncomingGoodsPages from "./pages/IncomingGoodsPages";
import AddIncomingGoodsPages from "./pages/AddIncomingGoodsPages";
import EditIncomingGoodPages from "./pages/EditIncomingGoodPages";
import ExitItemPages from "./pages/ExitItemPages";
import AddExitItemPages from "./pages/AddExitItemPages";
import EditExitItemPages from "./pages/EditExitItem";
import User from "./pages/User";
import AddUserPages from "./pages/AddUserPages";
import EditUserPages from "./pages/EditUserPages";
import RolePages from "./pages/RolePages";
import AddRolePages from "./pages/AddRolePages";
import EditRolePages from "./pages/EditRolePages";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/lupa-kata-sandi" element={<LupaKataSandi />} />
        <Route path="/buat-akun" element={<CreateAccount />} />
        <Route path="/kode-otp" element={<SendOtp />} />
        <Route path="/new-password" element={<NewPassword />} />
        <Route path="/tes" element={<Tes />} />
        <Route path="/item" element={<ItemPages />} />
        <Route
          path="/produk/item/tambah-produk"
          element={<CreateItemPages />}
        />
        <Route path="/produk/item/edit-produk" element={<EditItemPages />} />
        <Route path="/produk/kategori" element={<CategoryPages />} />
        <Route
          path="/produk/kategori/tambah-kategori"
          element={<AddCategoryPages />}
        />
        <Route
          path="/produk/kategori/edit-kategori"
          element={<EditCategoryPages />}
        />
        <Route path="/barang-masuk" element={<IncomingGoodsPages />} />
        <Route
          path="/barang-masuk/tambah-barang-masuk"
          element={<AddIncomingGoodsPages />}
        />
        <Route
          path="/barang-masuk/edit-barang-masuk"
          element={<EditIncomingGoodPages />}
        />
        <Route path="/barang-keluar" element={<ExitItemPages />} />
        <Route
          path="/barang-keluar/tambah-barang-keluar"
          element={<AddExitItemPages />}
        />
        <Route
          path="/barang-keluar/edit-barang-keluar"
          element={<EditExitItemPages />}
        />
        <Route path="/pengguna" element={<User />} />
        <Route path="/pengguna/tambah-pengguna" element={<AddUserPages />} />
        <Route path="/pengguna/edit-pengguna" element={<EditUserPages />} />
        <Route path="/role" element={<RolePages />} />
        <Route path="/role/tambah-role" element={<AddRolePages />} />
        <Route path="/role/edit-role" element={<EditRolePages />} />
      </Routes>
    </Router>
  );
};

export default App;
