// import * as React from 'react';
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Paper from "@mui/material/Paper";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { MOCK_ACTIONS } from "../components/list";
import { Box, IconButton, Typography } from "@mui/material";
import React from "react";

export default function ActionsList() {
  const [likedItems, setLikedItems] = React.useState<{
    [key: string]: boolean;
  }>({});

  const handleLikeClick = (id: string) => {
    setLikedItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <Paper
      sx={{
        maxHeight: 740,
        display: "flex",
        flexDirection: "column",
        overflow: "auto",
        width: 350,
      }}
    >
      <List dense>
        {MOCK_ACTIONS.map((action) => (
          <ListItem
            key={action.id}
            divider
            sx={{
              py: 1,
              "&:hover": {
                backgroundColor: "action.hover",
                cursor: "pointer",
              },
              display: "flex",
              flexDirection: "column",
              alignItems: "stretch",
              backgroundColor: "#e4e2e2ff",
            }}
          >
            {/* Top row with name and heart */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                width: "100%",
                mb: 1,
              }}
            >
              <Typography variant="subtitle1" sx={{ fontWeight: "medium" }}>
                {action.name}
              </Typography>
              <IconButton
                onClick={(e) => {
                  e.stopPropagation();
                  handleLikeClick(action.id);
                }}
                sx={{
                  color: "#ff0000ff",
                  "&:hover": { color: "red" },
                  p: 0,
                  "&:focus": { outline: "none" },
                }}
              >
                {likedItems[action.id] ? (
                  <FavoriteIcon sx={{ fontSize: 20, color: "red" }} />
                ) : (
                  <FavoriteBorderIcon sx={{ fontSize: 20 }} />
                )}
              </IconButton>
            </Box>

            {/* Description taking full width */}
            <Typography
              variant="body2"
              sx={{
                width: "100%",
                wordBreak: "break-word",
                overflowWrap: "break-word",
              }}
            >
              {action.description}
            </Typography>
          </ListItem>
        ))}
      </List>
    </Paper>
  );
}
