/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import {
  Box,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  Grid,
  Container,
} from "@mui/material";
import { VolunteerActivism } from "@mui/icons-material";
import DonationModal from "./DonationModal";

const DonatePage = () => {
  const [open, setOpen] = useState(false);
  const [selectedAmount, setSelectedAmount] = useState(9000);

  // Dummy donation data instead of API call
  const donationOptions = [
    {
      label: "2 Months",
      image: "https://cdn.pixabay.com/photo/2016/03/18/15/21/help-1265227_1280.jpg",
      description: "Sponsor a child's education for 2 months.",
      amount: 3000,
    },
    {
      label: "6 Months",
      image: "https://cdn.pixabay.com/photo/2014/08/06/19/26/orphans-411949_1280.jpg",
      description: "Support a child's education for 6 months.",
      amount: 9000,
    },
    {
      label: "12 Months",
      image: "https://cdn.pixabay.com/photo/2021/04/24/00/45/belief-6202980_1280.jpg",
      description: "Fund a child's education for a full year.",
      amount: 18000,
    },
  ];

  const handleOpenModal = (amount) => {
    setSelectedAmount(amount);
    setOpen(true);
  };

  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "100vh",
        background: "linear-gradient(135deg, #E63946 30%, #F4A261 100%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        py: { xs: 6, md: 8 }, // Adjust padding for mobile
        px: { xs: 2, md: 4 },
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h4"
          sx={{
            textAlign: "center",
            color: "#FFFFFF",
            fontWeight: "bold",
            mb: { xs: 4, md: 5 },
            textShadow: "3px 3px 10px rgba(0,0,0,0.2)",
          }}
        >
          Make a Difference 💖
        </Typography>

        <Grid container spacing={4} justifyContent="center">
          {donationOptions.map((option, index) => (
            <Grid item key={index} xs={12} sm={6} md={4}>
              <Card
                sx={{
                  textAlign: "center",
                  p: 2,
                  boxShadow: "0 5px 15px rgba(0,0,0,0.3)",
                  borderRadius: "16px",
                  backgroundColor: "#FFFFFF",
                  transition: "all 0.4s ease-in-out",
                  "&:hover": {
                    transform: "scale(1.05)",
                    boxShadow: "0 10px 25px rgba(0,0,0,0.4)",
                  },
                }}
              >
                <CardMedia
                  component="img"
                  height="180"
                  image={option.image}
                  alt="Donation Image"
                  sx={{ borderRadius: "12px" }}
                />
                <CardContent>
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: "bold",
                      color: "#1D1D1D",
                      minHeight: "50px",
                      fontSize: { xs: "1rem", md: "1.2rem" },
                    }}
                  >
                    {option.description}
                  </Typography>
                  <Typography
                    variant="h5"
                    color="error"
                    sx={{ mt: 2, fontWeight: "bold", fontSize: { xs: "1.2rem", md: "1.5rem" } }}
                  >
                    ₹{option.amount}
                  </Typography>
                  <Button
                    variant="contained"
                    startIcon={<VolunteerActivism />}
                    sx={{
                      mt: 3,
                      px: { xs: 3, md: 4 },
                      py: { xs: 1, md: 1.5 },
                      fontSize: { xs: "14px", md: "16px" },
                      fontWeight: "bold",
                      borderRadius: "30px",
                      backgroundColor: "#E63946",
                      color: "#fff",
                      boxShadow: "0 3px 10px rgba(183,28,28,0.3)",
                      transition: "all 0.3s ease-in-out",
                      "&:hover": {
                        backgroundColor: "#9b0000",
                        boxShadow: "0 5px 15px rgba(183,28,28,0.5)",
                      },
                      width: "100%",
                    }}
                    onClick={() => handleOpenModal(option.amount)}
                  >
                    Donate ₹{option.amount}
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Donation Modal */}
        <DonationModal open={open} handleClose={() => setOpen(false)} amount={selectedAmount} />
      </Container>
    </Box>
  );
};

export default DonatePage;

































