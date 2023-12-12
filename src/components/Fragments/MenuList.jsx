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
          <NavLink to="/tes">
            <Product />
          </NavLink>
        </li>
        <li className="ml-8 hover:bg-white hover:shadow-md hover:rounded w-full py-1">
          <NavLink>
            <Item />
          </NavLink>
        </li>
        <li className="ml-8 hover:bg-white hover:shadow-md hover:rounded w-full py-1">
          <NavLink>
            <Category />
          </NavLink>
        </li>
        <li className="hover:bg-white hover:shadow-md hover:rounded w-full py-1">
          <NavLink>
            <IncomingGoods />
          </NavLink>
        </li>
        <li className="hover:bg-white hover:shadow-md hover:rounded w-full py-1">
          <NavLink>
            <ExitItems />
          </NavLink>
        </li>
        <li className="hover:bg-white hover:shadow-md hover:rounded w-full py-1">
          <NavLink>
            <Rack />
          </NavLink>
        </li>
        <li className="hover:bg-white hover:shadow-md hover:rounded w-full py-1">
          <NavLink>
            <UserManagement />
          </NavLink>
        </li>
        <li className="ml-8 hover:bg-white hover:shadow-md hover:rounded w-full py-1">
          <NavLink>
            <User />
          </NavLink>
        </li>
        <li className="ml-8 hover:bg-white hover:shadow-md hover:rounded w-full py-1">
          <NavLink>
            <Role />
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default MenuList;
