import {
  useState,
  type ChangeEvent,
  type FormEvent,
  type KeyboardEvent,
  type MouseEvent,
} from "react";
import { Box, Button, Paper, TextField, Typography } from "@mui/material";

const Event = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const [count, setCount] = useState<number>(0);

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    console.log("Button Clicked", e);
    setCount((count) => count + 1);
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    console.log("Key is pressed: ", e.key);
  };

  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert(`Form submitted with: ${inputValue}`);
  };

  const handleMouseEnter = () => {
    console.log("Mouse entered the box!");
  };

  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h5" gutterBottom>
        React Event Handling with MUI
      </Typography>

      <form onSubmit={handleFormSubmit}>
        <TextField
          label="Type something"
          variant="filled"
          fullWidth
          margin="normal"
          value={inputValue}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          sx={{
            background: "white",
          }}
        />
        <Button type="submit" variant="contained" color="primary">
          Submit
        </Button>
      </form>

      <Box mt={2}>
        <Button onClick={handleClick} variant="outlined" color="error">
          Click Me ({count})
        </Button>
      </Box>

      <Box mt={4}>
        <Paper
          elevation={3}
          onMouseEnter={handleMouseEnter}
          sx={{
            width: 300,
            height: 100,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#f5f5f5",
            cursor: "pointer",
          }}
        >
          Hover over this box
        </Paper>
      </Box>
    </Box>
  );
};

export default Event;
