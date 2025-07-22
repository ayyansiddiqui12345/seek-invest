'use client'; // This is a client-side component

import Head from 'next/head';
import { useState } from 'react';
import {
  Box,
  Typography,
  TextField,
  Button,
  Link
} from '@mui/material';

export default function SignupPage() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.includes('@')) {
      setError('Please enter a valid email address.');
    } else {
      setError('');
      alert('Signed up with: ' + email);
    }
  };

  return (
    <>
    <Head>
      <title>Signup | SeekInvest</title>
    </Head>
    <Box
      sx={{
        minHeight: '100vh',
        px: 2,
        py: 4,
        bgcolor: '#fffaf6',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}
    >
      {/* Logo */}
      <Box sx={{ mr: 'auto', ml: 1, mb: 10, mt: -1 }}>
        <img
          src="/images/coloredLogoIcon.svg"
          alt="SeekInvest Logo"
          style={{ height: 25 }}
        />
      </Box>

      {/* Heading + Splash Icon */}
      <Box
        sx={{
          maxWidth: 500,
          width: '100%',
          textAlign: 'center',
          mb: 3,
          position: 'relative'
        }}
      >
        {/* Splash Image Crown */}
        <Box sx={{ position: 'relative', textAlign: 'center', mb: 3 }}>
          {/* Splash image above W */}
          <Box
            component="img"
            src="/images/vectorLinesDarkIcon.svg"
            alt="Splash Crown"
            sx={{
              position: 'absolute',
              top: { xs: -30, sm: -32, md: -32 },
              left: { xs: 'calc(50% + 120px)', sm: 'calc(50% + 240px)', md: 'calc(50% + 270px)' },
              width: { xs: 50, sm: 90, md: 300 },
              height: '90px',
              zIndex: 1,
            }}
          />
        </Box>
        <Typography variant="h4" fontWeight="bold" mb={3} color="#344054">
          Welcome to SeekInvest
        </Typography>
        <Typography variant="body2" color="text.secondary" fontSize={15} mb={3}>
          The platform for growth and engagement, designed for forward-thinking
          enterprises and financial advisors.
        </Typography>
      </Box>

      {/* Form */}
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
          width: '100%',
          maxWidth: 325
        }}
      >

        {/* Email Label */}
        <Typography
          fontSize={14}
          color="#344054"
          textAlign="left"
          mb={-1}
        >
          Email
        </Typography>
        <TextField
          placeholder="Enter your email"
          variant="outlined"
          fullWidth
          size="small"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          sx={{
            backgroundColor: '#fff',
            borderRadius: 2,
          }}
        />
        <Button
          type="submit"
          variant="contained"
          sx={{
            backgroundColor: '#1A3ED2',
            borderRadius: '9px',
            marginTop: 2,
            paddingY: 1,
            fontWeight: 600,
            fontSize: '12px',
            textTransform: 'none',
            '&:hover': {
              backgroundColor: '#1535b5'
            }
          }}
        >
          Continue with Email
        </Button>
      </Box>

      {/* Footer Links */}
      <Typography mt={3} fontSize={14} color="#344054">
        Already have an account?{' '}
        <Link href="/login" underline="hover">
          Login
        </Link>
      </Typography>

      <Typography fontSize={12} color="text.secondary" mt={4}>
        <Link href="#">Terms of Use</Link> and{' '}
        <Link href="#">Privacy Policy</Link>
      </Typography>
    </Box>
    </>
  );
}
