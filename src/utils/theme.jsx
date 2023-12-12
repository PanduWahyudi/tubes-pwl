import React, { useState } from "react";
import {
  TextField,
  InputAdornment,
  IconButton,
  makeStyles,
} from "@material-ui/core";
import { Visibility, VisibilityOff } from "@material-ui/icons";

const useStyles = makeStyles(() => ({
  outlineInput: {
    "&.MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "red", // Sesuaikan dengan warna border yang diinginkan
      },
      "&:hover fieldset": {
        borderColor: "green", // Sesuaikan dengan warna border hover yang diinginkan
      },
      "&.Mui-focused fieldset": {
        borderColor: "blue", // Sesuaikan dengan warna border saat input difokuskan
      },
    },
  },
}));

const PasswordField = () => {
  const classes = useStyles();
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handlePasswordToggle = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  return (
    <TextField
      className={classes.outlineInput}
      variant="outlined"
      label="Password"
      type={showPassword ? "text" : "password"}
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton onClick={handlePasswordToggle} edge="end">
              {showPassword ? <Visibility /> : <VisibilityOff />}
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
};

export default PasswordField;
