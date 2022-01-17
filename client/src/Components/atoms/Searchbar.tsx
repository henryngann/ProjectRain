import SearchIcon from "@mui/icons-material/Search";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import InputBase from "@mui/material/InputBase";
import Paper from "@mui/material/Paper";
import * as React from "react";
import useRandomImageApi from "../../Hooks/useRandomImageApi";

export default function SearchBar() {
  const { doCall } = useRandomImageApi();

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
