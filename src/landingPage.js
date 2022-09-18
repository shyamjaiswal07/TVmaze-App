import React, { useState } from "react";
import "./App.css";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Container from "@mui/material/Container";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import Actor from "./component/Actor";
import Shows from "./component/Shows";
import NavBar from "./component/NavBar";

const CssTextField = styled(TextField)({
  "& label.Mui-focused": {
    color: "greeFn",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "green",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "red",
      
    },
    "&:hover fieldset": {
      borderColor: "yellow",
    },
    "&.Mui-focused fieldset": {
      borderColor: "green",
      
    },
  },
});

export default function LandingPage() {
  const [state, setState] = useState("");
  const [radioValue, setRadioValue] = useState("");
  const [handleInputBox, setHandleInputBox] = useState(false);
  const [handlePlaceHolder, setHandlePlaceHolder] = useState(
    "Search Your Favorite Actor"
  );
  const [alertMassage, setAlertMassage] = useState(
    <div className="errorMassage">*Please Click on Actor or Shows*</div>
  );
  const handleState = (e) => {
    e.preventDefault();
    setState(e.target.value);
  };
  // console.log(state);
  const handleRadio = (e) => {
    setRadioValue(e.target.value);
    if (e.target.value === "Actor") {
      setHandlePlaceHolder("Search Your Favorite Actor");
    } else {
      setHandlePlaceHolder("Search Your Favorite Shows");
    }
    setHandleInputBox(true);
    setAlertMassage("");
  };
  return (
    <>
      <NavBar />
      <Box className="box">
        <Container component="form" className="container">
          <div className="main-container">
            <div className="heading">
              <h2>Search your favourite Actor or Shows</h2>
            </div>
            <div className="radio_input_style">
              <FormControl onSubmit={handleState}>
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="row-radio-buttons-group"
                >
                  <FormControlLabel
                    value="Actor"
                    control={<Radio onChange={handleRadio} />}
                    label="Actor"
                  />
                  <FormControlLabel
                    value="Shows"
                    control={<Radio onChange={handleRadio} />}
                    label="Shows"
                  />
                </RadioGroup>
              </FormControl>
              <br />
              {handleInputBox ? (
                <CssTextField
                  style={{ width: 400 }}
                  label={handlePlaceHolder}
                  id="custom-css-outlined-input"
                  value={state}
                  onChange={handleState}
                  autoComplete="off"
                />
              ) : (
                ""
              )}
              {alertMassage}
            </div>
          </div>
        </Container>
      </Box>
      {radioValue === "Shows" ? (
        <Shows inpVal={state} />
      ) : (
        <Actor inpVal={state} />
      )}
    </>
  );
}
