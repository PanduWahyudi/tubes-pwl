import * as React from "react";
import { useState } from "react";
import AdminLayout from "../components/Layouts/AdminLayout";
import DeleteButton from "../components/Elements/DeleteButton";
import EditButton from "../components/Elements/EditButton";
import ActionButton from "../components/Elements/ActionButton";
import InVisibleIcon from "../components/Elements/Icon/InvisibleIcon";
import VisibleIcon from "../components/Elements/Icon/VisibleIcon";
import Box from "@mui/material/Box";
import { InputAdornment, TextField } from "@mui/material";
import { outlinedInputClasses } from "@mui/material/OutlinedInput";
import { createTheme, ThemeProvider, useTheme } from "@mui/material/styles";

function Tes() {
  const tesClick = () => {
    console.log("Tes");
  };
  const customTheme = (outerTheme) =>
    createTheme({
      palette: {
        mode: outerTheme.palette.mode,
      },
      components: {
        MuiTextField: {
          styleOverrides: {
            root: {
              "--TextField-brandBorderColor": "#B2BAC2",
              "--TextField-brandBorderHoverColor": "#B2BAC2",
              "--TextField-brandBorderFocusedColor": "#B2BAC2",
              "& label.Mui-focused": {
                color: "var(--TextField-brandBorderFocusedColor)",
              },
            },
          },
        },
        MuiOutlinedInput: {
          styleOverrides: {
            notchedOutline: {
              borderColor: "var(--TextField-brandBorderColor)",
              borderRadius: "10px",
            },
            root: {
              [`&:hover .${outlinedInputClasses.notchedOutline}`]: {
                borderColor: "var(--TextField-brandBorderHoverColor)",
              },
              [`&.Mui-focused .${outlinedInputClasses.notchedOutline}`]: {
                borderColor: "var(--TextField-brandBorderFocusedColor)",
              },
            },
          },
        },
        MuiFilledInput: {
          styleOverrides: {
            root: {
              "&:before, &:after": {
                borderBottom: "2px solid var(--TextField-brandBorderColor)",
              },
              "&:hover:not(.Mui-disabled, .Mui-error):before": {
                borderBottom:
                  "2px solid var(--TextField-brandBorderHoverColor)",
              },
              "&.Mui-focused:after": {
                borderBottom:
                  "2px solid var(--TextField-brandBorderFocusedColor)",
              },
            },
          },
        },
        MuiInput: {
          styleOverrides: {
            root: {
              "&:before": {
                borderBottom: "2px solid var(--TextField-brandBorderColor)",
              },
              "&:hover:not(.Mui-disabled, .Mui-error):before": {
                borderBottom:
                  "2px solid var(--TextField-brandBorderHoverColor)",
              },
              "&.Mui-focused:after": {
                borderBottom:
                  "2px solid var(--TextField-brandBorderFocusedColor)",
              },
            },
          },
        },
      },
    });

  const [hide, setHide] = useState(true);

  const outerTheme = useTheme();

  return (
    <AdminLayout titlePage="Ini Halaman Testing">
      {/* <ActionButton
          type="button"
          onClick={tesClick}
          teks="Testing"
          lebar="px-10 "
        /> */}

      <div className="relative overflow-x-auto rounded-md mt-4 mb-6 ">
        <table className="w-full text-[18px] text-center rtl:text-right  ">
          <thead className=" uppercase  bg-[#F0F0F0]">
            <tr className="border-b-2 border-white  ">
              <th scope="col" className="p-[10px] font-medium">
                No
              </th>
              <th scope="col" className="p-[10px] font-medium">
                Nama Item
              </th>
              <th scope="col" className="p-[10px] font-medium">
                Tanggal Keluar
              </th>
              <th scope="col" className="p-[10px] font-medium">
                Supplier
              </th>
              <th scope="col" className="p-[10px]font-medium">
                Qty
              </th>
              <th scope="col" className="p-[10px] font-medium">
                Aksi
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className=" border-b-2 border-white bg-[#F0F0F0]  ">
              <td scope="row" className="px-6 py-4 ">
                1
              </td>
              <td className="px-6 py-4">Televisi</td>
              <td className="px-6 py-4">25/11/2023</td>
              <td className="px-6 py-4">1291ojuo</td>
              <td className="px-6 py-4">10</td>
              <td className="px-6 py-4 flex space-x-3 justify-center">
                <DeleteButton onClick={tesClick} />
                <EditButton onClick={tesClick} />
              </td>
            </tr>
            <tr className=" border-b-2 border-white bg-[#F0F0F0]  ">
              <td scope="row" className="px-6 py-4 ">
                1
              </td>
              <td className="px-6 py-4">Televisi</td>
              <td className="px-6 py-4">25/11/2023</td>
              <td className="px-6 py-4">1291ojuo</td>
              <td className="px-6 py-4">10</td>
              <td className="px-6 py-4 flex space-x-3 justify-center">
                <DeleteButton onClick={tesClick} />
                <EditButton onClick={tesClick} />
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <ThemeProvider theme={customTheme(outerTheme)}>
        <InputAdornment>
          <Box
            sx={{
              width: 400,
              maxWidth: "100%"
            }}
          >
            <TextField
              label="Outline"
              size="small"
              type={hide ? "password" : "text"}
              id="fullwidth"
              fullWidth
              InputProps={{
                endAdornment: (
                  <button onClick={() => setHide(!hide)}>
                    {hide ? <InVisibleIcon /> : <VisibleIcon />}
                  </button>
                ),
              }}
            />
          </Box>
          {/* Perbaikan sintaks pada bagian ini */}
        </InputAdornment>
      </ThemeProvider>
    </AdminLayout>
  );
}

export default Tes;
