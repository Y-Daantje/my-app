import * as React from "react";
import { Bolt } from "@mui/icons-material";
import {
  alpha,
  Box,
  Card,
  CardContent,
  IconButton,
  Stack,
  Typography,
  Rating,
} from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import SwapHorizIcon from "@mui/icons-material/SwapHoriz";

export default function ActionCard() {
  const [rating, setRating] = React.useState<number | null>(0);
  const [liked, setLiked] = React.useState(false);
  return (
    <Card
      sx={{
        position: "relative",
        backgroundColor: "background.default",
        width: 200, // 👈 make it a square
        height: 200,
        display: "flex",
        flexDirection: "column",
        borderRadius: 4,
        transition: "transform 150ms ease",
        ":active": {
          opacity: 0.5,
          transition: "opacity 100ms ease",
          transitionDelay: "100ms",
        },
        ":hover": {
          transform: "scale(1.05)",
          border: 1,
          borderColor: "primary.main",
        },
      }}
    >
      {/* background Bolt icon */}
      <Bolt
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          fontSize: 150, // bigger to fill the box
          color: alpha("#000", 0.08),
          pointerEvents: "none", // so clicks go through
        }}
      />

      <CardContent
        sx={{
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          py: 1,
          position: "relative",
        }}
      >
        {/* arow stays top-right */}
        <IconButton
          size="small"
          sx={{ position: "absolute", top: 8, right: 8 }}
        >
          <SwapHorizIcon />
        </IconButton>

        {/* Centered Favorite section */}
        <Box
          sx={{
            flexGrow: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography variant="body1" sx={{ fontWeight: 600, mb: 1 }}>
            Favorite
          </Typography>
          <IconButton
            onClick={() => setLiked(!liked)}
            sx={{
              color: "#ff0000ff",
              "&:hover": { color: "red" },
            }}
          >
            {liked ? (
              <FavoriteIcon sx={{ fontSize: 40, color:"red" }} />
            ) : (
              <FavoriteBorderIcon sx={{ fontSize: 40 }} />
            )}
          </IconButton>
        </Box>

        {/* Rating section at bottom */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            mt: 2,
          }}
        >
          <Typography variant="body1" sx={{ fontWeight: 600 }}>
            Rate
          </Typography>
          <Rating
          value={rating}
          onChange={(_event, newValue) => setRating(newValue)}
          />
        </Box>
      </CardContent>
    </Card>
  );
}
