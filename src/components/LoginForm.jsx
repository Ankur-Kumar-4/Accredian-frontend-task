import React, { useContext, useState } from "react";
import { Modal, Button, TextField } from "@mui/material";
import AppContext from "../AppContext";
import { motion } from "framer-motion";
import userService from "../services/userService";
import Loader from "./common/Loader";

function LoginForm() {
  const { state, setState } = useContext(AppContext);
  const [isLoding, setIsLoading] = useState(false);
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const [submitError, setSubmitError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prevLoginData) => ({
      ...prevLoginData,
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
    }
    setErrors((prevErrors) => ({ ...prevErrors, [name]: errorMsg }));
  };

  const validateForm = () => {
    const newErrors = {};
    Object.keys(loginData).forEach((field) => {
      validateField(field, loginData[field]);
      if (errors[field]) {
        newErrors[field] = errors[field];
      }
    });
    return newErrors;
  };

  const handleClose = () => {
    setState((prevState) => ({ ...prevState, isLoginFormOpen: false }));
  };

  const handleRegisterOpen = () => {
    setState((prevState) => ({
      ...prevState,
      isLoginFormOpen: false,
      isRegisterFormOpen: true,
    }));
  };

  const handleSubmit = async (e) => {
    setIsLoading(true);
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length === 0) {
      try {
        await userService.loginUser(loginData); // Call the loginUser service
        setState((prevState) => ({
          ...prevState,
          isLoginFormOpen: false,
          isLoggedin: true,
        }));
        setIsLoading(false);
      } catch (error) {
        setSubmitError("Login failed. Please check your credentials.");
        setIsLoading(false);
      }
    } else {
      setSubmitError("Please correct the errors in the form.");
    }
  };

  return (
    <Modal open={state.isLoginFormOpen} onClose={handleClose}>
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.6,
          delay: 0.2,
          ease: "easeOut",
        }}
        className="bg-[#e6effc] w-[90vw] h-[45vh] md:w-[40vw] md:h-[55vh] py-5 px-5 md:py-0 md:px-10 rounded-2xl m-auto mt-[16vh] md:mt-[24vh] flex flex-col justify-center"
      >
        <h1 className="md:text-xl text-[#1A73E8] mb-4">Login Form</h1>
        <form onSubmit={handleSubmit} className="md:space-y-6 space-y-3">
          <TextField
            name="email"
            value={loginData.email}
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
            value={loginData.password}
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
          <p
            onClick={handleRegisterOpen}
            className="text-[#1A73E8] font-semibold underline cursor-pointer"
          >
            Register
          </p>
          <Button type="submit" variant="contained" color="primary">
            Login &nbsp;
            {isLoding && <Loader />}
          </Button>
        </form>
      </motion.div>
    </Modal>
  );
}

export default LoginForm;
