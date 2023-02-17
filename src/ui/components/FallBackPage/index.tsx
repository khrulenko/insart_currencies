import { Button, Stack, Typography } from '@mui/material';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';

const FallBackPage = () => {
  return (
    <Stack alignItems="center" spacing={2}>
      <SentimentVeryDissatisfiedIcon fontSize="large" />

      <Typography fontWeight="bold" textAlign="center">
        Oops, something went wrong...
        <br />
        Try reloading the page using the button below
      </Typography>

      <Button onClick={() => window.location.reload()} variant="contained">
        Reload
      </Button>
    </Stack>
  );
};

export default FallBackPage;
