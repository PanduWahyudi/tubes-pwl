import React from "react";
import { useState } from "react";
import InvisibleIcon from "./Icon/InvisibleIcon";
import VisibleIcon from "./Icon/VisibleIcon";
import Box from "@mui/material/Box";
import { InputAdornment, TextField } from "@mui/material";
import { outlinedInputClasses } from "@mui/material/OutlinedInput";
import { createTheme, ThemeProvider, useTheme } from "@mui/material/styles";

function InputText({ label, width, margin }) {
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
    <div className={`${margin}`}>
      <ThemeProvider theme={customTheme(outerTheme)}>
        <InputAdornment>
          <Box
            sx={{
              width: { width },
              maxWidth: "100%",
            }}
          >
            <TextField
              label={label}
              size="small"
              type={hide ? "password" : "text"}
              id="fullwidth"
              fullWidth
              InputProps={{
                endAdornment: (
                  <button onClick={() => setHide(!hide)}>
                    {hide ? <InvisibleIcon /> : <VisibleIcon />}
                  </button>
                ),
              }}
            />
          </Box>
          {/* Perbaikan sintaks pada bagian ini */}
        </InputAdornment>
      </ThemeProvider>
    </div>
  );
}

export default InputText;
