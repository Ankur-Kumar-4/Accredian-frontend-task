import React, { useState, useContext } from "react";
import { TextField, Button, Modal as MuiModal, useTheme } from "@mui/material";
import { motion } from "framer-motion";
import AppContext from "../../AppContext";
import referalService from "../../services/referalService";

const Modal = () => {
  const { state, setState } = useContext(AppContext);

  const [formData, setFormData] = useState({
    referredName: "",
    referredEmail: "",
    // referredPhone: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const theme = useTheme();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await referalService(formData);
      setState((prevState) => ({ ...prevState, isRegisterFormOpen: false }));
    } catch (error) {
      setError("Registration failed. Please try again.");
    }
  };

  const handleClose = () => {
    setState({ ...state, isModalOpen: false });
  };

  return (
    <MuiModal open={state.isModalOpen} onClose={handleClose}>
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.6,
          delay: 0.2,
          ease: "easeOut",
        }}
        className="bg-[#e6effc] w-[90vw] h-[50vh] md:w-[40vw] md:h-[80vh] py-5 px-5 md:py-0 md:px-10 rounded-xl m-auto mt-[16vh] md:mt-[14vh] flex flex-col justify-center"
      >
        <h1 className="md:text-xl text-[#1A73E8]">Refer a Friend</h1>
        <form onSubmit={handleSubmit} className="md:space-y-6 space-y-5">
          <TextField
            label="Friend's Name"
            name="referredName"
            value={formData.referredName}
            onChange={handleChange}
            required
            margin="normal"
            fullWidth
            sx={{
              width: "100%",
              [theme.breakpoints.up("md")]: { height: "50px" },
              [theme.breakpoints.down("md")]: { height: "40px" },
              "& .MuiInputBase-input": { fontSize: "14px" },
            }}
            InputProps={{
              sx: {
                height: "100%",
                "& .MuiInputBase-input": { fontSize: "14px" },
              },
            }}
            InputLabelProps={{
              sx: {
                fontSize: "12px",
                "&.MuiInputLabel-shrink": {
                  transform: "translate(20px, -6px) scale(0.85)",
                },
              },
            }}
          />
          <TextField
            label="Friend's Email"
            name="referredEmail"
            type="email"
            value={formData.referredEmail}
            onChange={handleChange}
            required
            margin="normal"
            fullWidth
            sx={{
              width: "100%",
              [theme.breakpoints.up("md")]: { height: "50px" },
              [theme.breakpoints.down("md")]: { height: "40px" },
              "& .MuiInputBase-input": { fontSize: "14px" },
            }}
            InputProps={{
              sx: {
                height: "100%",
                "& .MuiInputBase-input": { fontSize: "14px" },
              },
            }}
            InputLabelProps={{
              sx: {
                fontSize: "12px",
                "&.MuiInputLabel-shrink": {
                  transform: "translate(20px, -6px) scale(0.85)",
                },
              },
            }}
          />
          {/* <TextField
            label="Friend's Phone"
            name="referredPhone"
            value={formData.referredPhone}
            onChange={handleChange}
            margin="normal"
            fullWidth
            sx={{
              width: "100%",
              [theme.breakpoints.up("md")]: { height: "50px" },
              [theme.breakpoints.down("md")]: { height: "40px" },
              "& .MuiInputBase-input": { fontSize: "14px" },
            }}
            InputProps={{
              sx: {
                height: "100%",
                "& .MuiInputBase-input": { fontSize: "14px" },
                inputMode: "numeric", // Hint to use numeric keyboard on mobile devices
              },
            }}
            InputLabelProps={{
              sx: {
                fontSize: "12px",
                "&.MuiInputLabel-shrink": {
                  transform: "translate(20px, -6px) scale(0.85)",
                },
              },
            }}
            error={Boolean(errors.referredPhone)}
            helperText={errors.referredPhone}
          /> */}
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{
              fontSize: "10px",

              [theme.breakpoints.up("md")]: { fontSize: "16px" },
            }}
          >
            Submit
          </Button>
        </form>
      </motion.div>
    </MuiModal>
  );
};

export default Modal;
