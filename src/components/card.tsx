import * as React from "react";
import { Bolt, MoreVert } from "@mui/icons-material";
import {
  alpha,
  Box,
  Card,
  CardContent,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";

export default function ActionCard() {
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
          fontSize: 100, // bigger to fill the box
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
        }}
      >
        {/* Title + 3-dot button */}
        <Stack
          direction="row"
          sx={{ justifyContent: "space-between", alignItems: "center" }}
        >
          <Typography variant="body1" sx={{ fontWeight: 600 }}>
            Make my code better
          </Typography>
          <IconButton size="small">
            <MoreVert />
          </IconButton>
        </Stack>

        {/* Description */}
        <Box>
          <Typography
            variant="body2"
            sx={{
              color: "text.secondary",
              display: "-webkit-box",
              WebkitLineClamp: 3, // allow more lines in the box
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            Your code sucks and you know it. Let AI help you improve it.
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
}
