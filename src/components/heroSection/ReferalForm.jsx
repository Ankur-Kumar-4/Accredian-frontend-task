import React, { useState, useContext } from "react";
import { TextField, Button, Modal as MuiModal, useTheme } from "@mui/material";
import { motion } from "framer-motion";
import AppContext from "../../AppContext";
import referalService from "../../services/referalService";
import Loader from "../../components/common/Loader";

const Modal = () => {
  const { state, setState } = useContext(AppContext);
  const [isLoding, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    referredName: "",
    referredEmail: "",
  });

  const [errors, setErrors] = useState({});
  const [submitError, setSubmitError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validate = () => {
    let tempErrors = {};
    if (!formData.referredName) {
      tempErrors.referredName = "Friend's name is required";
    }
    if (!formData.referredEmail) {
      tempErrors.referredEmail = "Friend's email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.referredEmail)) {
      tempErrors.referredEmail = "Enter a valid email";
    }
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    setIsLoading(true);
    e.preventDefault();
    if (validate()) {
      try {
        await referalService(formData);
        setState((prevState) => ({ ...prevState, isModalOpen: false }));
        setIsLoading(false);
      } catch (error) {
        setSubmitError("Registration failed. Please try again.");
        setIsLoading(false);
      }
    }
  };

  const handleClose = () => {
    setState({ ...state, isModalOpen: false });
  };

  const theme = useTheme();

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
        className="bg-[#e6effc] w-[85vw] h-[40vh] md:w-[40vw] md:h-[55vh] py-5 px-5 md:py-0 md:px-10 rounded-xl m-auto mt-[16vh] md:mt-[18vh] flex flex-col justify-center"
      >
        <h1 className="text-xl text-[#1A73E8]">Refer a Friend</h1>
        <form onSubmit={handleSubmit} className="md:space-y-6 space-y-5 mt-4">
          <TextField
            label="Friend's Name"
            name="referredName"
            value={formData.referredName}
            onChange={handleChange}
            required
            margin="normal"
            fullWidth
            error={!!errors.referredName}
            helperText={errors.referredName}
            sx={{
              width: "100%",
              [theme.breakpoints.up("md")]: { height: "60px" },
              [theme.breakpoints.down("md")]: { height: "50px" },
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
                fontSize: "16px",
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
            error={!!errors.referredEmail}
            helperText={errors.referredEmail}
            sx={{
              width: "100%",
              [theme.breakpoints.up("md")]: { height: "60px" },
              [theme.breakpoints.down("md")]: { height: "50px" },
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
                fontSize: "16px",
                "&.MuiInputLabel-shrink": {
                  transform: "translate(20px, -6px) scale(0.85)",
                },
              },
            }}
          />
          {submitError && <p className="text-red-500">{submitError}</p>}
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{
              fontSize: "14px",
              [theme.breakpoints.up("md")]: { fontSize: "16px" },
            }}
          >
            Submit
            &nbsp;
            {isLoding && <Loader />}
          </Button>
        </form>
      </motion.div>
    </MuiModal>
  );
};

export default Modal;
