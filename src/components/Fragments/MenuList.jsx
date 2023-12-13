import React from "react";
import { NavLink } from "react-router-dom";
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
  return (
    <div className="px-0">
      <ul>
        <li className="hover:bg-white hover:shadow-md hover:rounded w-full py-1">
          <NavLink to="/item">
            <Product />
          </NavLink>
        </li>
        <li className="ml-8 hover:bg-white hover:shadow-md hover:rounded w-full py-1">
          <NavLink to="/item">
            <Item />
          </NavLink>
        </li>
        <li className="ml-8 hover:bg-white hover:shadow-md hover:rounded w-full py-1">
          <NavLink to="/produk/kategori">
            <Category />
          </NavLink>
        </li>
        <li className="hover:bg-white hover:shadow-md hover:rounded w-full py-1">
          <NavLink to="/barang-masuk">
            <IncomingGoods />
          </NavLink>
        </li>
        <li className="hover:bg-white hover:shadow-md hover:rounded w-full py-1">
          <NavLink to="/barang-keluar">
            <ExitItems />
          </NavLink>
        </li>
        <li className="hover:bg-white hover:shadow-md hover:rounded w-full py-1">
          <NavLink to="rack">
            <Rack />
          </NavLink>
        </li>
        <li className="hover:bg-white hover:shadow-md hover:rounded w-full py-1">
          <NavLink to="/pengguna">
            <UserManagement />
          </NavLink>
        </li>
        <li className="ml-8 hover:bg-white hover:shadow-md hover:rounded w-full py-1">
          <NavLink to="/pengguna">
            <User />
          </NavLink>
        </li>
        <li className="ml-8 hover:bg-white hover:shadow-md hover:rounded w-full py-1">
          <NavLink to="/role">
            <Role />
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default MenuList;
