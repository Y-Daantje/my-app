import "./App.css";
import { Box, Card, Container } from "@mui/material";
import Grid from "@mui/material/Grid";
import Navbar from "./components/Navbar";
import RecipeReviewCard from "./components/RecipeReviewCard";
import cards from "./components/CardInfo";
import ContactForm from "./components/ContactForm";
import ActionCard from "./components/card";
import ActionCard1 from "./components/card1";

import { useState } from "react";
import { useSpring, a } from "@react-spring/web";
import styles from "./styles.module.css";

export default function App() {
  const [flipped, set] = useState(false);
  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateY(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 },
  });

  return (
    <>
      <Navbar />
      <Container maxWidth="lg" sx={{ mt: 4 }}>
        <Grid container spacing={3}>
          {cards.map((cards, i) => (
            <Grid key={i} size={{ xs: 12, sm: 6, md: 4 }}>
              <RecipeReviewCard {...cards} />
            </Grid>
          ))}
        </Grid>
      </Container>

      <ContactForm />

      <Box sx={{ display: "flex", justifyContent: "center", m: 16, p: 2 }}>
        <div
          className={styles.container}
          onClick={() => set((state) => !state)}
        >
          <a.div
            className={`${styles.c} ${styles.back}`}
            style={{ opacity: opacity.to((o) => 1 - o), transform }}
          />
          <a.div
            className={`${styles.c} ${styles.front}`}
            style={{
              opacity,
              transform,
              rotateX: "180deg",
            }}
          />
        </div>
      </Box>
      {/* cards for AI action */}
      <Box sx={{ display: "flex", justifyContent: "center", gap: 4 }}>
        <ActionCard />
        <ActionCard1 />
      </Box>
    </>
  );
}
