import { Button } from '@mui/material';
import React from 'react';

const DownloadButton = () => {
  const handleRedirect = () => {
    // Redirect to the Google Drive view link
    window.location.href = "https://drive.google.com/file/d/1JCMZpN9PHNtrMZKrxQONLIcjO4KqMaB5/view?usp=sharing";
  };

  return <Button onClick={handleRedirect} variant='outlined' color="secondary">Read Borchure</Button>;
};

export default DownloadButton;
