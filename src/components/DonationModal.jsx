








































/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import {
  Modal,
  Box,
  TextField,
  Button,
  Typography,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const DonationModal = ({ open, handleClose, amount }) => {
  const [formData, setFormData] = useState({
    name: "",
    amount: amount || "",
    transactionId: "",
    date: "",
    pancard: "",
  });

  useEffect(() => {
    setFormData((prev) => ({ ...prev, amount }));
  }, [amount]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://bkpdashboardbackend.onrender.com/api/transactions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success("Transaction submitted successfully!", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          style: { backgroundColor: "#2A9D8F", color: "#FFFFFF" },
        });
        setFormData({ name: "", amount: amount || "", transactionId: "", date: "", pancard: "" });
        handleClose();
      } else {
        toast.error("Failed to submit transaction.", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          style: { backgroundColor: "#E76F51", color: "#FFFFFF" },
        });
      }
    } catch (error) {
      toast.error("Error submitting transaction.", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        style: { backgroundColor: "#E76F51", color: "#FFFFFF" },
      });
      console.error("Error submitting transaction:", error);
    }
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: { xs: "90%", sm: 400, md: 500 },
          bgcolor: "background.paper",
          boxShadow: 24,
          p: { xs: 4, md: 6 },
          borderRadius: "12px",
          border: "2px solid #E63946",
        }}
      >
        <IconButton
          onClick={handleClose}
          sx={{
            position: "absolute",
            top: 10,
            right: 10,
            color: "#E63946",
          }}
        >
          <CloseIcon />
        </IconButton>
        <Typography
          variant="h5"
          sx={{
            textAlign: "center",
            mb: 3,
            fontWeight: "bold",
            color: "#1D1D1D",
          }}
        >
          Transaction Details
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField fullWidth label="Full Name" name="name" value={formData.name} onChange={handleChange} margin="normal" required sx={{ bgcolor: "#F4F4F4", borderRadius: "6px" }} />
          <TextField fullWidth label="Amount" name="amount" value={formData.amount} onChange={handleChange} margin="normal" type="number" required sx={{ bgcolor: "#F4F4F4", borderRadius: "6px" }} />
          <TextField fullWidth label="Transaction ID" name="transactionId" value={formData.transactionId} onChange={handleChange} margin="normal" required sx={{ bgcolor: "#F4F4F4", borderRadius: "6px" }} />
          <TextField fullWidth label="Date" name="date" type="date" value={formData.date} onChange={handleChange} margin="normal" required InputLabelProps={{ shrink: true }} sx={{ bgcolor: "#F4F4F4", borderRadius: "6px" }} />
          <TextField fullWidth label="PAN Card" name="pancard" value={formData.pancard} onChange={handleChange} margin="normal" required sx={{ bgcolor: "#F4F4F4", borderRadius: "6px" }} />
          <Button type="submit" variant="contained" fullWidth sx={{ mt: 3, py: 1.5, fontSize: "16px", fontWeight: "bold", borderRadius: "8px", backgroundColor: "#E63946", color: "#fff", boxShadow: "0 3px 10px rgba(183,28,28,0.3)", "&:hover": { backgroundColor: "#C62828", boxShadow: "0 5px 15px rgba(183,28,28,0.5)" } }}>Submit Transaction</Button>
        </form>
      </Box>
    </Modal>
  );
};

export default DonationModal;










