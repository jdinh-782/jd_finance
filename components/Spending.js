import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import { LineChart, Line, XAxis, YAxis, Label, ResponsiveContainer } from 'recharts';
import { Paper, Typography } from '@mui/material';
import Title from './Title';
import Data from './Data';



const data = Data;

function getMonth() {
  const month_names = {1: 'January', 2: 'February', 3: 'March', 4: 'April', 5: 'May', 6: 'June', 7: 'July', 8: 'August', 9: 'Septemeber', 10: 'October', 11: 'November', 12: 'December'}
  const date = new Date();
  let month = date.getMonth() + 1;

  return month_names[month];
}

function getYear() {
  const date = new Date();

  return date.getFullYear();
}

function getTotalSpending(d) {
  let totalSpendingAmount = 0;
  for (let i = 0; i < d.length; i++) {
    if (d[i].amount !== undefined)
      totalSpendingAmount += d[i].amount;
  }
  return totalSpendingAmount.toFixed(2);
};


export default function Spending() {
  const theme = useTheme();

  return (
    <React.Fragment>
      <Title>Spending - {getMonth()} {getYear()}</Title>
      <ResponsiveContainer>
        <LineChart
          data={data}
          margin={{
            top: 16,
            right: 16,
            bottom: 0,
            left: 24,
          }}
        >
          <XAxis
            dataKey="date"
            stroke={theme.palette.text.secondary}
            style={theme.typography.body2}
          />
          <YAxis
            stroke={theme.palette.text.secondary}
            style={theme.typography.body2}
          >
            <Label
              angle={270}
              position="left"
              style={{
                textAnchor: 'middle',
                fill: theme.palette.text.primary,
                ...theme.typography.body1,
              }}
            >
              Money Spent ($)
            </Label>
          </YAxis>
          <Line
            isAnimationActive={false}
            type="monotone"
            dataKey="amount"
            stroke={theme.palette.primary.main}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>

      <Paper
        sx={{
          p: 2,
          display: 'flex',
          flexDirection: 'column',
          height: 150,
        }}
      >
        <Title>Total Spending for {getMonth()} {getYear()}</Title>
          <Typography component="p" variant="h4">
            ${getTotalSpending(data)}
          </Typography>
      </Paper>
    </React.Fragment>
  );
}