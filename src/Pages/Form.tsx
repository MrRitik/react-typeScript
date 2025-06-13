import { useForm } from "react-hook-form";
import {
  Box,
  Button,
  TextField,
  Typography,
  CircularProgress,
} from "@mui/material";


type Inputs = {
  name: string;
  email: string;
  phone: number;
};

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<Inputs>();

  const onSubmit = async (data: Inputs) => {
    await new Promise((resolve) => setTimeout(resolve, 5000));
    console.log("Form is sumbitting ", data);
  };
  return (
    <Box
      maxWidth={500}
      mx="auto"
      mt={6}
      p={4}
      boxShadow={3}
      borderRadius={2}
      bgcolor="#fafafa"
    >
      <Typography variant="h5" align="center" gutterBottom sx={{color:"black"}}>
        Contact Form
      </Typography>

      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <TextField
          label="Name"
          fullWidth
          margin="normal"
          {...register("name", { required: "Name is required" })}
          error={!!errors.name}
          helperText={errors.name?.message}
        />

        <TextField
          label="Email"
          fullWidth
          margin="normal"
          type="email"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Invalid email format",
            },
          })}
          error={!!errors.email}
          helperText={errors.email?.message}
        />

        <TextField
          label="Phone Number"
          fullWidth
          margin="normal"
          type="number"
          {...register("phone", {
            required: "Phone number is required",
            valueAsNumber: true,
          })}
          error={!!errors.phone}
          helperText={errors.phone?.message}
        />

        <Box mt={2} display="flex" justifyContent="center">
          <Button
            type="submit"
            variant="contained"
            color="primary"
            disabled={isSubmitting}
            startIcon={isSubmitting ? <CircularProgress size={20} /> : null}
          >
            {isSubmitting ? "Submitting..." : "Submit"}
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default Form;
