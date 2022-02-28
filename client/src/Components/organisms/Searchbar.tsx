import SearchIcon from "@mui/icons-material/Search";
import { Box } from "@mui/material";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import InputBase from "@mui/material/InputBase";
import Paper from "@mui/material/Paper";
import Toolbar from "@mui/material/Toolbar";
import * as React from "react";
import { ChangeEvent, useState } from "react";
import useItemHook from "../../Hooks/useItemHook";
import { Root } from "../../Hooks/useRandomImageApi";
import DetailedView from "../molecules/DetailedView";
import ItemCard from "../molecules/ItemCard";

export default function SearchBar() {
  const [name, setName] = useState<string | undefined>("");
  const [items, setItems] = useState<Root>();
  const { doCall, error } = useItemHook();

  const handleName = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const onSearchClick = () => {
    {
      name
        ? doCall(name).then((result: any) => setItems(result as Root))
        : console.log(`nothing`);
    }
  };

  /* REFACTOR NEEDED - Use OnSubmit instead of OnKeyDown */

  return (
    <>
      <Paper
        component="form"
        sx={{ p: "2px 4px", display: "flex", alignItems: "center", width: 400 }}
      >
        <IconButton
          sx={{ p: "10px" }}
          aria-label="menu"
          onClick={onSearchClick}
        >
          <SearchIcon />
        </IconButton>
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="Search OSRS Items"
          inputProps={{ "aria-label": "Search OSRS Items" }}
          inputComponent={"input"}
          onChange={(e: ChangeEvent<HTMLInputElement>) => handleName(e)}
          value={name}
          onKeyPress={(event) => {
            if (event.key === "Enter") {
              event.preventDefault();
              doCall(name).then((result: any) => setItems(result as Root));
            }
          }}
        />

        <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
      </Paper>
      <Toolbar />
      <Box display="flex" justifyContent="center">
        {items?._items[0] ? (
          <DetailedView
            image={items?._items[0].icon}
            itemName={items?._items[0].name}
            itemDesc={items?._items[0].examine}
            itemCost={items?._items[0].cost}
            lowAlch={items?._items[0].lowalch}
            highAlch={items?._items[0].highalch}
            itemUpdated={items?._items[0].last_updated}
            itemRelease={items?._items[0].release_date}
            wikiLink={items?._items[0].wiki_url}
            equipable={items?._items[0].equipable}
            stackable={items?._items[0].stackable}
            weight={items?._items[0].weight}
            notable={items?._items[0].noteable}
          />
        ) : (
          <>{name === "" ? `` : ``}</>
        )}
      </Box>
    </>
  );
}
