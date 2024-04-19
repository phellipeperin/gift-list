import { Stack, Sheet } from '@mui/joy';

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
      <Sheet
        sx={{
          borderRadius: 8,
          p: 2,
          width: '100%',
          height: '100%',
        }}
      >
        <LoginForm />
      </Sheet>
    </Stack>
  );
}

export default Login;
