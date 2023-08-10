import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// @mui
import { Link, Stack, IconButton, InputAdornment, TextField, Checkbox, Avatar } from '@mui/material';
import { LoadingButton } from '@mui/lab';
// components
import Iconify from '../../../components/iconify';
// ----------------------------------------------------------------------

export default function ProfileHandler() {
  const navigate = useNavigate();
  const [currentName, setCurrentName] = useState('');
  const [currentSecondName, setCurrentSecondName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');

  const [showPassword, setShowPassword] = useState(false);

  const handleSave = () => {
    navigate('#', { replace: true });
  };
  const handleCancel = () => {
    setCurrentName('');
    setCurrentSecondName('');
    setEmail('');
    setPhoneNumber('');
    setPassword('');
  };

  return (
    <>
      <Avatar
        src="/assets/images/avatars/awwogga.jpg"
        sx={{ width: 250, height: 250, marginLeft: '4%', marginBottom: '10%' }}
      />
      <Stack spacing={3}>
        <TextField
          name="currentName"
          label="Current Name"
          value={currentName}
          InputProps={{
            inputProps: {
              style: { textAlign: 'center' },
            },
          }}
          onChange={(e) => setCurrentName(e.target.value)}
        />

        <TextField
          name="currentSecondName"
          label="Current Second Name"
          value={currentSecondName}
          InputProps={{
            inputProps: {
              style: { textAlign: 'center' },
            },
          }}
          onChange={(e) => setCurrentSecondName(e.target.value)}
        />

        <TextField
          name="email"
          label="Email"
          value={email}
          InputProps={{
            inputProps: {
              style: { textAlign: 'center' },
            },
          }}
          onChange={(e) => setEmail(e.target.value)}
        />

        <TextField
          name="phone"
          label="Phone Number"
          value={phoneNumber}
          InputProps={{
            inputProps: {
              style: { textAlign: 'center' },
              pattern: '[0-9]*',
            },
            inputComponent: 'input',
            onInput: (event) => {
              event.target.value = event.target.value.replace(/[^0-9]/g, '').slice(0, 10); // Restrict to 10 digits
            },
          }}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />

        <TextField
          name="password"
          label="Password"
          value={password}
          type={showPassword ? 'text' : 'password'}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                  <Iconify icon={showPassword ? 'eva:eye-fill' : 'eva:eye-off-fill'} />
                </IconButton>
              </InputAdornment>
            ),
          }}
          onChange={(e) => setPassword(e.target.value)}
        />
      </Stack>
      <LoadingButton
        fullWidth
        size="large"
        type="submit"
        variant="contained"
        onClick={handleSave}
        style={{ marginTop: 20 }}
      >
        Save
      </LoadingButton>
      <LoadingButton
        fullWidth
        size="large"
        type="submit"
        variant="contained"
        onClick={handleCancel}
        style={{ marginTop: 20 }}
        sx={{ bgcolor: 'red', '&:hover': { bgcolor: '#C70039' } }}
      >
        Cancel
      </LoadingButton>
    </>
  );
}
