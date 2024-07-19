import React, { useContext, useState } from "react";
import { Modal, Button, TextField } from "@mui/material";
import AppContext from "./../AppContext";
import { motion } from "framer-motion";

function RegisterForm() {
  const { state, setState } = useContext(AppContext);

  const [registerData, setRegisterData] = useState({
    name: "",
    username: "",
    password: "",
  });

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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Registration form submitted:", registerData);
    setState((prevState) => ({ ...prevState, isRegisterFormOpen: false }));
    // Implement registration logic here
  };

  return (
    <Modal open={state.isRegisterFormOpen} onClose={handleClose}>
      <motion.div
        initial={{ opacity: 0, y: -50 }} // Start position (invisible and above)
        animate={{ opacity: 1, y: 0 }} // End position (fully visible and in place)
        transition={{
          duration: 0.6, // Animation duration
          delay: 0.2, // Delay before the animation starts
          ease: "easeOut", // Easing function for smoothness
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
            name="username"
            value={registerData.username}
            onChange={handleChange}
            required
            label="User ID"
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
