'use client';

import Head from 'next/head';
import { useState } from 'react';
import {
  Box,
  Typography,
  TextField,
  Button,
  Link,
  Alert
} from '@mui/material';

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      setError('Please enter a valid email address.');
    } else {
      setError('');
      setSubmitted(true);
    }
  };

  return (
    <>
    <Head>
      <title>forgot password | SeekInvest</title>
    </Head>
    

      <Box
        sx={{
          minHeight: '100vh',
          bgcolor: '#fffaf6',
          px: 2,
          py: 4,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}
      >
        {/* Logo */}
        <Box sx={{ mr: 'auto', mb: { xs: 2, md: 9 } }}>
          <img
            src="https://app.seekinvest.com/images/coloredLogoIcon.svg"
            alt="SeekInvest Logo"
            style={{ height: 25 }}
          />
        </Box>

        {/* Title Section */}
        <Box sx={{ maxWidth: 550, width: '100%', textAlign: 'center', marginTop: 7 }}>
          <Typography variant="h4" fontWeight="bold" mb={2} color="#344054" fontSize={35}>
            Reset your Password
          </Typography>
          <Typography
            variant="body2"
            color="#475569"
            mb={3}
            fontSize={14.5}
            sx={{ whiteSpace: 'pre-line' }}
          >
            Enter the email address associated with your account to reset your password.{"\n"}You will receive an email with a link to create a new password for your account.
          </Typography>
        </Box>

        {/* Success Alert */}
        {submitted ? (
          <Alert severity="success" sx={{ mb: 3 }}>
            ✅ Reset link sent to <strong>{email}</strong>. Please check your inbox.
          </Alert>
        ) : (
          <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
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
              width="100%"
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

            {/* Error Message */}
            {error && (
              <Typography color="error" fontSize={13} width="100%">
                {error}
              </Typography>
            )}

            {/* Submit Button */}
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
                width: '100%',
                '&:hover': {
                  backgroundColor: '#1535b5'
                }
              }}
            >
              Continue with Email
            </Button>
          </Box>
        )}

        {/* Back to login */}
        <Typography mt={4} fontSize={14} color="#475569">
          Already have an account?{' '}
          <Link href="/login" underline="hover">
            Login
          </Link>
        </Typography>
      </Box>
      </>
  );
}
