import React, { useState } from "react";
import Box from "@mui/material/Box";
import { Send } from "@mui/icons-material";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import {
  Button,
  Card,
  Container,
  TextField,
  Snackbar,
  Alert,
} from "@mui/material";

export default function ContactForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [open, setOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!firstName || !lastName || !email) {
      alert("Please fill in all required fields.");
      return;
    }

    //show snackbar
    setOpen(true);

    // Clear form fields
    setFirstName("");
    setLastName("");
    setEmail("");
    setMessage("");
  };

  return (
    <Container>
      <Card sx={{ p: 2, mt: 1, backgroundColor: "#dbdbdbff", borderRadius: 2 }}>
        <h2>Contact Us</h2>
        {/** Form with MUI components */}
        {/** TextField for first name, last name, email */}
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{ mt: 2, display: "flex", flexDirection: "column", gap: 2 }}
        >
          <Box sx={{ display: "flex", gap: 2 }}>
            <TextField
              fullWidth
              label="First Name"
              id="name"
              variant="standard"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              sx={{
                "& .MuiInputLabel-root": { color: "#000000ff" },
                "& .MuiInputBase-input": { color: "#000000" },
              }}
            />sad
            <TextField
              fullWidth
              id="lastname"
              label="Last Name"
              variant="standard"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              sx={{
                "& .MuiInputLabel-root": { color: "#000000ff" },
                "& .MuiInputBase-input": { color: "#000000" },
              }}
            />
          </Box>

          <TextField
            fullWidth
            label="E-mail"
            id="email"
            variant="standard"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            sx={{
              "& .MuiInputLabel-root": { color: "#000000ff" },
                "& .MuiInputBase-input": { color: "#000000" },
            }}
          />

          <Box sx={{ mt: 1 }}>
            <TextareaAutosize
              minRows={3}
              placeholder="Leave us a message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              style={{
                width: "100%",
                padding: 12,
                fontSize: 16,
                borderColor: "#000000ff",
                borderRadius: 4,
                background: "#ffffffff",
                color: "#212121",
                boxSizing: "border-box",
              }}
            />
          </Box>

          {/* ✅ Make it a submit button */}
          <Button
            type="submit"
            variant="contained"
            endIcon={<Send />}
            sx={{
              mt: 1,
              background:
                "linear-gradient(90deg,rgba(133,112,38,0.64) 0%, rgba(123,128,38,0.87) 49%, rgba(0,0,0,0.81) 100%)",
              "&:hover": { bgcolor: "#333" },
              alignSelf: "flex-start",
            }}
          >
            Send
          </Button>
        </Box>
      </Card>

      <Snackbar
        open={open}
        autoHideDuration={4000}
        onClose={() => setOpen(false)}
      >
        <Alert
          severity="success"
          onClose={() => setOpen(false)}
          sx={{ width: "100%" }}
        >
          {/* firstName is cleared after submit; fall back to "user" */}
          Thanks {firstName || "user"}, we received your message!
        </Alert>
      </Snackbar>
    </Container>
  );
}
