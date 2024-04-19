import { useEffect, useState } from 'react';
import { Input, Button, Stack } from '@mui/joy';

import { createUserEmailPassword, signInEmailPassword } from '../../services/firebase/firebaseAuthService';

function LoginForm() {
  const [signUpMode, setSignUpMode] = useState(false);
  const [submitButtonEnabled, setSubmitButtonEnabled] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');

  const submit = () => {
    // TODO: validate better and with error messages
    if (!email || !password) {
      return;
    }
    if (signUpMode) {
      if (
        !passwordConfirmation ||
        password.trim() !== passwordConfirmation.trim()
      ) {
        return;
      }
      createUserEmailPassword(email, password);
    } else {
      signInEmailPassword(email, password);
    }
  };

  useEffect(() => {
    // TODO: validate fields better
    let enabled = !!email && !!password;
    if (signUpMode) {
      enabled = enabled && !!passwordConfirmation;
    }
    setSubmitButtonEnabled(enabled);
  }, [email, password, passwordConfirmation, signUpMode]);

  return (
    <Stack
      direction="column"
      alignContent="center"
      justifyContent="center"
      gap={2}
      sx={{
        textAlign: 'center',
        height: '100%',
      }}
    >
      <Input
        size="lg"
        variant="outlined"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Input
        size="lg"
        variant="outlined"
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      {signUpMode ? (
        <Input
          size="lg"
          variant="outlined"
          type="password"
          placeholder="Password Confirmation"
          value={passwordConfirmation}
          onChange={(e) => setPasswordConfirmation(e.target.value)}
        />
      ) : null}
      <div>
        <Button
          size="lg"
          variant="solid"
          color="primary"
          disabled={!submitButtonEnabled}
          onClick={() => submit()}
          sx={{
            borderRadius: 40,
            width: '100%',
          }}
        >
          {signUpMode ? 'Create Account' : 'Login'}
        </Button>
        <Button
          size="sm"
          variant="plain"
          onClick={() => setSignUpMode(!signUpMode)}
          sx={{ marginTop: 1 }}
        >
          {signUpMode ? 'Go to Login' : 'Go to Account Creation'}
        </Button>
      </div>
    </Stack>
  );
}

export default LoginForm;
