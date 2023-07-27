/* eslint-disable react/prop-types */
import { useState } from "react";
import { useTheme } from "@mui/material/styles";

export default function FontFamily({ updateFont, userFont }) {
  const [fontFamily, setFontFamily] = useState(userFont);
  const handleChange = (evt) => {
    const newFont = evt.target.value;
    setFontFamily(newFont);
    updateFont(newFont);
  };

  const theme = useTheme();
  return (
    <>
      <label
        htmlFor="font"
        style={{
          textAlign: "left",
          margin: "0 10px",
          fontSize: "14px",
          fontFamily: "Helvetica",
          color: theme.palette.text.settingsLabel,
        }}
      >
        Font:
      </label>
      <select
        id="font"
        value={fontFamily}
        name="font"
        onChange={handleChange}
        style={{
          width: "200px",
          color: theme.palette.text.primary,
          backgroundColor: theme.palette.background.default,
          fontFamily: "Helvetica",
          fontSize: "16px",
          border: "1px solid lightgrey",
          boxSizing: "border-box",
          margin: "15px auto",
          marginTop: "5px",
          padding: "5px",
          height: "40px",
          WebkitBoxSizing: "content - box " /* Safari/Chrome, other WebKit */,
          MozBoxSing: "content - box" /* Firefox, other Gecko */,
          boxSizing: "content - box" /* Opera/IE 8+ */,
        }}
      >
        <option value="Arial">Arial</option>
        <option value="Caveat">Caveat</option>
        <option valuQuicksande="Chakra Petch">Chakra Petch</option>
        <option value="Cinzel">Cinzel</option>
        <option value="Comfortaa">Comfortaa</option>
        <option value="Figtree">Figtree</option>
        <option value="Georgia">Georgia</option>
        <option value="Kanit">Kanit</option>
        <option value="Lato">Lato</option>
        <option value="Montserrat">Montserrat</option>
        <option value="Noto Serif, serif">Noto Serif</option>
        <option value="Nunito">Nunito</option>
        <option value="Open Sans">Open Sans</option>
        <option value="Oswald">Oswald</option>
        <option value="Poppins">Poppins</option>
        <option value="Quicksand">Quicksand</option>
        <option value="Raleway">Raleway</option>
        <option value="Roboto, sans-serif">Roboto</option>
        <option value="Times New Roman">Times New Roman</option>
        <option value="Ubuntu Mono, monospace">Ubuntu Mono</option>
        <option value="Verdana">Verdana</option>
      </select>
    </>
  );
}
