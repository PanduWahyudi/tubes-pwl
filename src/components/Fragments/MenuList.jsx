import React from "react";
import { Link } from "react-router-dom";
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
          <Link>
            <Product />
          </Link>
        </li>
        <li className="ml-8 hover:bg-white hover:shadow-md hover:rounded w-full py-1">
          <Link>
            <Item />
          </Link>
        </li>
        <li className="ml-8 hover:bg-white hover:shadow-md hover:rounded w-full py-1">
          <Link>
            <Category />
          </Link>
        </li>
        <li className="hover:bg-white hover:shadow-md hover:rounded w-full py-1">
          <Link>
            <IncomingGoods />
          </Link>
        </li>
        <li className="hover:bg-white hover:shadow-md hover:rounded w-full py-1">
          <Link>
            <ExitItems />
          </Link>
        </li>
        <li className="hover:bg-white hover:shadow-md hover:rounded w-full py-1">
          <Link>
            <Rack />
          </Link>
        </li>
        <li className="hover:bg-white hover:shadow-md hover:rounded w-full py-1">
          <Link>
            <UserManagement />
          </Link>
        </li>
        <li className="ml-8 hover:bg-white hover:shadow-md hover:rounded w-full py-1">
          <Link>
            <User />
          </Link>
        </li>
        <li className="ml-8 hover:bg-white hover:shadow-md hover:rounded w-full py-1">
          <Link>
            <Role />
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default MenuList;
