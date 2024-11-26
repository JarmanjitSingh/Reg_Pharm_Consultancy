import {
  Box,
  Button,
  Stack,
  TextField,
  Typography
} from "@mui/material";
import toast from "react-hot-toast";

interface IContactFormProps {
  submitFunction: () => void;
}
const ContactForm = ({ submitFunction }: IContactFormProps) => {
  const sendMessageHandler = () => {
    toast.success("Message sent to RegPharm Consultancy");
    submitFunction();
  };
  return (
    <Box>
      <Typography variant="h1" fontSize="2rem">
        Contact Us
      </Typography>
      <Stack direction="row" justifyContent="space-between" gap={4} mt={4}>
        <TextField
          required
          id="outlined-required"
          label="Full Name"
          defaultValue=""
          fullWidth
          focused
        />

        <TextField
          required
          id="outlined-required"
          label="Email Address"
          defaultValue=""
          fullWidth
          focused
        />
      </Stack>

      <Stack direction="row" justifyContent="space-between" gap={4} mt={4}>
        <TextField
          required
          id="outlined-required"
          label="Phone Number"
          defaultValue=""
          fullWidth
          focused
        />

        <TextField
          required
          id="outlined-required"
          label="Subject"
          defaultValue=""
          fullWidth
          focused
        />
      </Stack>

      <TextField
        label="Message"
        multiline
        rows={4} // Number of visible rows
        variant="outlined" // You can use "filled" or "standard" as well
        fullWidth
        sx={{ marginTop: "24px" }}
        focused
      />
      <Box display="flex" justifyContent="center" mt={4}>
        <Button variant="contained" onClick={sendMessageHandler}>
          Send Message
        </Button>
      </Box>
    </Box>
  );
};

export default ContactForm;
