import React, { useState, useContext } from "react";
import { TextField, Button, Modal as MuiModal, useTheme } from "@mui/material";
import { motion } from "framer-motion";
import AppContext from "../../AppContext";

const Modal = () => {
  const { state, setState } = useContext(AppContext);

  const [formData, setFormData] = useState({
    referrerName: "",
    referrerEmail: "",
    refereeName: "",
    refereeEmail: "",
    refereePhone: "",
  });

  const [errors, setErrors] = useState({
    refereePhone: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Validate phone number to ensure it's numeric and exactly 10 digits
    if (name === "refereePhone") {
      if (isNaN(value)) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          refereePhone: "Phone number must be numeric",
        }));
      } else if (value.length > 10) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          refereePhone: "Phone number cannot exceed 10 digits",
        }));
      } else if (value.length < 10 && value.length > 0) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          refereePhone: "Phone number must be exactly 10 digits",
        }));
      } else {
        setErrors((prevErrors) => ({
          ...prevErrors,
          refereePhone: "",
        }));
      }
    }

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const theme = useTheme();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Check for any validation errors
    if (errors.refereePhone) {
      console.log("Please correct the errors before submitting.");
      return;
    }
    // Handle form submission (e.g., call API to submit data)
    console.log("Form submitted:", formData);
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
        className="bg-[#e6effc] w-[90vw] h-[50vh] md:w-[40vw] md:h-[80vh] py-5 px-5 md:py-0 md:px-10 rounded-2xl m-auto mt-[16vh] md:mt-[14vh] flex flex-col justify-center"
      >
        <h1 className="md:text-xl text-[#1A73E8]">Refer a Friend</h1>
        <form onSubmit={handleSubmit} className="md:space-y-6 space-y-3">
          <TextField
            label="Your Name"
            name="referrerName"
            value={formData.referrerName}
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
                fontSize: "10px",
                "&.MuiInputLabel-shrink": {
                  transform: "translate(20px, -6px) scale(0.85)",
                },
              },
            }}
          />
          <TextField
            label="Your Email"
            name="referrerEmail"
            type="email"
            value={formData.referrerEmail}
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
                fontSize: "10px",
                "&.MuiInputLabel-shrink": {
                  transform: "translate(20px, -6px) scale(0.85)",
                },
              },
            }}
          />
          <TextField
            label="Friend's Name"
            name="refereeName"
            value={formData.refereeName}
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
                fontSize: "10px",
                "&.MuiInputLabel-shrink": {
                  transform: "translate(20px, -6px) scale(0.85)",
                },
              },
            }}
          />
          <TextField
            label="Friend's Email"
            name="refereeEmail"
            type="email"
            value={formData.refereeEmail}
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
                fontSize: "10px",
                "&.MuiInputLabel-shrink": {
                  transform: "translate(20px, -6px) scale(0.85)",
                },
              },
            }}
          />
          <TextField
            label="Friend's Phone"
            name="refereePhone"
            value={formData.refereePhone}
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
                fontSize: "10px",
                "&.MuiInputLabel-shrink": {
                  transform: "translate(20px, -6px) scale(0.85)",
                },
              },
            }}
            error={Boolean(errors.refereePhone)}
            helperText={errors.refereePhone}
          />
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
