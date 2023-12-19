/* eslint-disable no-unused-vars */
import React from "react";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { axiosInstance } from "../../utils/AxiosInstance";
import CardAdmin from "../Elements/CardAdmin";
import AdminMenu from "../Fragments/AdminMenu";
import HeaderAdmin from "../Fragments/HeaderAdmin";

const AdminLayout = (props) => {
  const {state} = useLocation();
  const navigate = useNavigate();
  // eslint-disable-next-line react/prop-types
  useEffect(() => {
    const auth = async () => {
      if(!localStorage.getItem("token")){
        navigate("/");
      }
      await axiosInstance.get(`/api/v1/admin?id=${state.data.id}`, {
        headers: {
          "ngrok-skip-browser-warning": "69420",
        },
      }).then((res) => {
        if(localStorage.getItem("token") !== res.data.token){
          navigate("/");
        }
      })
    }
    auth();
  })

  const { children, titlePage } = props;
  return (
    <div className="bg-[#E48F45] p-[5px] h-screen">
      <div className="flex justify-between">
        <div className="w-1/5">
          <AdminMenu />
        </div>
        <CardAdmin>
          <HeaderAdmin />
          <p className="text-[32px] font-medium mt-6 mb-2">{titlePage}</p>
          {children}
        </CardAdmin>
      </div>
    </div>
  );
};

export default AdminLayout;
