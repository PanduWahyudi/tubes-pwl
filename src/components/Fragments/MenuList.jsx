import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import Category from "../Fragments/Menu Admin/Category";
import Product from "../Fragments/Menu Admin/Product";
import Item from "../Fragments/Menu Admin/Item";
import IncomingGoods from "../Fragments/Menu Admin/IncomingGoods";
import ExitItems from "../Fragments/Menu Admin/ExitItems";
import Rack from "../Fragments/Menu Admin/Rack";
import UserManagement from "../Fragments/Menu Admin/UserManagement";
import User from "../Fragments/Menu Admin/User";
import Role from "../Fragments/Menu Admin/Role";

function MenuList() {
  const location = useLocation();

  // const isProdukItemActive = location.pathname === "/produk/item";
  return (
    <div className="px-0">
      <ul>
        <li
          className={` hover:bg-white hover:shadow-md hover:rounded w-full py-1 ${
            location.pathname.startsWith("/item") ||
            location.pathname === "/produk/item/tambah-produk" ||
            location.pathname === "/produk/edit/edit-produk" ||
            location.pathname === "/produk/kategori" ||
            location.pathname === "/produk/kategori/tambah-kategori" ||
            location.pathname === "/produk/kategori/edit-kategori"
              ? "bg-white shadow-md rounded w-full py-1 "
              : ""
          }`}
        >
          <NavLink to="/item">
            <Product />
          </NavLink>
        </li>
        <li
          className={`ml-8 hover:bg-white hover:shadow-md hover:rounded w-full py-1 ${
            location.pathname === "/item"
              ? "bg-white shadow-md rounded w-full ml-8 py-1"
              : ""
          }`}
        >
          <NavLink to="/item">
            <Item />
          </NavLink>
        </li>
        <li
          className={`ml-8 hover:bg-white hover:shadow-md hover:rounded w-full py-1 ${
            location.pathname.startsWith("/produk/kategori") ||
            location.pathname === "/produk/tambah-kategori" ||
            location.pathname === "/produk/edit-kategori"
              ? "bg-white shadow-md rounded w-full py-1 ml-8"
              : ""
          }`}
        >
          <NavLink to="/produk/kategori">
            <Category />
          </NavLink>
        </li>

        <li
          className={`hover:bg-white hover:shadow-md hover:rounded w-full py-1 ${
            location.pathname.startsWith("/barang-masuk") ||
            location.pathname === "/barang-masuk/tambah-barang-masuk" ||
            location.pathname === "/barang-masuk/edit-barang-masuk"
              ? "bg-white shadow-md rounded w-full py-1"
              : ""
          }`}
        >
          <NavLink to="/barang-masuk">
            <IncomingGoods />
          </NavLink>
        </li>
        <li
          className={`hover:bg-white hover:shadow-md hover:rounded w-full py-1 ${
            location.pathname.startsWith("/barang-keluar") ||
            location.pathname === "/barang-keluar/tambah-barang-keluar" ||
            location.pathname === "/barang-keluar/edit-barang-keluar"
              ? "bg-white shadow-md rounded w-full py-1"
              : ""
          }`}
        >
          <NavLink to="/barang-keluar">
            <ExitItems />
          </NavLink>
        </li>
        <li
          className={`hover:bg-white hover:shadow-md hover:rounded w-full py-1 ${
            location.pathname.startsWith("/rack") ||
            location.pathname === "/rack/tambah-rack" ||
            location.pathname === "/rack/item-rack" ||
            location.pathname === "/rack/edit-rack"
              ? "bg-white shadow-md rounded w-full py-1"
              : ""
          }`}
        >
          <NavLink to="/rack">
            <Rack />
          </NavLink>
        </li>
        <li
          className={` hover:bg-white hover:shadow-md hover:rounded w-full py-1 ${
            location.pathname.startsWith("/pengguna") ||
            location.pathname === "/pengguna/tambah-pengguna" ||
            location.pathname === "/pengguna/edit-pengguna" ||
            location.pathname === "/role" ||
            location.pathname === "/role/tambah-role" ||
            location.pathname === "/role/edit-role"
              ? "bg-white shadow-md rounded w-full py-1 "
              : ""
          }`}
        >
          <NavLink to="/pengguna">
            <UserManagement />
          </NavLink>
        </li>
        <li
          className={`ml-8 hover:bg-white hover:shadow-md hover:rounded w-full py-1 ${
            location.pathname.startsWith("/pengguna") ||
            location.pathname === "/pengguna/tambah-pengguna" ||
            location.pathname === "/pengguna/edit-pengguna"
              ? "bg-white shadow-md rounded w-full py-1 ml-8"
              : ""
          }`}
        >
          <NavLink to="/pengguna">
            <User />
          </NavLink>
        </li>
        <li
          className={`ml-8 hover:bg-white hover:shadow-md hover:rounded w-full py-1 ${
            location.pathname.startsWith("/role") ||
            location.pathname === "/role/tambah-role" ||
            location.pathname === "/role/edit-role"
              ? "bg-white shadow-md rounded w-full py-1 ml-8"
              : ""
          }`}
        >
          <NavLink to="/role">
            <Role />
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default MenuList;
