import { Helmet } from 'react-helmet-async';
import React, { useState, useEffect } from 'react';
import { useTheme } from '@mui/material/styles';
import { Grid, Container, Typography, Stack } from '@mui/material';

export default function ProfilePage() {
  return (
    <>
      <Helmet>
        <title> Dashboard | Minimal UI </title>
      </Helmet>

      <Container maxWidth="xl">
        <Typography variant="h4" sx={{ mb: 5 }}>
          Profile
        </Typography>
      </Container>

      <Container>fdasfads</Container>
    </>
  );
}
