import React, { useState } from "react";
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Layout from "../layout/LayoutPage";

const LogoutPage = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    // Destroy the session (e.g., clear local storage or cookies)
    localStorage.clear();
    // Navigate to login page
    navigate("/login");
  };

  return (
    <Layout>
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.5 }}
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "70vh",
        color: "#fff",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        style={{
          display: "inline-block",
          marginBottom: "20px",
        }}
      >
        <Button
          variant="contained"
          color="secondary"
          onClick={() => setOpen(true)}
          style={{ fontSize: "18px", padding: "10px 20px", borderRadius: "30px" }}
        >
          Log Out
        </Button>
      </motion.div>

      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>Confirm Logout</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to log out?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)} color="primary">
            Cancel
          </Button>
          <Button onClick={handleLogout} color="secondary">
            OK
          </Button>
        </DialogActions>
      </Dialog>
    </motion.div>
    </Layout>

  );
};

export default LogoutPage;
