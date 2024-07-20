import React, { useContext, useState } from "react";
import { Modal, Button, TextField } from "@mui/material";
import AppContext from "./../AppContext";
import { motion } from "framer-motion";
import userService from "../services/userService";
import Loader from "./common/Loader";
function RegisterForm() {
  const [isLoding, setIsLoading] = useState(false);
  const { state, setState } = useContext(AppContext);

  const [registerData, setRegisterData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [submitError, setSubmitError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRegisterData((prevRegisterData) => ({
      ...prevRegisterData,
      [name]: value,
    }));

    // Validate input as the user types
    validateField(name, value);
  };

  const validateField = (name, value) => {
    let errorMsg = "";
    if (name === "email") {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(value)) {
        errorMsg = "Invalid email format";
      }
    } else if (name === "password") {
      if (value.length < 8) {
        errorMsg = "Password must be at least 8 characters";
      }
    } else if (name === "name") {
      if (value.trim() === "") {
        errorMsg = "Name is required";
      }
    }
    setErrors((prevErrors) => ({ ...prevErrors, [name]: errorMsg }));
  };

  const validateForm = () => {
    const newErrors = {};
    Object.keys(registerData).forEach((field) => {
      validateField(field, registerData[field]);
      if (errors[field]) {
        newErrors[field] = errors[field];
      }
    });
    return newErrors;
  };

  const handleClose = () => {
    setState((prevState) => ({ ...prevState, isRegisterFormOpen: false }));
  };

  const handleLoginOpen = () => {
    setState((prevState) => ({
      ...prevState,
      isRegisterFormOpen: false,
      isLoginFormOpen: true,
    }));
  };

  const handleSubmit = async (e) => {
    setIsLoading(true);
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length === 0) {
      try {
        await userService.registerUser(registerData); // Call the registerUser service
        setState((prevState) => ({ ...prevState, isRegisterFormOpen: false }));
        setIsLoading(false);
      } catch (error) {
        setSubmitError("Registration failed. Please try again.");
        setIsLoading(false);
      }
    } else {
      setSubmitError("Please correct the errors in the form.");
    }
  };

  return (
    <Modal open={state.isRegisterFormOpen} onClose={handleClose}>
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.6,
          delay: 0.2,
          ease: "easeOut",
        }}
        className="bg-[#e6effc] w-[90vw] h-[55vh] md:w-[40vw] md:h-[65vh] py-5 px-5 md:py-0 md:px-10 rounded-2xl m-auto mt-[16vh] md:mt-[24vh] flex flex-col justify-center"
      >
        <h1 className="md:text-xl text-[#1A73E8] mb-4">Register</h1>
        <form onSubmit={handleSubmit} className="md:space-y-6 space-y-3">
          <TextField
            name="name"
            value={registerData.name}
            onChange={handleChange}
            required
            label="Name"
            variant="outlined"
            fullWidth
            error={!!errors.name}
            helperText={errors.name}
          />
          <TextField
            name="email"
            value={registerData.email}
            onChange={handleChange}
            required
            label="Email id"
            variant="outlined"
            fullWidth
            error={!!errors.email}
            helperText={errors.email}
          />
          <TextField
            name="password"
            value={registerData.password}
            onChange={handleChange}
            required
            label="Password"
            type="password"
            variant="outlined"
            fullWidth
            error={!!errors.password}
            helperText={errors.password}
          />
          {submitError && <p className="text-red-500">{submitError}</p>}
          <Button type="submit" variant="contained" color="primary">
            Register
            &nbsp;
            {isLoding && <Loader />}
          </Button>
        </form>
        <p
          onClick={handleLoginOpen}
          className="text-[#1A73E8] font-semibold underline cursor-pointer mt-4"
        >
          Already have an account? Login
        </p>
      </motion.div>
    </Modal>
  );
}

export default RegisterForm;
