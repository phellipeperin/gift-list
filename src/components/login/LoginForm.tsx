import { useEffect, useState } from 'react';
import { Input, Button, Stack } from '@mui/joy';

function LoginForm() {
    const [signUpMode, setSignUpMode] = useState(false);
    const [submitButtonEnabled, setSubmitButtonEnabled] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirmation, setPasswordConfirmation] = useState('');

    const submit = () => {
        // TODO
    };

    useEffect(() => {
        // TODO validate fields better
        let enabled = !!email && !!password;
        if (signUpMode) {
            enabled = enabled && !!passwordConfirmation;
        }
        setSubmitButtonEnabled(enabled);
    }, [email, password, passwordConfirmation, signUpMode]);

    return (
        <Stack
            direction="column"
            gap={1}
            sx={{
                textAlign: 'center',
            }}
        >
            <h1>{ signUpMode ? 'Create Account' : 'Login' }</h1>
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
            {signUpMode ? <Input
                size="lg"
                variant="outlined"
                type="password"
                placeholder="Password Confirmation"
                value={passwordConfirmation}
                onChange={(e) => setPasswordConfirmation(e.target.value)}
            /> : null}
            <div>
                <Button
                    size="lg"
                    variant="solid"
                    color="primary"
                    disabled={!submitButtonEnabled}
                    onClick={() => submit()}
                    sx={{
                        width: '100%',
                    }}
                >
                    { signUpMode ? 'Create Account' : 'Login' }
                </Button>
                <Button
                    size="sm"
                    variant="plain"
                    onClick={() => setSignUpMode(!signUpMode)}
                    sx={{ marginTop: 1 }}
                >
                    { signUpMode ? 'Go to Login' : 'Go to Account Creation' }
                </Button>
            </div>
        </Stack>
    );
}

export default LoginForm;