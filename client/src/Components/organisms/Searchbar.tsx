import SearchIcon from "@mui/icons-material/Search";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import InputBase from "@mui/material/InputBase";
import Paper from "@mui/material/Paper";
import * as React from "react";
import { ChangeEvent, useState } from "react";

export default function SearchBar() {
  const [name, setName] = useState("");

  const handleName = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleSubmit = (e: ChangeEvent<HTMLInputElement>) => {};

  return (
    <Paper
      component="form"
      sx={{ p: "2px 4px", display: "flex", alignItems: "center", width: 400 }}
    >
      <IconButton sx={{ p: "10px" }} aria-label="menu">
        <SearchIcon />
      </IconButton>
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search OSRS Items"
        inputProps={{ "aria-label": "Search OSRS Items" }}
        inputComponent={"input"}
        onChange={(e: ChangeEvent<HTMLInputElement>) => handleName(e)}
        onSubmit={handleSubmit}
      />

      <IconButton
        type="submit"
        sx={{ p: "10px" }}
        aria-label="search"
      ></IconButton>
      <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
    </Paper>
  );
}
