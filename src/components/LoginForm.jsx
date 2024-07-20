import React, { useContext, useState } from "react";
import { Modal, Button, TextField } from "@mui/material";
import AppContext from "./../AppContext";
import { motion } from "framer-motion";
import userService from "../services/userService";

function LoginForm() {
  const { state, setState } = useContext(AppContext);

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prevLoginData) => ({
      ...prevLoginData,
      [name]: value,
    }));
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
    e.preventDefault();
    try {
      await userService.loginUser(loginData); // Call the loginUser service
      setState((prevState) => ({ ...prevState, isLoginFormOpen: false }));
    } catch (error) {
      setError("Login failed. Please check your credentials.");
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
        className="bg-[#e6effc] w-[90vw] h-[40vh] md:w-[40vw] md:h-[50vh] py-5 px-5 md:py-0 md:px-10 rounded-2xl m-auto mt-[16vh] md:mt-[24vh] flex flex-col justify-center"
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
          />
          {error && <p className="text-red-500">{error}</p>}
          <p
            onClick={handleRegisterOpen}
            className="text-[#1A73E8] font-semibold underline cursor-pointer"
          >
            Register
          </p>
          <Button type="submit" variant="contained" color="primary">
            Login
          </Button>
        </form>
      </motion.div>
    </Modal>
  );
}

export default LoginForm;
