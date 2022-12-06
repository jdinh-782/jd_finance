import * as React from 'react';
import Typography from '@mui/material/Typography';
import Title from './Title';



function getDate() {
  const date = new Date();

  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();

  // This arrangement can be altered based on how we want the date's format to appear.
  let currentDate = `${month}/${day}/${year}`;

  return currentDate;
}


export default function Balance() {
  return (
    <React.Fragment>
      <Title>Current Balance</Title>
      <Typography component="p" variant="h4">
        $12339.32
      </Typography>
      <Typography color="text.secondary" sx={{ flex: 1 }}>
        as of {getDate()}
      </Typography>
    </React.Fragment>
  );
}