import RecipeReviewCard from "../components/RecipeReviewCard";
import cards from "../components/CardInfo";
import ContactForm from "../components/ContactForm";
import ActionCard from "../components/card";
import ActionCard1 from "../components/card1";
import { Box, Container } from "@mui/material";
import Grid from "@mui/material/Grid";

export default function mainpage() {
  return (
    <>
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


      <Box sx={{ display: "flex", justifyContent: "center", gap: 4, pt: 4 }}>
        <ActionCard />
        <ActionCard1 />
      </Box>
    </>
  );
}
