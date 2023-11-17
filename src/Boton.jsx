import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import BrightnessHighIcon from '@mui/icons-material/BrightnessHigh';
import './style/Boton.css';

export default function Boton({ buttonText, buttonText2 }) {
  return (
    <div className="botonxd">
      <Stack spacing={2} direction="row">
        <Button variant="contained">
          <BrightnessHighIcon />    {buttonText} mW/cm^2
        </Button>
        <Button variant="outlined">
          {buttonText2} Panamá, David
        </Button>
      </Stack>
    </div>
  );
}
