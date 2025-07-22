'use client';

import Head from 'next/head';
import { useState } from 'react';
import {
    Box,
    Typography,
    TextField,
    Button,
    IconButton,
    InputAdornment,
    Link
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';

export default function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!email.includes('@') || password.length < 1) {
            setError('Please enter a valid email and password.');
        } else {
            setError('');
            alert('Logged in as: ' + email);
        }
    };

    return (
        <>
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
                {/* Top Logo */}
                <Box sx={{ mr: '95%', mb: 1, height: 30, width: 30 }}>
                    <img
                        src="/images/coloredLogoIcon.svg"
                        alt="SeekInvest Logo"
                        style={{ heeight: 30, }}
                    />
                </Box>

                {/* Heading with Splash Crown */}
                <Box
                    sx={{
                        position: 'relative',
                        textAlign: 'center',
                        mt: 4,
                        mb: 3,
                    }}
                >
                    {/* Splash Image on top of W */}
                    <Box sx={{ position: 'relative', textAlign: 'center', mt: 4, mb: 3 }}>
                        {/* Splash image above W */}
                        <Box
                            component="img"
                            src="/images/splashLeftIcon.svg"
                            alt="Splash Crown"
                            sx={{
                                position: 'absolute',
                                top: { xs: -30, sm: -32 },
                                left: { xs: 'calc(50% - 160px)', sm: 'calc(50% - 280px)' },
                                width: { xs: 40, sm: 50 },
                                height: '60px',
                                zIndex: 1,
                            }}
                        />

                        {/* Welcome Text */}
                        <Typography
                            variant="h5"
                            fontWeight="bold"
                            color="#344054"
                            sx={{
                                fontSize: { xs: '30px', sm: '35px' },
                            }}
                        >
                            Welcome Back to SeekInvest
                        </Typography>
                    </Box>
                    <Typography variant="body1" color="text.secondary" whiteSpace={'pre-line'}>
                        The platform for growth and engagement, designed for {'\n'} forward-thinking
                        enterprises and financial advisors.
                    </Typography>
                    <Typography mt={3} fontSize={14} color="#344054">
                        Don’t have an account?{' '}
                        <Link href="/signup" underline="hover">
                            Sign up now
                        </Link>
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
                        Enter your email
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
                    {/* Password Label */}
                    <Typography fontSize={14} color="#344054" textAlign="left" mt={0} mb={-1}>
                        Enter your password
                    </Typography>
                    <TextField
                        type={showPassword ? 'text' : 'password'}
                        required
                        value={password}
                        size="small"
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter your password"
                        sx={{
                            backgroundColor: '#fff',
                            borderRadius: 2,
                            height: 50,
                        }}
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton onClick={() => setShowPassword((prev) => !prev)}>
                                        {showPassword ? <Visibility /> : <VisibilityOff />}
                                    </IconButton>
                                </InputAdornment>
                            ),
                        }}
                    />


                    {error && (
                        <Typography variant="body2" color="error">
                            {error}
                        </Typography>
                    )}

                    <Box textAlign="right">
                        <Link href="/forgot-password" underline="hover" fontSize={14}>
                            Forgot password?
                        </Link>
                    </Box>

                    <Button
                        type="submit"
                        variant="contained"
                        sx={{
                            backgroundColor: '#1A3ED2',
                            borderRadius: '9px', // fully rounded
                            paddingX: 4,
                            paddingY: 1,
                            fontWeight: '600',
                            fontSize: '15px',
                            textTransform: 'none',
                            '&:hover': {
                                backgroundColor: '#1535b5', // slightly darker on hover
                            },
                        }}
                    >
                        Login
                    </Button>
                </Box>
            </Box>
        </>

    );
}




