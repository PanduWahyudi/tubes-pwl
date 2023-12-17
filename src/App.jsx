/* eslint-disable no-unused-vars */
import * as React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import ForgetPassword from "./pages/lupaKataSandi";
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
import RackPages from "./pages/RackPages";
import AddRackPages from "./pages/AddRackPages";
import EditRackPages from "./pages/EditRackPages";
import RackItemPages from "./pages/RackItemPages";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/lupa-kata-sandi" element={<ForgetPassword />} />
        <Route path="/buat-akun" element={<CreateAccount />} />
        <Route path="/kode-otp" element={<SendOtp />} />
        <Route path="/kode-otp" element={<SendOtp />} />
        <Route path="/ubah-password" element={<NewPassword />} />
        <Route path="/tes" element={<Tes />} />
        <Route path="/item" element={<ItemPages />} />
        <Route
          path="/produk/item/tambah-produk"
          element={<CreateItemPages />}
        />
        <Route
          path="/produk/item/edit-produk/:id"
          element={<EditItemPages />}
        />
        <Route path="/produk/kategori" element={<CategoryPages />} />
        <Route
          path="/produk/kategori/tambah-kategori"
          element={<AddCategoryPages />}
        />
        <Route
          path="/produk/kategori/edit-kategori/:id"
          element={<EditCategoryPages />}
        />
        <Route path="/barang-masuk" element={<IncomingGoodsPages />} />
        <Route
          path="/barang-masuk/tambah-barang-masuk"
          element={<AddIncomingGoodsPages />}
        />
        <Route
          path="/barang-masuk/edit-barang-masuk/:id"
          element={<EditIncomingGoodPages />}
        />
        <Route path="/barang-keluar" element={<ExitItemPages />} />
        <Route
          path="/barang-keluar/tambah-barang-keluar"
          element={<AddExitItemPages />}
        />
        <Route
          path="/barang-keluar/edit-barang-keluar/:id"
          element={<EditExitItemPages />}
        />
        <Route path="/rack" element={<RackPages />} />
        <Route path="/rack/tambah-rack" element={<AddRackPages />} />
        <Route path="/rack/edit-rack/:id" element={<EditRackPages />} />
        <Route path="/rack/item-rack/:id" element={<RackItemPages />} />
        <Route path="/pengguna" element={<User />} />
        <Route path="/pengguna/tambah-pengguna" element={<AddUserPages />} />
        <Route path="/pengguna/edit-pengguna/:id" element={<EditUserPages />} />
        <Route path="/role" element={<RolePages />} />
        <Route path="/role/tambah-role" element={<AddRolePages />} />
        <Route path="/role/edit-role/:id" element={<EditRolePages />} />
      </Routes>
    </Router>
  );
};

export default App;
