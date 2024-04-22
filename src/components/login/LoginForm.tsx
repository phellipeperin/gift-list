import { useEffect, useState } from 'react';
import { Input, Button, Stack } from '@mui/joy';

import store from '../../store';
import { ValidationResult } from '../../models/Validation';
import { createUserEmailPassword, signInEmailPassword } from '../../services/firebase/firebaseAuthService';
import { setWarningMessage } from '../../stores/feedbackStore';

function LoginForm() {
  const [signUpMode, setSignUpMode] = useState(false);
  const [submitButtonEnabled, setSubmitButtonEnabled] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
   // these properties could potentially be brought somewhere more generic for re-use in case it's needed
  const passwordMinLength = 6;
  const emailRegexValidation = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const isFormValid = (): ValidationResult => {
    if (!email || !password || (signUpMode && !passwordConfirmation)) {
      return { isValid: false, message: 'Please fill in all the form fields' };
    }
    if (!email.toLowerCase().match(emailRegexValidation)) {
      return { isValid: false, message: 'Please fill in a valid email' };
    }
    if (password.trim().length < passwordMinLength) {
      return { isValid: false, message: `Password should be at least ${passwordMinLength} characters long` };
    }
    if (signUpMode && password.trim() !== passwordConfirmation.trim()) {
      return { isValid: false, message: 'Password and confirmation don\'t match' };
    }

    return { isValid: true };
  };

  const submit = () => {
    const formValidation = isFormValid();
    if (!formValidation.isValid) {
      store.dispatch(setWarningMessage(formValidation.message));
      return;
    }

    if (signUpMode) {
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
