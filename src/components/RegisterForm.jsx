import React, { useContext, useState } from "react";
import { Modal, Button, TextField } from "@mui/material";
import AppContext from "./../AppContext";
import { motion } from "framer-motion";
import userService from "../services/userService"; 

function RegisterForm() {
  const { state, setState } = useContext(AppContext);

  const [registerData, setRegisterData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRegisterData((prevRegisterData) => ({
      ...prevRegisterData,
      [name]: value,
    }));
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
    e.preventDefault();
    try {
      await userService.registerUser(registerData); // Call the registerUser service
      setState((prevState) => ({ ...prevState, isRegisterFormOpen: false }));
    } catch (error) {
      setError("Registration failed. Please try again.");
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
        className="bg-[#e6effc] w-[90vw] h-[50vh] md:w-[40vw] md:h-[60vh] py-5 px-5 md:py-0 md:px-10 rounded-2xl m-auto mt-[16vh] md:mt-[24vh] flex flex-col justify-center"
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
          />
          <TextField
            name="email"
            value={registerData.email}
            onChange={handleChange}
            required
            label="Email id"
            variant="outlined"
            fullWidth
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
          />
          {error && <p className="text-red-500">{error}</p>}
          <Button type="submit" variant="contained" color="primary">
            Register
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
