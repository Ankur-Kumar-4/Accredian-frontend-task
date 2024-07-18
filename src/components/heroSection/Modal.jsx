import React, { useState } from 'react';
import { TextField, Button, Modal as MuiModal, Box, Typography } from '@mui/material';

const Modal = ({ open, handleClose }) => {
  const [formData, setFormData] = useState({
    referrerName: '',
    referrerEmail: '',
    refereeName: '',
    refereeEmail: '',
    refereePhone: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., call API to submit data)
    console.log('Form submitted:', formData);
  };

  return (
    <MuiModal open={open} onClose={handleClose}>
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 700,
          bgcolor: 'background.paper',
          boxShadow: 24,
          p: 6,
          borderRadius: 4,
        }}
      >
        <Typography variant="h6" component="h2">
          Refer a Friend
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Your Name"
            name="referrerName"
            value={formData.referrerName}
            onChange={handleChange}
            fullWidth
            required
            margin="normal"
          />
          <TextField
            label="Your Email"
            name="referrerEmail"
            type="email"
            value={formData.referrerEmail}
            onChange={handleChange}
            fullWidth
            required
            margin="normal"
          />
          <TextField
            label="Friend's Name"
            name="refereeName"
            value={formData.refereeName}
            onChange={handleChange}
            fullWidth
            required
            margin="normal"
          />
          <TextField
            label="Friend's Email"
            name="refereeEmail"
            type="email"
            value={formData.refereeEmail}
            onChange={handleChange}
            fullWidth
            required
            margin="normal"
          />
          <TextField
            label="Friend's Phone"
            name="refereePhone"
            value={formData.refereePhone}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Message (Optional)"
            name="message"
            value={formData.message}
            onChange={handleChange}
            fullWidth
            multiline
            rows={4}
            margin="normal"
          />
          <Button sx={{marginTop: '20px',}} type="submit" variant="contained" color="primary" fullWidth>
            Submit
          </Button>
        </form>
      </Box>
    </MuiModal>
  );
};

export default Modal;
