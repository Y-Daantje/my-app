import "./App.css";
import { Container } from "@mui/material";
import Grid from "@mui/material/Grid";
import Navbar from "./components/Navbar";
import RecipeReviewCard from "./components/RecipeReviewCard";
import cards from "./components/CardInfo";
import ContactForm from "./components/ContactForm";

export default function App() {
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
    </>
  );
}
