import { Stack, Sheet, Typography } from '@mui/joy';

import LoginForm from './LoginForm';

function Login() {
  return (
    <Stack
      justifyContent="center"
      alignItems="center"
      sx={(theme) => ({
        height: '100dvh',
        px: 2,
        py: 4,
        background: theme.vars.palette.gradient.mainChannel,
      })}
    >
      <Typography
        level="h1"
        textColor="common.white"
        sx={{
          marginBottom: 2,
        }}
      >
        Welcome
      </Typography>
      <Sheet
        sx={{
          borderRadius: 8,
          p: 4,
          width: '100%',
          maxWidth: 400,
        }}
      >
        <LoginForm />
      </Sheet>
    </Stack>
  );
}

export default Login;
